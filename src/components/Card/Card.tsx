import type { ReactNode } from 'react';

// Card generico: e a "caixa branca" que aparece em quase todas as paginas.
type CardProps = {
  children: ReactNode;
  titulo?: string;
  destaque?: boolean; // muda a cor da barra lateral
};

export default function Card({ children, titulo, destaque = false }: CardProps) {
  const barra = destaque ? 'border-l-teal' : 'border-l-azul';

  return (
    <div
      className={`mb-5 rounded-lg border-l-4 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${barra}`}
    >
      {titulo && (
        <h2 className="mb-3 font-titulo text-xl font-bold text-azul-escuro">{titulo}</h2>
      )}
      {children}
    </div>
  );
}
