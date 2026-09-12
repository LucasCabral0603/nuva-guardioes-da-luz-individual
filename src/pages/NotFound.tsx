import { useNavigate } from 'react-router-dom';
import Button from '../components/Button/Button';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="rounded-xl bg-white p-10 text-center shadow-sm">
      <h1 className="mb-2 font-titulo text-3xl font-bold text-azul-escuro">404</h1>
      <p className="mb-5 text-gray-600">Essa página não existe.</p>
      <Button onClick={() => navigate('/')}>Voltar para a Home</Button>
    </div>
  );
}
