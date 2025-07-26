// lib/enviarMensagem.ts
import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';

export const enviarMensagem = async (
  nome: string,
  telefone: string,
  email: string,
  assunto: string,
  mensagem: string
) => {
  try {
    // Adiciona uma nova mensagem na coleção "contatos"
    await addDoc(collection(db, 'contatos'), {
      nome,
      telefone,
      email,
      assunto,
      mensagem,
      data: new Date(), // Armazena a data de envio
    });
    alert('Mensagem enviada com sucesso!');
  } catch (error) {
    console.error('Erro ao enviar a mensagem: ', error);
    alert('Erro ao enviar a mensagem.');
  }
};
