import Card from '../components/Card/Card';

export default function Sobre() {
  return (
    <>
      <h1 className="mb-5 font-titulo text-2xl font-bold text-azul-escuro">Sobre a NUVA</h1>

      <Card>
        <p className="leading-relaxed text-gray-700">
          A NUVA é uma empresa de tecnologia focada em gamificação com impacto financeiro. O objetivo
          é transformar ações sustentáveis em benefícios concretos para o usuário.
        </p>
      </Card>

      <Card titulo="O problema">
        <p className="mb-3 leading-relaxed text-gray-700">
          Hoje o usuário não tem incentivo financeiro direto para economizar energia. Os aplicativos
          existentes oferecem apenas pontos simbólicos.
        </p>
        <ul className="ml-5 list-disc space-y-2 text-gray-700">
          <li>Sem retorno financeiro imediato</li>
          <li>Sem validação das ações</li>
          <li>Sem motivo para uso diário</li>
        </ul>
      </Card>

      <Card titulo="A solução" destaque>
        <p className="mb-3 leading-relaxed text-gray-700">
          O sistema <strong>Guardiões da Luz</strong> entrega missões sustentáveis e converte o
          resultado em desconto na conta de energia.
        </p>
        <p className="mb-3 font-titulo font-bold text-azul">100 SoulCoins = R$1,00</p>
        <p className="leading-relaxed text-gray-700">
          As ações são validadas por inteligência artificial pela câmera, então só atividade real é
          recompensada.
        </p>
      </Card>

      <Card titulo="Como funciona">
        <ol className="ml-5 list-decimal space-y-2 text-gray-700">
          <li>O usuário recebe uma missão diária</li>
          <li>Realiza a ação sustentável</li>
          <li>Registra a ação com a câmera</li>
          <li>A IA valida a missão</li>
          <li>O usuário recebe SoulCoins</li>
        </ol>
      </Card>

      <Card titulo="Diferenciais">
        <ul className="ml-5 list-disc space-y-2 text-gray-700">
          <li>Recompensa financeira real</li>
          <li>Validação por inteligência artificial</li>
          <li>Missões diárias com engajamento contínuo</li>
          <li>Conversão direta em crédito na conta de luz</li>
          <li>Sistema de progressão e ranking</li>
        </ul>
      </Card>

      <Card titulo="Inovação">
        <p className="leading-relaxed text-gray-700">
          O projeto une gamificação, inteligência artificial e retorno financeiro direto. O usuário
          recebe valor real pelas ações, o que mantém o uso do app no dia a dia.
        </p>
      </Card>
    </>
  );
}
