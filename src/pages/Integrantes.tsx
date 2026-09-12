import { integrantes } from '../data/integrantes';
import IntegranteCard from '../components/IntegranteCard/IntegranteCard';

export default function Integrantes() {
  return (
    <>
      <h1 className="mb-1 text-center font-titulo text-2xl font-bold text-azul-escuro">Equipe</h1>
      <p className="mb-7 text-center text-gray-500">Turma 1TDSPV</p>

      <ul className="grid list-none grid-cols-1 gap-5 xs:grid-cols-2 lg:grid-cols-3">
        {integrantes.map((pessoa) => (
          <IntegranteCard
            key={pessoa.nome}
            nome={pessoa.nome}
            rm={pessoa.rm}
            turma={pessoa.turma}
            foto={pessoa.foto}
            github={pessoa.github}
            linkedin={pessoa.linkedin}
          />
        ))}
      </ul>
    </>
  );
}
