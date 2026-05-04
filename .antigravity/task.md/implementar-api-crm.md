# Implementar API CRM no formulário de pedido "Solicitar Modelo"

## Descrição

Crie uma action para enviar os dados do formulário "Solicitar Modelo" para o nosso CRM. Implemente a API serviceNotionCrmLeadInsert conforme a skill `.antigravity/skills/serviceNotionCrmLeadInsert.md` e em seguida envie um e-mail para o cliente utilizando a API serviceMailSendFromTheCommercial `.antigravity/skills/serviceMailSendFromTheCommercial.md`. Implemente utilizando fetch.

## serviceNotionCrmLeadInsert

Salva o Lead no CRM.

Use:

mobile: para o telefone do formulário;
description: Um cliente escolheu um modelo no catálogo;
stage: Lead;
reference: catalogo-de-modelos;
origin: URL da página atual;
notes: Insira os dados do modelo escolhido.

O resto, mapeia conforme o contexto.

## serviceMailSendFromTheCommercial

Envia um e-mail para o cliente informando o modelo que ele escolheu.

Use:

to: E-mail do formulário;

subject: Recebemos sua escolha!

template: boxpage

message:

```
Olá, [Nome do Cliente],

Espero que esteja bem.

Confirmo que recebemos a sua escolha do modelo de site através do nosso catálogo. É um ótimo ponto de partida para o nosso projeto!

**[Modelo escolhido]**

Próximos Passos:

Para darmos sequência, o próximo passo fundamental é a preparação do conteúdo que será inserido no site (textos, fotos, logotipos e informações de contato). Ter esse material organizado é o que garantirá a agilidade na montagem da estrutura.

Em breve, entrarei em contato com você para alinharmos os detalhes dessa entrega e darmos continuidade ao desenvolvimento.

Se tiver qualquer dúvida por enquanto, sigo à disposição.

Fico a disposição,
Daiani Josino | BoxPage


```
