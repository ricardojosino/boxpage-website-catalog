/**
 * Gera o HTML para o e-mail de pedido de modelo.
 * Usamos uma template string pura para evitar problemas de compilação com react-dom/server no Next.js.
 */
export function generateEmailHtml({
  name,
  email,
  phone,
  company,
  modelId,
  modelTitle,
  modelLink,
  styleTitle,
  catalogUrl
}: {
  name: string;
  email: string;
  phone: string;
  company?: string;
  modelId: string;
  modelTitle: string;
  modelLink: string;
  styleTitle?: string;
  catalogUrl: string;
}) {
  return `
    <!DOCTYPE html>
    <html lang="pt">
    <head>
      <meta charset="UTF-8">
      <style>
        body {
          background-color: #f6f9fc;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif;
          padding: 40px 20px;
          margin: 0;
        }
        .container {
          background-color: #ffffff;
          margin: 0 auto;
          padding: 32px;
          border-radius: 8px;
          max-width: 600px;
          width: 100%;
          box-sizing: border-box;
        }
        h1 {
          color: #333;
          font-size: 24px;
          font-weight: bold;
          text-align: center;
          margin: 0 0 30px 0;
        }
        p {
          color: #333;
          font-size: 16px;
          line-height: 24px;
          margin: 10px 0;
        }
        .section {
          margin: 24px 0;
          padding: 0;
        }
        .row {
          margin-bottom: 16px;
        }
        .label {
          font-size: 12px;
          font-weight: bold;
          color: #8898aa;
          text-transform: uppercase;
          margin: 0;
          line-height: 1.2;
        }
        .value {
          font-size: 16px;
          color: #333;
          margin: 2px 0 0 0;
          font-weight: 500;
          line-height: 1.4;
        }
        hr {
          border: 0;
          border-top: 1px solid #e6ebf1;
          margin: 24px 0;
        }
        .button {
          border-radius: 8px;
          font-size: 14px;
          font-weight: bold;
          text-decoration: none;
          text-align: center;
          display: inline-block;
          padding: 12px 24px;
          margin-top: 8px;
        }
        .button-primary {
          background-color: #16a9fa;
          color: #ffffff;
        }
        .button-secondary {
          background-color: #f6f9fc;
          color: #16a9fa;
          border: 1px solid #16a9fa;
        }
        .footer {
          color: #8898aa;
          font-size: 12px;
          margin-top: 32px;
          text-align: center;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Novo Pedido de Modelo</h1>
        <p>Olá Daiani,</p>
        <p>Um cliente acabou de escolher um modelo de site pelo catálogo. Seguem os detalhes:</p>

        <div class="section">
          <div class="row">
            <p class="label">Cliente:</p>
            <p class="value">${name}</p>
          </div>
          <div class="row">
            <p class="label">Email:</p>
            <p class="value">${email}</p>
          </div>
          <div class="row">
            <p class="label">Telemóvel / Whatsapp:</p>
            <p class="value">${phone}</p>
          </div>
          ${company ? `
          <div class="row">
            <p class="label">Empresa:</p>
            <p class="value">${company}</p>
          </div>
          ` : ''}

          <hr>

          <div class="row">
            <p class="label">Modelo Escolhido:</p>
            <p class="value">#${modelId} - ${modelTitle}</p>
          </div>

          ${styleTitle ? `
          <div class="row">
            <p class="label">Estilo:</p>
            <p class="value">${styleTitle}</p>
          </div>
          ` : ''}

          <div class="row">
            <p class="label">Amostra do modelo:</p>
            <a href="${modelLink}" class="button button-primary">Ver amostra</a>
          </div>

          <div class="row">
            <p class="label">Página do catálogo:</p>
            <a href="${catalogUrl}" class="button button-secondary">Ver no catálogo</a>
          </div>
        </div>

        <p class="footer">Este e-mail foi gerado automaticamente pelo BoxPage Catalog.</p>
      </div>
    </body>
    </html>
  `;
}
