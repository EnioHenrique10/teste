import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { auth } from '../lib/firebase';

const consultasMarcadas = [
  { id: 1, paciente: 'João Silva', data: '2025-07-28 14:00', tipo: 'Consulta Geral', status: 'Marcada' },
  { id: 2, paciente: 'Maria Oliveira', data: '2025-07-29 10:30', tipo: 'Retorno', status: 'Confirmada' },
  { id: 3, paciente: 'Carlos Pereira', data: '2025-07-30 09:00', tipo: 'Cardiologia', status: 'Marcada' },
];

export default function ConsultasPage() {
  const router = useRouter();

  useEffect(() => {
    const unsub = auth.onAuthStateChanged(user => {
      if (!user) router.push('/');
    });
    return () => unsub();
  }, [router]);

  return (
    <div style={{ padding: '2rem', background: '#f3f8ff', minHeight: '100vh' }}>
      <h1 style={{ color: '#1e4df6' }}>Consultas Marcadas</h1>
      <div style={{ marginTop: '2rem', background: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 0 8px rgba(0,0,0,0.1)' }}>
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
            {consultasMarcadas.map(c => (
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
