# Instruções de envio de e-mail

## Exemplo de uso

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API);

await resend.emails.send({
  from: 'BoxPage - Atendimento <ola@boxpage.pt>',
  to: [''],
  subject: 'hello world',
  html: '<p>it works!</p>',
});