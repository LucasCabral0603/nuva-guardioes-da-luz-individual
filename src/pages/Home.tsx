import { Link } from 'react-router-dom';
import Card from '../components/Card/Card';

export default function Home() {
  return (
    <>
      <section className="mb-7 rounded-2xl bg-gradient-to-br from-azul-escuro to-[#1a3a7a] px-8 py-12 text-center text-white">
        <h1 className="mb-3 font-titulo text-2xl font-bold lg:text-3xl">
          Engajamento que gera valor real
        </h1>
        <p className="mx-auto mb-5 max-w-md text-white/75">
          Plataforma de gamificação que transforma ações sustentáveis em dinheiro na conta de luz.
        </p>
        <span className="inline-block rounded-full bg-gradient-to-r from-azul to-teal px-7 py-3 font-titulo font-bold">
          100 SoulCoins = R$1,00 na sua fatura ⚡
        </span>

        <div className="mt-6">
          <Link
            to="/jogo"
            className="inline-block rounded-lg bg-white px-6 py-3 text-sm font-semibold text-azul-escuro transition hover:bg-fundo"
          >
            Jogar agora
          </Link>
        </div>
      </section>

      <Card titulo="Como funciona?">
        <ol className="ml-5 list-decimal space-y-2 text-gray-700">
          <li>
            Receba uma <strong>missão sustentável</strong> diária personalizada
          </li>
          <li>Realize a ação no mundo real</li>
          <li>
            Filme e envie, a <strong>IA valida na hora</strong>
          </li>
          <li>
            Acumule <strong>SoulCoins</strong> e converta em crédito na conta de luz
          </li>
        </ol>
      </Card>

      <Card titulo="Por que a NUVA + SoulUp?" destaque>
        <p className="mb-2 leading-relaxed text-gray-700">
          A plataforma converte ação sustentável comprovada em recompensa financeira. Cada missão é
          validada por inteligência artificial, sem autodeclaração.
        </p>
        <p className="leading-relaxed text-gray-700">
          Sua <strong>comunidade compete junto com você</strong>. Quanto mais sua liga age, mais todo
          mundo ganha.
        </p>
      </Card>
    </>
  );
}
