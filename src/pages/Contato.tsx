import { useState } from 'react';
import { useForm } from 'react-hook-form';
import type { ContatoForm } from '../types';
import Button from '../components/Button/Button';

export default function Contato() {
  const [enviado, setEnviado] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContatoForm>();

  function aoEnviar(dados: ContatoForm) {
    // Sem API nesta sprint, entao so mostro no console e confirmo na tela.
    console.log('Dados do formulário:', dados);
    setEnviado(true);
    reset();
  }

  const classeInput =
    'w-full rounded-lg border bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-azul focus:bg-white focus:ring-4 focus:ring-azul/10';

  return (
    <>
      <h1 className="mb-5 font-titulo text-2xl font-bold text-azul-escuro">Contato</h1>

      <form
        onSubmit={handleSubmit(aoEnviar)}
        noValidate
        className="rounded-xl bg-white p-6 shadow-sm"
      >
        <div className="mb-4">
          <label htmlFor="nome" className="mb-1 block text-sm font-semibold text-azul-escuro">
            Nome
          </label>
          <input
            id="nome"
            type="text"
            placeholder="Seu nome completo"
            className={`${classeInput} ${errors.nome ? 'border-red-400' : 'border-gray-300'}`}
            {...register('nome', {
              required: 'Informe seu nome',
              minLength: { value: 3, message: 'O nome precisa ter pelo menos 3 letras' },
            })}
          />
          {errors.nome && <p className="mt-1 text-sm text-red-500">{errors.nome.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="mb-1 block text-sm font-semibold text-azul-escuro">
            E-mail
          </label>
          <input
            id="email"
            type="email"
            placeholder="voce@email.com"
            className={`${classeInput} ${errors.email ? 'border-red-400' : 'border-gray-300'}`}
            {...register('email', {
              required: 'Informe seu e-mail',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Digite um e-mail válido',
              },
            })}
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
        </div>

        <div className="mb-5">
          <label htmlFor="mensagem" className="mb-1 block text-sm font-semibold text-azul-escuro">
            Mensagem
          </label>
          <textarea
            id="mensagem"
            rows={5}
            placeholder="Escreva sua mensagem"
            className={`${classeInput} resize-y ${
              errors.mensagem ? 'border-red-400' : 'border-gray-300'
            }`}
            {...register('mensagem', {
              required: 'Escreva uma mensagem',
              minLength: { value: 10, message: 'A mensagem precisa ter pelo menos 10 caracteres' },
            })}
          />
          {errors.mensagem && <p className="mt-1 text-sm text-red-500">{errors.mensagem.message}</p>}
        </div>

        <Button type="submit">Enviar</Button>

        {enviado && (
          <p className="mt-4 font-semibold text-teal">Mensagem enviada! Vamos responder em breve.</p>
        )}
      </form>
    </>
  );
}
