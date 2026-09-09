import { useState } from 'react';

type FaqItemProps = {
  pergunta: string;
  resposta: string;
};

// useState numero 3: cada pergunta controla se esta aberta ou fechada.
export default function FaqItem({ pergunta, resposta }: FaqItemProps) {
  const [aberta, setAberta] = useState(false);

  return (
    <div className="mb-3 overflow-hidden rounded-lg border-l-4 border-teal bg-white shadow-sm">
      <button
        type="button"
        onClick={() => setAberta(!aberta)}
        aria-expanded={aberta}
        className="flex w-full items-center justify-between px-5 py-4 text-left"
      >
        <span className="font-titulo text-base font-semibold text-azul-escuro">{pergunta}</span>
        <span className="ml-3 text-xl text-azul">{aberta ? '−' : '+'}</span>
      </button>

      {aberta && <p className="px-5 pb-4 text-sm leading-relaxed text-gray-600">{resposta}</p>}
    </div>
  );
}
