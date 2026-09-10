import { useState, useEffect } from 'react';
import Button from '../Button/Button';
import type { Missao } from '../../types';

type ModalGravacaoProps = {
  missao: Missao;
  onFechar: () => void;
  onValidar: (id: number) => void;
};

// Prototipo da gravacao. Nao usa camera de verdade nesta sprint:
// a tela passa por 3 etapas simulando gravar -> IA analisando -> validado.
type Etapa = 'pronto' | 'gravando' | 'analisando' | 'validado';

export default function ModalGravacao({ missao, onFechar, onValidar }: ModalGravacaoProps) {
  const [etapa, setEtapa] = useState<Etapa>('pronto');
  const [segundos, setSegundos] = useState(0);

  // useEffect: controla o tempo de cada etapa da simulacao.
  useEffect(() => {
    if (etapa === 'gravando') {
      // conta os segundos da gravacao e para em 5
      const intervalo = setInterval(() => {
        setSegundos((s) => {
          if (s >= 4) {
            clearInterval(intervalo);
            setEtapa('analisando');
            return 5;
          }
          return s + 1;
        });
      }, 700);
      return () => clearInterval(intervalo);
    }

    if (etapa === 'analisando') {
      // finge o tempo que a IA levaria pra conferir o video
      const tempo = setTimeout(() => setEtapa('validado'), 1800);
      return () => clearTimeout(tempo);
    }
  }, [etapa]);

  function confirmar() {
    onValidar(missao.id);
    onFechar();
  }

  return (
    // fundo escurecido, clicar fora fecha
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onClick={onFechar}
    >
      <div
        className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()} // evita fechar ao clicar dentro
      >
        <div className="mb-3 flex items-start justify-between">
          <h2 className="font-titulo text-lg font-bold text-azul-escuro">{missao.titulo}</h2>
          <button type="button" onClick={onFechar} aria-label="Fechar" className="text-xl text-gray-400">
            ✕
          </button>
        </div>

        {/* area que representa a camera */}
        <div className="relative mb-4 flex h-52 flex-col items-center justify-center rounded-xl bg-azul-escuro text-white">
          {etapa === 'pronto' && (
            <>
              <span className="text-4xl">🎥</span>
              <p className="mt-2 text-sm text-white/70">Aponte a câmera para a ação</p>
              <p className="text-xs text-white/50">Seu rosto precisa aparecer no vídeo</p>
            </>
          )}

          {etapa === 'gravando' && (
            <>
              <span className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-red-500 px-3 py-1 text-xs font-semibold">
                <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
                REC
              </span>
              <span className="font-titulo text-3xl font-bold">00:0{segundos}</span>
              <p className="mt-2 text-sm text-white/70">Gravando a missão...</p>
            </>
          )}

          {etapa === 'analisando' && (
            <>
              <span className="text-4xl">🤖</span>
              <p className="mt-2 text-sm text-white/70">A IA está analisando o vídeo</p>
              <div className="mt-3 h-2 w-40 overflow-hidden rounded-full bg-white/20">
                <div className="h-2 w-1/2 animate-pulse rounded-full bg-teal" />
              </div>
            </>
          )}

          {etapa === 'validado' && (
            <>
              <span className="text-4xl">✅</span>
              <p className="mt-2 font-titulo font-bold">Missão validada</p>
              <p className="text-sm text-teal">+{missao.recompensa} SoulCoins</p>
            </>
          )}
        </div>

        {/* botao muda conforme a etapa */}
        {etapa === 'pronto' && <Button onClick={() => setEtapa('gravando')}>Iniciar gravação</Button>}

        {(etapa === 'gravando' || etapa === 'analisando') && (
          <Button desabilitado>{etapa === 'gravando' ? 'Gravando...' : 'Analisando...'}</Button>
        )}

        {etapa === 'validado' && <Button onClick={confirmar}>Receber SoulCoins</Button>}

        <p className="mt-3 text-xs text-gray-400">
          Protótipo da Sprint 03: a gravação é simulada, o app não acessa a câmera.
        </p>
      </div>
    </div>
  );
}
