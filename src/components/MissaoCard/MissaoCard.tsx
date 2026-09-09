import { Link } from 'react-router-dom';
import Button from '../Button/Button';

// Props tipadas: o card nao sabe de onde vem a missao, so recebe os dados prontos.
type MissaoCardProps = {
  id: number;
  titulo: string;
  descricao: string;
  recompensa: number;
  categoria: string;
  concluida: boolean;
  onGravar: (id: number) => void;
};

export default function MissaoCard({
  id,
  titulo,
  descricao,
  recompensa,
  categoria,
  concluida,
  onGravar,
}: MissaoCardProps) {
  return (
    <div
      className={`flex flex-col rounded-xl border bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md ${
        concluida ? 'border-teal' : 'border-azul/15'
      }`}
    >
      <div className="mb-2 flex items-center justify-between">
        <span className="rounded-full bg-fundo px-3 py-1 text-xs font-semibold uppercase text-azul">
          {categoria}
        </span>
        <span className="font-titulo text-sm font-bold text-teal">+{recompensa} SC</span>
      </div>

      <h3 className="mb-2 font-titulo text-base font-semibold text-azul-escuro">{titulo}</h3>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-600">{descricao}</p>

      <div className="flex flex-wrap items-center gap-3">
        {concluida ? (
          <span className="rounded-lg bg-teal/10 px-4 py-2 text-sm font-semibold text-teal">
            ✓ Validada pela IA
          </span>
        ) : (
          <Button onClick={() => onGravar(id)}>🎥 Gravar vídeo</Button>
        )}

        <Link
          to={`/missoes/${id}`}
          className="text-sm font-semibold text-azul underline-offset-2 hover:underline"
        >
          Ver detalhes
        </Link>
      </div>
    </div>
  );
}
