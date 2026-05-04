# API Notion

## Descrição

Essa api salva os leads e pedidos no Notion

## Variáveis de ambiente

## Notion

NOTION_API_KEY=
NOTION_DATABASE_LEAD_ID=34a11b3b3cee808ab250fe395d405157
NOTION_DATABASE_ORDER_ID=34a11b3b3cee8062be13f26c05575ee6

## Tabela Leads

### Campos da tabela

- Data (Notion salva automaticamente)
- Cliente (Salva o nome)
- E-mail (Salva o E-mail)
- Telefone (Salva o Telefone)
- Origem (URL da página que o cliente está usando para enviar )
- Mensagem (Mensagem do cliente ou criada de forma automática informando uma escolha do cliente)

### Dados de aceso a api

Use o client `@notionhq/client` ou Fetch direto
Use a variável de ambiente `NOTION_API_KEY` para acessar o token
Use a variável de ambiente `NOTION_DATABASE_LEAD_ID` para acessar o ID do database do notion

## Tabela Pedidos

### Campos da tabela\gm

- Data (Notion salva automaticamente)
- Cliente (Salva o nome)
- E-mail (Salva o E-mail)
- Telefone (Salva o Telefone)
- Origem (URL da página que o cliente está usando para enviar )
- Mensagem (Mensagem criada de forma automática informando uma escolha do cliente)

### Dados de aceso a api

Use o client `@notionhq/client` ou Fetch direto
Use a variável de ambiente `NOTION_API_KEY` para acessar o token
Use a variável de ambiente `NOTION_DATABASE_ORDER_ID` para acessar o ID do database do notion
