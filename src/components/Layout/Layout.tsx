import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

// O Layout monta Header e Footer uma vez so.
// O <Outlet /> e o lugar onde a pagina da rota atual aparece.
export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-fundo font-corpo text-texto">
      <Header />
      <main className="mx-auto w-full max-w-4xl flex-1 px-5 py-9">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
