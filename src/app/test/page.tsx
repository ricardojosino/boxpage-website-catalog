'use client'

import React from 'react';
import { 
  EmailLayout, 
  h1, 
  text, 
  section, 
  row,
  label, 
  value, 
  hr, 
  footer,
  main
} from '@/components/emails/EmailLayout';
import {
  Heading,
  Section,
  Text,
  Hr,
} from '@react-email/components';

/**
 * MOCK DATA - Use isso para testar seus componentes
 */
const mockData = {
  name: "Ricardo Josino (Teste)",
  email: "teste@exemplo.com",
  phone: "+351 912 345 678",
  company: "BoxPage Tech",
  modelTitle: "Glamour Prime",
  styleTitle: "Modern Dark"
};

/**
 * 📧 COMPONENTE EM TESTE
 * Altere o conteúdo desta função para testar diferentes templates.
 */
function ComponentUnderTest() {
  return (
    <>
      <Heading style={h1}>Novo Pedido de Modelo</Heading>
      
      <Text style={text}>Olá Daiani,</Text>
      <Text style={text}>
        Um cliente acabou de escolher um modelo de site pelo catálogo. Seguem os detalhes:
      </Text>
      
      <Section style={section}>
        <div style={row}>
          <Text style={label}>Cliente:</Text>
          <Text style={value}>{mockData.name}</Text>
        </div>
        
        <div style={row}>
          <Text style={label}>Email:</Text>
          <Text style={value}>{mockData.email}</Text>
        </div>
        
        <div style={row}>
          <Text style={label}>Telemóvel / Whatsapp:</Text>
          <Text style={value}>{mockData.phone}</Text>
        </div>
        
        <div style={row}>
          <Text style={label}>Empresa:</Text>
          <Text style={value}>{mockData.company}</Text>
        </div>
        
        <Hr style={hr} />
        
        <div style={row}>
          <Text style={label}>Modelo Escolhido:</Text>
          <Text style={value}>{mockData.modelTitle}</Text>
        </div>
        
        <div style={row}>
          <Text style={label}>Estilo:</Text>
          <Text style={value}>{mockData.styleTitle}</Text>
        </div>
      </Section>
      
      <Text style={footer}>
        Este e-mail foi gerado automaticamente pelo BoxPage Catalog.
      </Text>
    </>
  );
}

// ----------------------------------------------------------------------------
// 🏗️ SHELL GENÉRICA DO TESTADOR
// Não precisa alterar nada abaixo, a menos que queira mudar a moldura do teste.
// ----------------------------------------------------------------------------

export default function TestEmailPage() {
  return (
    <div style={{ padding: '40px', backgroundColor: '#f0f2f5', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ width: '100%', maxWidth: '800px', backgroundColor: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', marginBottom: '40px' }}>
        
        {/* Header do Testador */}
        <div style={{ padding: '20px', backgroundColor: '#16a9fa', color: 'white', textAlign: 'center' }}>
          <h2 style={{ margin: 0 }}>Email Sandbox</h2>
          <p style={{ margin: '5px 0 0', opacity: 0.8 }}>Ambiente de testes para componentes de e-mail</p>
        </div>
        
        {/* Área de Preview */}
        <div style={main}>
          {/* O EmailLayout é aplicado aqui para simular o container real do e-mail */}
          <div style={{ backgroundColor: '#ffffff', margin: '0 auto', padding: '40px', borderRadius: '8px', maxWidth: '600px', width: '100%' }}>
            <ComponentUnderTest />
          </div>
        </div>
      </div>
      
      <div style={{ maxWidth: '600px', backgroundColor: '#e8f4fd', padding: '15px', borderRadius: '8px', border: '1px solid #b8daff', color: '#004085', fontSize: '13px', textAlign: 'center' }}>
        <strong>Dica:</strong> Para testar um novo template, basta editar a função <code>ComponentUnderTest</code> no arquivo <code>src/app/test/page.tsx</code>.
      </div>
    </div>
  );
}
