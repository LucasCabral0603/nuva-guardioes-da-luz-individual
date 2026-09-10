import type { Integrante } from '../types';

// As fotos vem do GitHub (github.com/usuario.png) porque o link de foto do
// LinkedIn expira depois de um tempo e a imagem quebra.
// Quem ainda nao definiu foto fica com o avatar generico de /public/avatar.svg.
export const integrantes: Integrante[] = [
  {
    nome: 'Lucas Kaftan',
    rm: '571302',
    turma: '1TDSPV',
    foto: 'https://github.com/studdw.png',
    github: 'https://github.com/studdw',
    linkedin: 'https://www.linkedin.com/in/lucas-pasturuti-354523273/',
  },
  {
    nome: 'Lucas Luque Cabral',
    rm: '573347',
    turma: '1TDSPV',
    foto: 'https://github.com/LucasCabral0603.png',
    github: 'https://github.com/LucasCabral0603',
    linkedin: 'https://www.linkedin.com/in/lucas-luque-cabral-660940350/',
  },
  {
    nome: 'Matheus Iumatti',
    rm: '571047',
    turma: '1TDSPV',
    foto: 'https://github.com/IuRuas.png',
    github: 'https://github.com/IuRuas',
    linkedin: 'https://www.linkedin.com/in/matheus-iumatti-ruas-6923352bb/',
  },
  {
    nome: 'Vinicius Silveira Espósito',
    rm: '571844',
    turma: '1TDSPV',
    foto: 'https://github.com/ViniEsposito-dev.png',
    github: 'https://github.com/ViniEsposito-dev',
    linkedin: 'https://www.linkedin.com/in/vinicius-silveira-esposito-107a2a25a/',
  },
  {
    // TODO: trocar o avatar generico pela foto e ajustar RM, GitHub e LinkedIn
    nome: 'Joao Carlos',
    rm: '000000',
    turma: '1TDSPV',
    foto: '/avatar.svg',
    github: 'https://github.com/',
    linkedin: 'https://www.linkedin.com/',
  },
];
