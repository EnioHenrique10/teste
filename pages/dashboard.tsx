import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { auth } from '../lib/firebase';
import { signOut } from 'firebase/auth';

// MOCKS
const consultasHoje = 5;
const consultasSemana = 18;
const canceladas = 2;
const pacientesMes = 34;

const proximasConsultas = [
  { id: 1, paciente: 'João Silva', data: 'Hoje - 14:00', tipo: 'Consulta Geral' },
  { id: 2, paciente: 'Maria Oliveira', data: 'Hoje - 15:30', tipo: 'Retorno' },
  { id: 3, paciente: 'Ana Costa', data: 'Hoje - 16:00', tipo: 'Cardiologia' },
];

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (!user) {
        router.push('/');
      }
    });
    return () => unsubscribe();
  }, [router]);

  async function handleLogout() {
    await signOut(auth);
    router.push('/');
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f3f8ff' }}>
      
      {/* Sidebar */}
      <aside style={{ width: '230px', backgroundColor: '#1e4df6', color: 'white', padding: '2rem 1rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Dr. Samuel</h2>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <button onClick={() => router.push('/dashboard')} style={navBtn}>🏠 Visão Geral</button>
          <button onClick={() => router.push('/consultas')} style={navBtn}>📅 Consultas</button>
          <button onClick={() => router.push('/historico')} style={navBtn}>📁 Histórico</button>
          <button onClick={() => router.push('/#')} style={navBtn}>👤 Perfil</button>
          <button onClick={handleLogout} style={{ ...navBtn, marginTop: '2rem', background: 'white', color: '#1e4df6' }}>
            🚪 Sair
          </button>
        </nav>
      </aside>

      {/* Conteúdo Principal */}
      <main style={{ flex: 1, padding: '2rem' }}>
        <h1 style={{ color: '#1e4df6', marginBottom: '2rem' }}>Painel de Controle</h1>

        {/* Cards */}
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          <Card titulo="Consultas Hoje" valor={consultasHoje} />
          <Card titulo="Essa Semana" valor={consultasSemana} />
          <Card titulo="Canceladas" valor={canceladas} />
          <Card titulo="Pacientes no Mês" valor={pacientesMes} />
        </div>

        {/* Próximas Consultas */}
        <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
          <h2 style={{ color: '#1e4df6', marginBottom: '1rem' }}>Próximas Consultas</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#e8eeff' }}>
                <th style={thStyle}>Paciente</th>
                <th style={thStyle}>Data/Hora</th>
                <th style={thStyle}>Tipo</th>
              </tr>
            </thead>
            <tbody>
              {proximasConsultas.map(c => (
                <tr key={c.id} style={{ borderBottom: '1px solid #ddd' }}>
                  <td style={tdStyle}>{c.paciente}</td>
                  <td style={tdStyle}>{c.data}</td>
                  <td style={tdStyle}>{c.tipo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

// Componente de Card
function Card({ titulo, valor }: { titulo: string; valor: number }) {
  return (
    <div style={{
      flex: '1 1 200px',
      background: 'white',
      padding: '1rem',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      color: '#1e4df6',
    }}>
      <h3>{titulo}</h3>
      <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{valor}</p>
    </div>
  );
}

// Estilos reutilizáveis
const navBtn: React.CSSProperties = {
  background: 'transparent',
  border: 'none',
  color: 'white',
  fontSize: '1rem',
  textAlign: 'left',
  cursor: 'pointer',
  padding: '0.5rem 0',
};

const thStyle: React.CSSProperties = {
  textAlign: 'left',
  padding: '0.75rem',
  color: '#1e4df6',
};

const tdStyle: React.CSSProperties = {
  padding: '0.75rem',
  color: '#333',
};
