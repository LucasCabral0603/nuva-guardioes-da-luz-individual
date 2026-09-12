export default function Footer() {
  const ano = new Date().getFullYear();

  return (
    <footer className="mt-10 border-t-[3px] border-teal bg-gradient-to-br from-azul-escuro to-[#162B5E] px-5 py-6 text-center text-sm text-white/60">
      <p>{ano} NUVA — Guardiões da Luz</p>
      <p className="mt-1">FIAP · 1TDSPV · Front-End Design Engineering · Sprint 03</p>
    </footer>
  );
}
