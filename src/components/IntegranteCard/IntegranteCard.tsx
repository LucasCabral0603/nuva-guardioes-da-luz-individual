type IntegranteCardProps = {
  nome: string;
  rm: string;
  turma: string;
  foto: string;
  github: string;
  linkedin: string;
};

export default function IntegranteCard({
  nome,
  rm,
  turma,
  foto,
  github,
  linkedin,
}: IntegranteCardProps) {
  const classeLink =
    'inline-block rounded-full border border-azul bg-fundo px-3 py-1 text-xs font-semibold text-azul transition hover:bg-azul hover:text-white';

  return (
    <li className="rounded-xl border border-azul/15 bg-white p-5 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <img
        src={foto}
        alt={`Foto de ${nome}`}
        loading="lazy"
        // se a imagem nao carregar, cai no avatar generico
        onError={(e) => {
          e.currentTarget.src = '/avatar.svg';
        }}
        className="mx-auto h-24 w-24 rounded-full border-[3px] border-azul object-cover"
      />
      <h3 className="mt-3 font-titulo text-base font-semibold text-azul-escuro">{nome}</h3>
      <p className="text-sm text-gray-500">RM: {rm}</p>
      <p className="mb-3 text-sm text-gray-500">Turma: {turma}</p>

      <div className="flex justify-center gap-2">
        <a href={github} target="_blank" rel="noopener noreferrer" className={classeLink}>
          GitHub
        </a>
        <a href={linkedin} target="_blank" rel="noopener noreferrer" className={classeLink}>
          LinkedIn
        </a>
      </div>
    </li>
  );
}
