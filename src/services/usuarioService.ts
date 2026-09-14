import type { Usuario } from '../types';

const API_URL = 'http://localhost:8080/api/usuarios';

export async function listarUsuarios(): Promise<Usuario[]> {
  const resposta = await fetch(API_URL);

  if (!resposta.ok) {
    throw new Error('Não foi possível carregar os usuários da API.');
  }

  return resposta.json();
}

export async function cadastrarUsuario(
  nome: string,
  email: string
): Promise<Usuario> {
  const resposta = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      nome,
      email,
    }),
  });

  if (!resposta.ok) {
    throw new Error('Não foi possível cadastrar o usuário.');
  }

  return resposta.json();
}