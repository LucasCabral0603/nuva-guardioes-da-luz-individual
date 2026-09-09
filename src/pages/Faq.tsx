import FaqItem from '../components/FaqItem/FaqItem';

const perguntas = [
  {
    pergunta: 'Como ganho SoulCoins?',
    resposta:
      'Completando missões sustentáveis diárias, como economizar energia, reciclar ou usar transporte público. Cada missão tem uma pontuação diferente.',
  },
  {
    pergunta: 'Como os pontos viram dinheiro?',
    resposta:
      '100 SoulCoins valem R$1,00 de crédito na sua conta de luz. O desconto entra automaticamente na fatura do mês.',
  },
  {
    pergunta: 'Como a missão é validada?',
    resposta:
      'Você filma a ação com seu rosto aparecendo. A inteligência artificial analisa a imagem e confirma a missão em tempo real, sem autodeclaração.',
  },
  {
    pergunta: 'O que são as ligas e comunidades?',
    resposta:
      'Você faz parte de um círculo de usuários. Esses círculos competem em ligas semanais: quanto mais sua comunidade age, mais SoulCoins todo mundo acumula.',
  },
  {
    pergunta: 'As missões são sempre as mesmas?',
    resposta:
      'Não. A IA gera missões diárias com base no seu histórico, na sua localização e na temporada ativa.',
  },
];

export default function Faq() {
  return (
    <>
      <h1 className="mb-5 font-titulo text-2xl font-bold text-azul-escuro">Perguntas frequentes</h1>
      <p className="mb-5 text-sm text-gray-500">Clique na pergunta para ver a resposta.</p>

      {perguntas.map((item) => (
        <FaqItem key={item.pergunta} pergunta={item.pergunta} resposta={item.resposta} />
      ))}
    </>
  );
}
