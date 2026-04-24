import { NextResponse } from 'next/server';
import { generateEmailHtml } from '@/lib/email-templates';
import { createNotionOrder } from '@/lib/notion';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, company, modelId, modelTitle, modelLink, styleTitle, catalogUrl } = body;

    const subject = `Novo Pedido: #${modelId} - ${modelTitle}`;
    
    // Gera o HTML do e-mail usando template string pura (evita erro de react-dom/server)
    const htmlMessage = generateEmailHtml({
      name,
      email,
      phone,
      company,
      modelId,
      modelTitle,
      modelLink,
      styleTitle,
      catalogUrl
    });

    // 1. Envio do e-mail usando a nova API
    const emailResponse = await fetch("https://qvxjagwnetqbatzbmsao.supabase.co/functions/v1/mailSendBoxPageAdmin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`
      },
      body: JSON.stringify({
        subject,
        message: htmlMessage
      })
    });

    if (!emailResponse.ok) {
      const errorText = await emailResponse.text();
      console.error('Erro ao enviar e-mail via BoxPage API:', errorText);
      // Continuamos para salvar no Notion mesmo se o e-mail falhar, para não perder o lead? 
      // Ou retornamos erro? Geralmente é melhor tentar salvar no Notion de qualquer forma.
    }

    // 2. Salva o pedido no Notion
    try {
      await createNotionOrder({
        name,
        email,
        phone,
        company,
        modelId,
        modelTitle,
        modelLink,
        styleTitle,
        catalogUrl
      });
    } catch (notionError) {
      console.error('Erro ao salvar no Notion:', notionError);
      // Não bloqueamos a resposta se apenas o Notion falhar, mas logamos o erro.
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Erro geral no envio de e-mail:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
