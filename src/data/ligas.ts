import type { MembroLiga } from '../types';

// Ranking simulado da liga da semana. "voce" marca a linha do jogador.
export const ligaSemanal: MembroLiga[] = [
  { id: 1, nome: 'Camila R.', soulcoins: 1840, missoesConcluidas: 14 },
  { id: 2, nome: 'Rafael M.', soulcoins: 1620, missoesConcluidas: 12 },
  { id: 3, nome: 'Beatriz S.', soulcoins: 1475, missoesConcluidas: 11 },
  { id: 4, nome: 'Diego A.', soulcoins: 1290, missoesConcluidas: 10 },
  { id: 5, nome: 'Você', soulcoins: 0, missoesConcluidas: 0, voce: true },
  { id: 6, nome: 'Helena P.', soulcoins: 980, missoesConcluidas: 8 },
  { id: 7, nome: 'Tiago F.', soulcoins: 845, missoesConcluidas: 7 },
  { id: 8, nome: 'Larissa C.', soulcoins: 620, missoesConcluidas: 5 },
];
