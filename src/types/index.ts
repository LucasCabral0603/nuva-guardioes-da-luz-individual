// Todos os tipos do projeto ficam aqui pra nao repetir em cada arquivo.

export type CategoriaMissao = 'energia' | 'reciclagem' | 'transporte' | 'agua';

export type Missao = {
  id: number;
  titulo: string;
  descricao: string;      // texto curto do card
  detalhe: string;        // texto completo da pagina /missoes/:id
  recompensa: number;     // quantos SoulCoins a missao vale
  categoria: CategoriaMissao;
};

export type Integrante = {
  nome: string;
  rm: string;
  turma: string;
  foto: string;
  github: string;
  linkedin: string;
};

export type MembroLiga = {
  id: number;
  nome: string;
  soulcoins: number;
  missoesConcluidas: number;
  voce?: boolean;   // marca a linha do proprio jogador no ranking
};

// Tipagem dos campos do formulario de contato (usada pelo React Hook Form)
export type ContatoForm = {
  nome: string;
  email: string;
  mensagem: string;
};
