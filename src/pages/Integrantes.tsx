import React, { useEffect, useState } from 'react';
import { integrantes } from '../data/integrantes';
import IntegranteCard from '../components/IntegranteCard/IntegranteCard';
import { cadastrarUsuario, listarUsuarios } from '../services/usuarioService';
import type { Usuario } from '../types';

export default function Integrantes() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState('');

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    async function carregarUsuarios() {
      try {
        const dados = await listarUsuarios();
        setUsuarios(dados);
      } catch {
        setErro('Não foi possível carregar os usuários da API.');
      } finally {
        setCarregando(false);
      }
    }

    carregarUsuarios();
  }, []);

  async function handleCadastrar(e: React.FormEvent) {
    e.preventDefault();

    try {
      const novoUsuario = await cadastrarUsuario(nome, email);

      setUsuarios((usuariosAtuais) => [
        ...usuariosAtuais,
        novoUsuario,
      ]);

      setNome('');
      setEmail('');
      setErro('');
    } catch {
      setErro('Não foi possível cadastrar o usuário.');
    }
  }

  return (
    <>
      <h1 className="mb-1 text-center font-titulo text-2xl font-bold text-azul-escuro">
        Equipe
      </h1>

      <p className="mb-7 text-center text-gray-500">
        Turma 1TDSPV
      </p>

      <ul className="grid list-none grid-cols-1 gap-5 xs:grid-cols-2 lg:grid-cols-3">
        {integrantes.map((pessoa) => (
          <IntegranteCard
            key={pessoa.nome}
            nome={pessoa.nome}
            rm={pessoa.rm}
            turma={pessoa.turma}
            foto={pessoa.foto}
            github={pessoa.github}
            linkedin={pessoa.linkedin}
          />
        ))}
      </ul>

      <div className="mt-10 rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-center text-xl font-bold text-azul-escuro">
          Cadastrar usuário
        </h2>

        <form onSubmit={handleCadastrar} className="mx-auto max-w-md space-y-4">
          <input
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
            className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-500"
          />

          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-500"
          />

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 p-3 font-semibold text-white hover:bg-blue-700"
          >
            Cadastrar usuário
          </button>
        </form>
      </div>

      <div className="mt-10 rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-center text-xl font-bold text-azul-escuro">
          Usuários cadastrados na API
        </h2>

        {carregando && (
          <p className="text-center text-gray-500">
            Carregando usuários...
          </p>
        )}

        {erro && (
          <p className="text-center text-red-500">
            {erro}
          </p>
        )}

        {!carregando && !erro && usuarios.length === 0 && (
          <p className="text-center text-gray-500">
            Nenhum usuário cadastrado.
          </p>
        )}

        {!carregando && !erro && usuarios.length > 0 && (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {usuarios.map((usuario) => (
              <div
                key={usuario.id}
                className="rounded-lg border border-gray-200 p-4"
              >
                <h3 className="font-bold text-azul-escuro">
                  {usuario.nome}
                </h3>

                <p className="text-sm text-gray-500">
                  {usuario.email}
                </p>

                <p className="mt-2 font-semibold text-blue-600">
                  {usuario.pontos} pontos
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}