import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Jogo from './pages/Jogo';
import MissaoDetalhe from './pages/MissaoDetalhe';
import Integrantes from './pages/Integrantes';
import Faq from './pages/Faq';
import Contato from './pages/Contato';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      {/* Todas as paginas ficam dentro do Layout (Header + Footer) */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="jogo" element={<Jogo />} />
        {/* rota dinamica com parametro na URL */}
        <Route path="missoes/:id" element={<MissaoDetalhe />} />
        <Route path="integrantes" element={<Integrantes />} />
        <Route path="faq" element={<Faq />} />
        <Route path="contato" element={<Contato />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
