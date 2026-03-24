import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Section,
} from '@react-email/components';
import React from 'react';

interface EmailLayoutProps {
  children: React.ReactNode;
  previewText: string;
}

export const EmailLayout = ({
  children,
  previewText,
}: EmailLayoutProps) => {
  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={main}>
        <Container style={container}>
          {children}
        </Container>
      </Body>
    </Html>
  );
};

export const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  padding: '40px 20px',
};

export const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '16px',
  borderRadius: '8px',
  maxWidth: '600px',
  width: '100%',
};

export const h1 = {
  color: '#333',
  fontSize: '24px',
  fontWeight: 'bold',
  textAlign: 'center' as const,
  margin: '0 0 30px 0',
};

export const text = {
  color: '#333',
  fontSize: '16px',
  lineHeight: '24px',
  margin: '10px 0',
};

export const section = {
  margin: '24px 0',
  padding: '0',
};

// Nova estrutura de Row
export const row = {
  marginBottom: '16px',
};

export const label = {
  fontSize: '12px',
  fontWeight: 'bold',
  color: '#8898aa',
  textTransform: 'uppercase' as const,
  margin: '0',
  lineHeight: '1.2',
};

export const value = {
  fontSize: '16px',
  color: '#333',
  margin: '2px 0 0 0',
  fontWeight: '500',
  lineHeight: '1.4',
};

export const hr = {
  borderColor: '#e6ebf1',
  margin: '24px 0',
};

export const footer = {
  color: '#8898aa',
  fontSize: '12px',
  marginTop: '32px',
  textAlign: 'center' as const,
};

export const link = {
  color: '#16a9fa',
  textDecoration: 'none',
  fontSize: '14px',
  fontWeight: 'bold',
};

export const button = {
  backgroundColor: '#16a9fa',
  borderRadius: '5px',
  color: '#fff',
  fontSize: '14px',
  fontWeight: 'bold',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'inline-block',
  padding: '12px 24px',
  marginTop: '4px',
};
