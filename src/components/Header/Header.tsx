import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const links = [
  { para: '/', texto: 'Home' },
  { para: '/sobre', texto: 'Sobre' },
  { para: '/jogo', texto: 'Jogo' },
  { para: '/integrantes', texto: 'Integrantes' },
  { para: '/faq', texto: 'FAQ' },
  { para: '/contato', texto: 'Contato' },
];

export default function Header() {
  // useState numero 1: controla o menu hamburguer no celular
  const [menuAberto, setMenuAberto] = useState(false);

  // classe do link muda quando a rota esta ativa
  const classeLink = ({ isActive }: { isActive: boolean }) =>
    `rounded-full px-4 py-2 text-sm font-medium transition ${
      isActive ? 'bg-white/20 text-white' : 'text-white/75 hover:bg-white/10 hover:text-white'
    }`;

  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-azul-escuro to-[#162B5E] text-white after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[3px] after:bg-gradient-to-r after:from-azul after:to-teal">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-5 lg:px-8">
        <Link to="/" className="font-titulo text-2xl font-bold tracking-tight">
          NUVA
        </Link>

        {/* menu do desktop */}
        <nav className="hidden gap-1 md:flex">
          {links.map((link) => (
            <NavLink key={link.para} to={link.para} className={classeLink} end={link.para === '/'}>
              {link.texto}
            </NavLink>
          ))}
        </nav>

        {/* botao hamburguer, so aparece no mobile */}
        <button
          type="button"
          onClick={() => setMenuAberto(!menuAberto)}
          aria-label="Abrir menu"
          aria-expanded={menuAberto}
          className="rounded-md border border-white/30 px-3 py-2 md:hidden"
        >
          <span className="block text-lg leading-none">{menuAberto ? '✕' : '☰'}</span>
        </button>
      </div>

      {/* menu do mobile: so renderiza se estiver aberto */}
      {menuAberto && (
        <nav className="flex flex-col gap-1 border-t border-white/10 px-5 pb-5 md:hidden">
          {links.map((link) => (
            <NavLink
              key={link.para}
              to={link.para}
              end={link.para === '/'}
              onClick={() => setMenuAberto(false)} // fecha o menu ao navegar
              className={classeLink}
            >
              {link.texto}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
