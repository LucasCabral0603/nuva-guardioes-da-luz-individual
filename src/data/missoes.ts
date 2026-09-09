import type { Missao } from '../types';

// Lista fixa de missoes. Numa versao futura isso viria de uma API.
export const missoes: Missao[] = [
  {
    id: 1,
    titulo: 'Desligar aparelhos em standby',
    descricao: 'Tire da tomada os aparelhos que ficam em espera durante a noite.',
    detalhe:
      'Aparelhos em standby continuam consumindo energia mesmo desligados pelo controle. Filme os aparelhos sendo tirados da tomada com seu rosto aparecendo no video. A IA confere se a acao foi feita e libera os SoulCoins.',
    recompensa: 120,
    categoria: 'energia',
  },
  {
    id: 2,
    titulo: 'Separar o lixo reciclavel',
    descricao: 'Separe plastico, papel, vidro e metal do lixo comum.',
    detalhe:
      'Grave um video mostrando os materiais ja separados por tipo. Voce precisa aparecer no video junto com os recipientes. A validacao acontece na hora.',
    recompensa: 80,
    categoria: 'reciclagem',
  },
  {
    id: 3,
    titulo: 'Usar transporte publico',
    descricao: 'Troque o carro por onibus, metro ou trem em um trajeto do dia.',
    detalhe:
      'Registre um video curto dentro do transporte publico. A IA identifica o ambiente e confirma a missao. Vale uma vez por dia.',
    recompensa: 150,
    categoria: 'transporte',
  },
  {
    id: 4,
    titulo: 'Banho de ate 5 minutos',
    descricao: 'Reduza o tempo de banho e economize agua e energia do chuveiro.',
    detalhe:
      'Ative o cronometro do app antes de entrar no banho e registre o fim dentro do tempo. O chuveiro eletrico e um dos maiores consumidores de energia da casa.',
    recompensa: 100,
    categoria: 'agua',
  },
  {
    id: 5,
    titulo: 'Trocar uma lampada por LED',
    descricao: 'Substitua uma lampada antiga por uma de LED.',
    detalhe:
      'Filme a troca da lampada mostrando a lampada antiga e a nova. Uma lampada de LED consome bem menos que uma incandescente e dura mais.',
    recompensa: 200,
    categoria: 'energia',
  },
  {
    id: 6,
    titulo: 'Levar o oleo de cozinha ao ponto de coleta',
    descricao: 'Entregue o oleo usado em um ponto de coleta da sua regiao.',
    detalhe:
      'Guarde o oleo usado em uma garrafa e leve ate um ponto de coleta. Filme a entrega. Um litro de oleo jogado na pia contamina milhares de litros de agua.',
    recompensa: 180,
    categoria: 'reciclagem',
  },
];
