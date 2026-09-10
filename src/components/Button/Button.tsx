import type { ReactNode } from 'react';

// Botao reutilizavel. Uso ele na Home, no Jogo e no Contato.
type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
  variante?: 'primario' | 'secundario';
  desabilitado?: boolean;
};

export default function Button({
  children,
  onClick,
  type = 'button',
  variante = 'primario',
  desabilitado = false,
}: ButtonProps) {
  const base =
    'inline-block rounded-lg px-6 py-3 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-50';

  const estilos = {
    primario: 'bg-azul text-white hover:bg-teal',
    secundario: 'border border-azul bg-white text-azul hover:bg-azul hover:text-white',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={desabilitado}
      className={`${base} ${estilos[variante]}`}
    >
      {children}
    </button>
  );
}
