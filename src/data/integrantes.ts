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
    nome: 'Matheus Iumatti',
    rm: '571047',
    turma: '1TDSPV',
    foto: 'https://media.licdn.com/dms/image/v2/D4D03AQGPjLE86UcqKQ/profile-displayphoto-shrink_800_800/B4DZQrte1sGgAc-/0/1735900131165?e=1790812800&v=beta&t=LIwLYW_o9iQBodlO7fPuSxYwEPiDvEUcb_gDZWVlpcA',
    github: 'https://github.com/IuRuas',
    linkedin: 'https://www.linkedin.com/in/matheus-iumatti-ruas-6923352bb/',
  },
  {
    nome: 'Vinicius Silveira Espósito',
    rm: '571844',
    turma: '1TDSPV',
    foto: 'https://media.licdn.com/dms/image/v2/D4D03AQH1f1-EAjR1BQ/profile-displayphoto-crop_800_800/B4DZx7KvIPGUAI-/0/1771592940499?e=1790812800&v=beta&t=K-cSXQDJPswPnktTN2qZPTBthNvNOwBdYU_aQrVLhlE',
    github: 'https://github.com/ViniEsposito-dev',
    linkedin: 'https://www.linkedin.com/in/vinicius-silveira-esposito-107a2a25a/',
  },
  {
    nome: 'Joao Carlos',
    rm: '568952',
    turma: '1TDSPV',
    foto: 'https://media.licdn.com/dms/image/v2/D4D03AQGAxyYOO32cbg/profile-displayphoto-scale_200_200/B4DZyMkw6rGQAY-/0/1771884974274?e=1790812800&v=beta&t=7lYqChDauJ_rySa7UjrDy9VkeF4Zq_GlJus2EzWxd9w',
    github: 'https://github.com/jocax007',
    linkedin: 'https://www.linkedin.com/in/jo%C3%A3o-carlos-lopes-957976264/',
  },
];
