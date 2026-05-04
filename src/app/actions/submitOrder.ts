'use server'

export async function submitOrderAction(formData: {
  name: string
  email: string
  phone: string
  company: string
  modelTitle: string
  modelId: number
  modelLink: string
  styleTitle: string
  origin: string
}) {
  const { name, email, phone, company, modelTitle, modelId, modelLink, styleTitle, origin } = formData

  const commonHeaders = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.SUPABASE_PUBLISHABLE_KEYS}`,
    'boxpage-token': process.env.BOXPAGE_TOKEN || ''
  }

  try {
    // 1. serviceNotionCrmLeadInsert
    const leadPayload = {
      name,
      email,
      mobile: phone,
      description: "Um cliente escolheu um modelo no catálogo",
      stage: "Lead",
      reference: "catalogo-de-modelos",
      origin: origin,
      notes: `DADOS DO FORMULÁRIO:
Nome: ${name}
Email: ${email}
Telefone: ${phone}
Empresa: ${company || 'Não informada'}

DADOS DO MODELO:
Modelo: ${modelTitle}
ID: ${modelId}
Estilo: ${styleTitle}
Link: ${modelLink}`
    }

    const crmResponse = await fetch('https://qvxjagwnetqbatzbmsao.supabase.co/functions/v1/serviceNotionCrmLeadInsert', {
      method: 'POST',
      headers: commonHeaders,
      body: JSON.stringify(leadPayload),
    })

    if (!crmResponse.ok) {
      const errorData = await crmResponse.text()
      console.error('Erro na API serviceNotionCrmLeadInsert:', errorData)
      // We continue anyway to try to send the email
    }

    // 2. serviceMailSendFromTheCommercial
    const clientFirstName = name.split(' ')[0]
    const mailPayload = {
      to: email,
      subject: "Recebemos sua escolha!",
      template: "boxpage",
      message: `
        <p>Olá, ${clientFirstName},</p>
        <p>Espero que esteja bem.</p>
        <p>Confirmo que recebemos a sua escolha do modelo de site através do nosso catálogo. É um ótimo ponto de partida para o seu novo site!</p>
        <p><strong>Modelo: ${modelTitle}</strong></p>
        <p><strong>Próximos Passos:</strong></p>
        <p>Para darmos seguimento, o próximo passo fundamental é a preparação do conteúdo que será inserido no site (textos, fotos, logotipos e informações de contacto). Ter este material organizado garantirá a agilidade na montagem da estrutura.</p>
        <p>Em breve, entrarei em contacto consigo para alinharmos os detalhes desta entrega e darmos continuidade ao desenvolvimento.</p>
        <p>Se tiver qualquer dúvida por agora, sigo à disposição.</p>
        <p>Com os melhores cumprimentos,<br><strong>Daiani | BoxPage</strong></p>
      `
    }

    const mailResponse = await fetch('https://qvxjagwnetqbatzbmsao.supabase.co/functions/v1/serviceMailSendFromTheCommercial', {
      method: 'POST',
      headers: commonHeaders,
      body: JSON.stringify(mailPayload),
    })

    if (!mailResponse.ok) {
      const errorData = await mailResponse.text()
      console.error('Erro na API serviceMailSendFromTheCommercial:', errorData)
    }

    return { success: true }
  } catch (error) {
    console.error('Erro ao processar pedido:', error)
    return { success: false, error: 'Ocorreu um erro ao processar o seu pedido.' }
  }
}
