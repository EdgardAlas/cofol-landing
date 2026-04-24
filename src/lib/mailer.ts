import { Resend } from 'resend';

interface ContactEmailOptions {
  name: string;
  email: string;
  message: string;
}

export async function sendContactEmail({ name, email, message }: ContactEmailOptions) {
  const resend = new Resend(import.meta.env.RESEND_API_KEY);

  const { error } = await resend.emails.send({
    from: `${import.meta.env.SENDER_NAME} <${import.meta.env.SENDER_EMAIL}>`,
    to: import.meta.env.RECEIVER_EMAILS.split(','),
    subject: `Nuevo mensaje de contacto de ${name}`,
    html: `
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `,
  });

  if (error) throw error;
}
