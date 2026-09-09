import { useState, useEffect } from 'react';
import { missoes } from '../data/missoes';
import { ligaSemanal } from '../data/ligas';
import MissaoCard from '../components/MissaoCard/MissaoCard';
import ModalGravacao from '../components/ModalGravacao/ModalGravacao';
import Button from '../components/Button/Button';

export default function Jogo() {
  // useState numero 2: ids das missoes ja validadas.
  // O valor inicial vem do localStorage pra nao perder o progresso ao trocar de pagina.
  const [concluidas, setConcluidas] = useState<number[]>(() => {
    const salvo = localStorage.getItem('nuva:concluidas');
    return salvo ? JSON.parse(salvo) : [];
  });

  const [saldo, setSaldo] = useState(0);

  // guarda o id da missao que abriu o modal de gravacao (null = modal fechado)
  const [missaoAberta, setMissaoAberta] = useState<number | null>(null);

  // useEffect: sempre que a lista de concluidas muda, recalcula o saldo
  // de SoulCoins e salva o progresso.
  useEffect(() => {
    const soma = missoes
      .filter((missao) => concluidas.includes(missao.id))
      .reduce((total, missao) => total + missao.recompensa, 0);

    setSaldo(soma);
    localStorage.setItem('nuva:concluidas', JSON.stringify(concluidas));
  }, [concluidas]);

  function validarMissao(id: number) {
    if (!concluidas.includes(id)) {
      setConcluidas([...concluidas, id]);
    }
  }

  function zerar() {
    setConcluidas([]);
  }

  // monta o ranking colocando o saldo atual do jogador na linha "Você"
  const ranking = ligaSemanal
    .map((membro) =>
      membro.voce
        ? { ...membro, soulcoins: saldo, missoesConcluidas: concluidas.length }
        : membro
    )
    .sort((a, b) => b.soulcoins - a.soulcoins);

  const colocacao = ranking.findIndex((membro) => membro.voce) + 1;
  const totalDaLiga = ranking.reduce((soma, membro) => soma + membro.soulcoins, 0);

  // 100 SoulCoins = R$1,00
  const reais = (saldo / 100).toFixed(2).replace('.', ',');

  const missaoSelecionada = missoes.find((missao) => missao.id === missaoAberta);

  function medalha(posicao: number) {
    if (posicao === 0) return '🥇';
    if (posicao === 1) return '🥈';
    if (posicao === 2) return '🥉';
    return `${posicao + 1}º`;
  }

  return (
    <>
      <h1 className="mb-1 font-titulo text-2xl font-bold text-azul-escuro">Guardiões da Luz</h1>
      <p className="mb-6 text-gray-600">
        Protótipo do jogo. Complete as missões, grave o vídeo e veja seu saldo e sua colocação na
        liga.
      </p>

      {/* PAINEL DO JOGADOR: saldo, colocacao e progresso */}
      <section className="mb-7 rounded-2xl bg-gradient-to-br from-azul-escuro to-[#1a3a7a] p-6 text-white">
        <div className="grid grid-cols-1 gap-5 xs:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-wide text-white/60">Saldo</p>
            <p className="font-titulo text-3xl font-bold">{saldo}</p>
            <p className="text-sm text-teal">SoulCoins · R$ {reais}</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wide text-white/60">Colocação na liga</p>
            <p className="font-titulo text-3xl font-bold">{colocacao}º</p>
            <p className="text-sm text-white/60">de {ranking.length} jogadores</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wide text-white/60">Missões do dia</p>
            <p className="font-titulo text-3xl font-bold">
              {concluidas.length}/{missoes.length}
            </p>
            <div className="mt-2 h-2 w-full rounded-full bg-white/20">
              <div
                className="h-2 rounded-full bg-teal transition-all"
                style={{ width: `${(concluidas.length / missoes.length) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* MISSOES */}
      <h2 className="mb-3 font-titulo text-xl font-bold text-azul-escuro">Missões de hoje</h2>
      <div className="mb-8 grid grid-cols-1 gap-5 xs:grid-cols-2">
        {missoes.map((missao) => (
          <MissaoCard
            key={missao.id}
            id={missao.id}
            titulo={missao.titulo}
            descricao={missao.descricao}
            recompensa={missao.recompensa}
            categoria={missao.categoria}
            concluida={concluidas.includes(missao.id)}
            onGravar={setMissaoAberta}
          />
        ))}
      </div>

      {/* LIGA */}
      <h2 className="mb-1 font-titulo text-xl font-bold text-azul-escuro">Liga da semana</h2>
      <p className="mb-3 text-sm text-gray-600">
        Sua comunidade acumulou <strong>{totalDaLiga} SoulCoins</strong> nos últimos 7 dias.
      </p>

      <ul className="list-none space-y-2">
        {ranking.map((membro, indice) => (
          <li
            key={membro.id}
            className={`flex items-center justify-between rounded-xl border p-4 shadow-sm ${
              membro.voce ? 'border-teal bg-teal/5' : 'border-azul/15 bg-white'
            }`}
          >
            <div className="flex items-center gap-4">
              <span className="w-8 text-center font-titulo text-lg">{medalha(indice)}</span>
              <div>
                <p className="font-titulo font-semibold text-azul-escuro">
                  {membro.nome}
                  {membro.voce && (
                    <span className="ml-2 rounded-full bg-teal px-2 py-0.5 text-xs text-white">
                      você
                    </span>
                  )}
                </p>
                <p className="text-sm text-gray-500">
                  {membro.missoesConcluidas} missões concluídas
                </p>
              </div>
            </div>
            <span className="font-titulo font-bold text-teal">{membro.soulcoins} SC</span>
          </li>
        ))}
      </ul>

      {concluidas.length > 0 && (
        <div className="mt-6 text-center">
          <Button variante="secundario" onClick={zerar}>
            Zerar progresso
          </Button>
        </div>
      )}

      {/* modal de gravacao, so aparece quando uma missao foi escolhida */}
      {missaoSelecionada && (
        <ModalGravacao
          missao={missaoSelecionada}
          onFechar={() => setMissaoAberta(null)}
          onValidar={validarMissao}
        />
      )}
    </>
  );
}
