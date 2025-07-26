import { useState } from 'react';
import { auth } from '../lib/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/router';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const router = useRouter();

  async function handleLogin() {
    try {
      await signInWithEmailAndPassword(auth, email, senha);
      router.push('/dashboard'); // redireciona para a página admin após login
    } catch (error) {
      alert('Erro ao fazer login. Verifique o e-mail e senha.');
    }
  }

  return (
    <div style={{ maxWidth: '400px', margin: '2rem auto', padding: '1rem', background: '#f3f8ff', borderRadius: '8px' }}>
      <h2 style={{ color: '#1e4df6' }}>Login do Dr. Samuel</h2>
      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={e => setEmail(e.target.value)}
        style={{ width: '100%', padding: '0.3rem', margin: '0.3rem 0', borderRadius: '4px' }}
      />
      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={e => setSenha(e.target.value)}
        style={{ width: '100%', padding: '0.3rem', margin: '0.3rem 0', borderRadius: '4px' }}
      />
      <button
        onClick={handleLogin}
        style={{
          width: '100%',
          backgroundColor: '#1e4df6',
          color: 'white',
          padding: '0.75rem',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontWeight: 'bold',
        }}
      >
        Entrar
      </button>
    </div>
  );
}
