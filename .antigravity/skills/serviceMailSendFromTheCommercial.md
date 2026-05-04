# API serviceMailSendFromTheCommercial

## Descrição

Envia um e-mail comercial (remetente: Daiani | BoxPage <atendimento@boxpage.pt>) através do domínio boxpage.pt.

## Variáveis de ambiente

NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEYS
BOXPAGE_TOKEN

## Endpoint

- url: https://qvxjagwnetqbatzbmsao.supabase.co/functions/v1/serviceMailSendFromTheCommercial
- método: POST

## Edge Function

serviceMailSendFromTheCommercial

## Header

- Authorization: {{NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEYS}}
- boxpage-token: {{BOXPAGE_TOKEN}}

## Payload

### Legenda

- `to` (String|Array): E-mail do destinatário (ou lista de e-mails).
- `reply_to` (String): E-mail para onde as respostas devem ser enviadas (opcional).
- `subject` (String): Assunto do e-mail.
- `message` (String): Conteúdo da mensagem (suporta HTML).
- `template` (String): Nome do template a ser utilizado (`boxpage` ou `basic`).

### Campos obrigatórios e outras validações:

- `Authorization`: Token Supabase Anon Key (obrigatório no header).
- `boxpage-token`: Token de acesso interno (obrigatório no header).
- `to`: E-mail do destinatário ou lista de e-mails (obrigatório).
- `subject`: Assunto da mensagem (obrigatório).
- `message`: Conteúdo da mensagem (obrigatório).

```json
{
  "to": "contato@exemplo.com",
  "reply_to": "atendimento@boxpage.pt",
  "subject": "Assunto do e-mail comercial",
  "message": "Olá, esta é uma mensagem do setor comercial.",
  "template": "boxpage"
}
```

## Response

### Exemplo de resposta

```json
{
  "success": true,
  "code": 100,
  "message": "Mensagem enviada com sucesso",
  "data": {
    "to": "contato@exemplo.com",
    "subject": "Assunto do e-mail comercial",
    "template": "boxpage"
  }
}
```
