# API serviceNotionCrmLeadInsert

## Descrição

API responsável por inserir um lead no CRM do Notion e, simultaneamente, cadastrá-lo na newsletter do BoxPage.

## Variáveis de ambiente

NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEYS
BOXPAGE_TOKEN

## Endpoint

- url: https://qvxjagwnetqbatzbmsao.supabase.co/functions/v1/serviceNotionCrmLeadInsert
- método: POST

## Edge Function

serviceNotionCrmLeadInsert

## Header

- Authorization: {{NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEYS}}
- boxpage-token: {{BOXPAGE_TOKEN}}

## Payload

### Legenda

- `name` (String): Nome do lead (obrigatório).
- `email` (String): E-mail de contato.
- `mobile` (String): Celular de contato.
- `phone` (String): Telefone fixo de contato.
- `site` (String): Website relacionado.
- `description` (String): Notas ou descrição do interesse.
- `stage` (String): Estágio no CRM (ex: "Lead").
- `reference` (String): Referência de origem (obrigatório). Exemplos: `boxpage-site`, `boxpage-app`, `lp-vendas`.
- `origin` (String): URL da página de origem.
- `notes` (String | Object | Array): Conteúdo a ser inserido no corpo da página do Notion. Aceita texto simples ou uma estrutura de blocos nativa do Notion.

### Campos obrigatórios e outras validações

- `Authorization`: Token Supabase Anon Key (obrigatório no header).
- `boxpage-token`: Token de acesso interno (obrigatório no header).
- `name`: Nome do lead (obrigatório).
- `reference`: Referência de origem (obrigatório).
- `email`, `mobile` ou `phone`: É necessário fornecer pelo menos um e-mail ou telefone para processar o lead.

```json
{
  "name": "João Silva",
  "email": "joao@exemplo.com",
  "mobile": "351912345678",
  "site": "exemplo.com",
  "description": "Interessado em consultoria",
  "stage": "Lead",
  "reference": "boxpage-site",
  "origin": "https://boxpage.pt",
  "notes": "Informações adicionais enviadas pelo lead."
}
```

### Sobre o campo `notes`

O campo `notes` é versátil e permite diferentes formatos de entrada:

1. **Texto Simples**: Ao enviar uma string, o sistema cria automaticamente um cabeçalho `h2` ("Notas") seguido por um parágrafo.
2. **Array de Blocos**: Você pode enviar um array de objetos seguindo o [padrão de blocos do Notion](https://developers.notion.com/reference/block).
3. **Objeto com `children`**: Também é suportado o formato `{ "children": [ ... ] }`, onde o conteúdo de `children` deve ser um array de blocos válidos.

## Response

### Exemplo de resposta (Sucesso)

```json
{
  "success": true,
  "code": 100,
  "message": "Lead processado com sucesso",
  "data": {
    "name": "João Silva",
    "email": "joao@exemplo.com",
    "mobile": "351912345678",
    "phone": "",
    "site": "exemplo.com",
    "description": "Interessado em consultoria",
    "stage": "Lead",
    "reference": "boxpage-site",
    "origin": "https://boxpage.pt",
    "notes": "Informações adicionais enviadas pelo lead."
  }
}
```
