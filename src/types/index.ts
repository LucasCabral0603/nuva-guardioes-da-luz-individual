// Todos os tipos do projeto ficam aqui pra nao repetir em cada arquivo.

export type CategoriaMissao =
  | 'energia'
  | 'reciclagem'
  | 'transporte'
  | 'agua';

export type Missao = {
  id: number;
  titulo: string;
  descricao: string;
  detalhe: string;
  recompensa: number;
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
  voce?: boolean;
};

// Tipagem dos campos do formulario de contato
// usada pelo React Hook Form

export type ContatoForm = {
  nome: string;
  email: string;
  mensagem: string;
};

// Tipo dos usuarios vindos da API Java

export type Usuario = {
  id: number;
  nome: string;
  email: string;
  pontos: number;
};