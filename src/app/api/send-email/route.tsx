import React from 'react';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import {
  EmailLayout,
  h1,
  text,
  section,
  row,
  label,
  value,
  hr,
  footer
} from '@/components/EmailLayout';
import {
  Heading,
  Section,
  Text,
  Hr,
  Button,
} from '@react-email/components';

const resend = new Resend(process.env.RESEND_API);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, company, modelId, modelTitle, modelLink, styleTitle, catalogUrl } = body;
 
    // Envio do e-mail usando Resend
    const { data, error } = await resend.emails.send({
      from: 'BoxPage Catalog <ola@boxpage.app>',
      to: [process.env.BOXPAGE_EMAIL || 'ricardojosino@gmail.com'],
      subject: `Novo Pedido: #${modelId} - ${modelTitle}`,
      react: (
        <EmailLayout previewText={`Novo modelo de site escolhido por ${name}`}>
          <Heading style={h1}>Novo Pedido de Modelo</Heading>
 
          <Text style={text}>Olá Daiani,</Text>
          <Text style={text}>
            Um cliente acabou de escolher um modelo de site pelo catálogo. Seguem os detalhes:
          </Text>
 
          <Section style={section}>
            <div style={row}>
              <Text style={label}>Cliente:</Text>
              <Text style={value}>{name}</Text>
            </div>
 
            <div style={row}>
              <Text style={label}>Email:</Text>
              <Text style={value}>{email}</Text>
            </div>
 
            <div style={row}>
              <Text style={label}>Telemóvel / Whatsapp:</Text>
              <Text style={value}>{phone}</Text>
            </div>
 
            {company && (
              <div style={row}>
                <Text style={label}>Empresa:</Text>
                <Text style={value}>{company}</Text>
              </div>
            )}
 
            <Hr style={hr} />
 
            <div style={row}>
              <Text style={label}>Modelo Escolhido:</Text>
              <Text style={value}>#{modelId} - {modelTitle}</Text>
            </div>
 
            {styleTitle && (
              <div style={row}>
                <Text style={label}>Estilo:</Text>
                <Text style={value}>{styleTitle}</Text>
              </div>
            )}
 
            <div style={row}>
              <Text style={label}>Amostra do modelo:</Text>
              <Button href={modelLink} style={{
                backgroundColor: '#16a9fa',
                borderRadius: '8px',
                color: '#fff',
                fontSize: '14px',
                fontWeight: 'bold',
                textDecoration: 'none',
                textAlign: 'center' as const,
                display: 'inline-block',
                padding: '12px 24px',
                marginTop: '8px',
              }}>
                Ver amostra
              </Button>
            </div>
 
            <div style={row}>
              <Text style={label}>Página do catálogo:</Text>
              <Button href={catalogUrl} style={{
                backgroundColor: '#f6f9fc',
                borderRadius: '8px',
                color: '#16a9fa',
                fontSize: '14px',
                fontWeight: 'bold',
                textDecoration: 'none',
                textAlign: 'center' as const,
                display: 'inline-block',
                padding: '12px 24px',
                marginTop: '8px',
                border: '1px solid #16a9fa'
              }}>
                Ver no catálogo
              </Button>
            </div>
          </Section>

          <Text style={footer}>
            Este e-mail foi gerado automaticamente pelo BoxPage Catalog.
          </Text>
        </EmailLayout>
      ),
    });

    if (error) {
      console.error('Erro ao enviar e-mail via Resend:', error);
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ data });
  } catch (error) {
    console.error('Erro geral no envio de e-mail:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
