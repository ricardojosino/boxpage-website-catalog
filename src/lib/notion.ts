import { Client } from '@notionhq/client';

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export interface NotionOrderData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  modelId: string;
  modelTitle: string;
  modelLink: string;
  styleTitle?: string;
  catalogUrl: string;
}

export async function createNotionOrder(data: NotionOrderData) {
  try {
    const response = await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_DATABASE_ORDER_ID || '',
      },
      properties: {
        'Cliente': {
          title: [
            {
              text: {
                content: data.name,
              },
            },
          ],
        },
        'E-mail': {
          email: data.email,
        },
        'Telefone': {
          phone_number: data.phone,
        },
        'Origem': {
          url: data.catalogUrl,
        },
        'Mensagem': {
          rich_text: [
            {
              text: {
                content: 'Um cliente acabou de escolher um modelo de site pelo catálogo',
              },
            },
          ],
        },
      },
      children: [
        {
          object: 'block',
          type: 'heading_2',
          heading_2: {
            rich_text: [{ type: 'text', text: { content: 'Detalhes do Modelo Escolhido' } }],
          },
        },
        {
          object: 'block',
          type: 'paragraph',
          paragraph: {
            rich_text: [
              {
                type: 'text',
                text: { content: `Modelo: #${data.modelId} - ${data.modelTitle}` },
                annotations: { bold: true },
              },
            ],
          },
        },
        data.styleTitle ? {
          object: 'block',
          type: 'paragraph',
          paragraph: {
            rich_text: [
              { type: 'text', text: { content: `Estilo: ${data.styleTitle}` } },
            ],
          },
        } : ({} as any),
        data.company ? {
          object: 'block',
          type: 'paragraph',
          paragraph: {
            rich_text: [
              { type: 'text', text: { content: `Empresa: ${data.company}` } },
            ],
          },
        } : ({} as any),
        {
          object: 'block',
          type: 'divider',
          divider: {},
        },
        {
          object: 'block',
          type: 'paragraph',
          paragraph: {
            rich_text: [
              {
                type: 'text',
                text: { content: 'Ver Amostra do Modelo', link: { url: data.modelLink } },
              },
            ],
          },
        },
        {
          object: 'block',
          type: 'paragraph',
          paragraph: {
            rich_text: [
              {
                type: 'text',
                text: { content: 'Ver no Catálogo', link: { url: data.catalogUrl } },
              },
            ],
          },
        },
      ].filter(block => block && Object.keys(block).length > 0),
    });

    return response;
  } catch (error) {
    console.error('Error creating Notion order:', error);
    throw error;
  }
}
