# Informações sobre as páginas do site

## Descrição
O site deve ser uma single Page (Site de uma página única)

## Componentes

### Componente de aviso de Cookie e privacidade
Crie um componente com o nome RGPD. Esse componente deve ficar no template do site. Precisar ter um layout discreto e moderno. Precisa ter o aviso de padrão de cookie no padrão para portugal. Link para a página de Privacidade "/privacidade" e o botão com o nome "Entendi". Quando clicar no botão entendi, o aviso deve ser oculto e salvo em localStorage para não exibir de novo.

### Componente Feedback
Crie um componente chamado feedback. Esse componente é um modal centralizado pequeno. Uns 300px de largura e uns 200px de altura. A altura deve poder crescer quando necessário. O modal deve abrir em um lightbox escuro com transparencia de 20%. Esse componente deve exibir todo o tipo de aviso ao cliente. Exemplo: "O campo nome é obrigatório", "Sua mensagem foi enviada com sucesso" etc. O componente precisa ter um botão de fechar tradicional com um ícone no canto superior direito. Mas também deve ter um botão no rodapé com o título "Entendi" Ao clicar no botão fechar e no botão "Entendi" o modal deve ser fechado. Clicando fora do modal também pode ser fechado.

## Catálogo de modelos

### Descrição
O site será um catálogo para o usuário escolher modelos de sites. O site terá 3 páginas. A página inicial onde o usuário vai escolher o estilo, a página que vai listar os modelos do estilo, e um modal para preencher com os dados do cliente e o modelo escolhido.

### Idioma
Português de Portugal


### Fluxo do usuário
O Objetivo é o cliente escolher um modelo e esse modelo ser enviado para nossa equipe através de um formulário.

* Cliente escolher um estilo;
* Cliente visualiza todos os modelos do estilo escolhido e clica e um modelo;
* Exibe a página do modelo com as informações;
* Cliente clica no botão de escolher e abre um modal com um formulário;
* Cliente preenche e os dados são enviados para a equipe;

### Página inicial - Estilos
Deve conter uma pequena orientação que o cliente precisa escolher um estilo para exibir os modelos. Essa escolha serve apenas como referência de gosto. Vamos usar as características do modelo escolhido para desenvolver o site do cliente. Os cards dos estilos precisam ser bonitos, alinhados e com bom espaçamentos entre os elementos. Preciso ter uma screeshot na proporção 1.91:1, Título, uma legenda média e o público.Podemos usar um grid de 2 colunas para ter bastante espaço para a legenda. Adicione efeito de mouse hover.

Os estilos deve ser carregados de 'src/data/styles.json'. 


### Página da lista de modelos
A página deve conter o estilo escolhido e uma lista de cards. Cada card deve ter um sceenshot na proporção 1.91.1, Título e uma legenda. Pode ser usado um grid com 3 cards. Adicione efeito de mouse hover. Essa página terá um filtro aplicado através da escolha do estilo da página anterior. Esse filtro deve estar na url. Exemplo: style=123456. 

No template do catálogo, na parte do header, vai ter um campo de pesquisa, que será possível pesquisar o modelo por nome ou código. Quando pesquisar, deve abrir essa página com o resultado. Deve limpar o campo style e aplicar o filtro por search. search=xxxx. O sistema deve aplicar o filtro search nos campos de título ou código do modelo. Quando search tiver conteúdo, style deve ser limpo para que a pesquisa seja feito em todos os estilo. Deve ter um feedback na tela se está sendo aplicado o filtro por estilo ou por pesquisa.

Os modelos deve ser carregados de 'src/data/sites.json'. 

### Página do modelo
A página vai exibir todas as informações do modelo.

**Screenshot:** Imagem do modelo na proporção 1.91.1;
**Código:** Deve conter o código do modelo;
**Título:** Nome do modelo;
**Tipografia:** Exibe o tipo de tipografia que vai ser usado. Exemplo: Sans-serif moderna e geométrica, transmitindo clareza, organização e cooperação;
**Vibe:** Mostra a vibe do modelo. Exemplo: Colaborativa, profissional, organizada, técnica e de confiança;
**Descrição:** Descrição completa do modelo;
**CTA:** Exibe um botão com o título "Escolher esse"

Os dados deve ser carregados de 'src/data/sites.json'. e filtrados conforme o contexto.

### Modal Formulário de pedido
Exibe um modal centralizado em um fundo escuro em lightbox com 20% de transparência. Ao clicar no CTA, deve passar as informações do modelo via Json para o Modal. Quando o cliente preencher o formulário, os dados do modelo deve ir junto. 

Segue abaixo os campos do formulário:

* Nome completo (Obrigatório);
* E-mail (Obrigatório);
* Telemóvel / Whatsapp (Obrigatório)
* Nome da empresa;
* style: Campo oculto que deve ir os dados do estilo em formato Json;
* site: Campo Oculto que deve ir os dados do modelo em formato Json;

Quando clicar no botão Enviar, fecha o modal atual e abre outro modal de Obrigado com orientações;

### Modal de obrigado
Exibe após o envio do Formulário de pedido. Esse modal deve ter uma foto de perfil redonda no cabeçalho do modal centralizado. Abaixo, um texto informando que o pedido foi enviado com sucesso e que em breve eu vou entrar em contato para dar sequencia. Assine como Daiani Josino, atendimento@boxpage.pt


### Página de Privacidade
Criar uma página de privacidade com as informações básicas para um site



