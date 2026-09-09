import { useParams, useNavigate, Link } from 'react-router-dom';
import { missoes } from '../data/missoes';
import Button from '../components/Button/Button';

// Rota dinamica: /missoes/:id
export default function MissaoDetalhe() {
  const { id } = useParams();          // le o parametro da URL
  const navigate = useNavigate();      // usado pra voltar e pra redirecionar

  const missao = missoes.find((item) => item.id === Number(id));

  // Se o id da URL nao existir, mostra um aviso em vez de quebrar a tela.
  if (!missao) {
    return (
      <div className="rounded-lg bg-white p-8 text-center shadow-sm">
        <h1 className="mb-3 font-titulo text-xl font-bold text-azul-escuro">
          Missão não encontrada
        </h1>
        <p className="mb-5 text-gray-600">O código "{id}" não corresponde a nenhuma missão.</p>
        <Button onClick={() => navigate('/jogo')}>Voltar para o jogo</Button>
      </div>
    );
  }

  return (
    <>
      <Link to="/jogo" className="mb-4 inline-block text-sm font-semibold text-azul">
        ← Voltar para o jogo
      </Link>

      <article className="rounded-xl border-l-4 border-teal bg-white p-7 shadow-sm">
        <span className="rounded-full bg-fundo px-3 py-1 text-xs font-semibold uppercase text-azul">
          {missao.categoria}
        </span>

        <h1 className="mb-3 mt-3 font-titulo text-2xl font-bold text-azul-escuro">
          {missao.titulo}
        </h1>

        <p className="mb-4 leading-relaxed text-gray-700">{missao.detalhe}</p>

        <div className="mb-5 rounded-lg bg-fundo p-4">
          <p className="font-titulo font-bold text-teal">
            Recompensa: {missao.recompensa} SoulCoins
          </p>
          <p className="text-sm text-gray-600">
            Equivale a R$ {(missao.recompensa / 100).toFixed(2).replace('.', ',')} de desconto.
          </p>
        </div>

        <Button onClick={() => navigate('/jogo')}>Gravar essa missão no jogo</Button>
      </article>
    </>
  );
}
