import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { auth } from '../lib/firebase';

type Consulta = {
  id: number;
  paciente: string;
  data: string;
  tipo: string;
  status: string;
};

const historicoMock: Consulta[] = [
  { id: 1, paciente: 'Lucas Mendes', data: '2025-07-10 09:00', tipo: 'Geral', status: 'Concluída' },
  { id: 2, paciente: 'Renata Souza', data: '2025-07-12 11:00', tipo: 'Ortopedia', status: 'Cancelada' },
  { id: 3, paciente: 'Tiago Santos', data: '2025-07-15 13:30', tipo: 'Retorno', status: 'Concluída' },
];

export default function HistoricoPage() {
  const router = useRouter();
  const [filtroNome, setFiltroNome] = useState('');
  const [filtroStatus, setFiltroStatus] = useState('');
  
  useEffect(() => {
    const unsub = auth.onAuthStateChanged(user => {
      if (!user) router.push('/');
    });
    return () => unsub();
  }, [router]);

  const consultasFiltradas = historicoMock.filter(c => 
    c.paciente.toLowerCase().includes(filtroNome.toLowerCase()) &&
    (filtroStatus === '' || c.status === filtroStatus)
  );

  return (
    <div style={{ padding: '2rem', background: '#f3f8ff', minHeight: '100vh' }}>
      <h1 style={{ color: '#1e4df6' }}>Histórico de Consultas</h1>

      {/* Filtros */}
      <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Buscar por paciente"
          value={filtroNome}
          onChange={e => setFiltroNome(e.target.value)}
          style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc', flex: 1 }}
        />
        <select
          value={filtroStatus}
          onChange={e => setFiltroStatus(e.target.value)}
          style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
        >
          <option value="">Todos</option>
          <option value="Concluída">Concluídas</option>
          <option value="Cancelada">Canceladas</option>
        </select>
      </div>

      {/* Tabela */}
      <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 0 8px rgba(0,0,0,0.1)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#e8eeff' }}>
              <th style={thStyle}>Paciente</th>
              <th style={thStyle}>Data</th>
              <th style={thStyle}>Tipo</th>
              <th style={thStyle}>Status</th>
            </tr>
          </thead>
          <tbody>
            {consultasFiltradas.map(c => (
              <tr key={c.id} style={{ borderBottom: '1px solid #ddd' }}>
                <td style={tdStyle}>{c.paciente}</td>
                <td style={tdStyle}>{c.data}</td>
                <td style={tdStyle}>{c.tipo}</td>
                <td style={tdStyle}>{c.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const thStyle: React.CSSProperties = {
  textAlign: 'left',
  padding: '0.75rem',
  color: '#1e4df6',
};

const tdStyle: React.CSSProperties = {
  padding: '0.75rem',
  color: '#333',
};
