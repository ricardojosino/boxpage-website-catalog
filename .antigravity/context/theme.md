# Informações do Tema


## Diretrizes de Design e Estilo (Design System):
Configure as variáveis do Tailwind CSS e shadcn/ui utilizando a seguinte paleta de cores estrita:

## Visual
O Visual do catálogo precisa ser dark moderno. Mais parecido com um catálogo premium do que um site. A paleta de cores dark precisa combinar com a cor primária '#16A9FA'

## Cor Primária
'#16A9FA'

## Preset Chadcn
New York

## Header
O header deve ter a logo do boxpage e um campo de pesquisa por código e nome do modelo.

## Footer
O footer deve conter os links:

* Site: https://boxpage.pt
* Contato: https://boxpage.pt/contato
* Privacidade: https://boxpage.pt/privacidade



## Diretrizes de Responsividade, Componentização e Layout

### Breakpoints Customizados (Configurar no tailwind.config.ts):
A aplicação deve ser totalmente fluida, respeitando rigorosamente os seguintes pontos de quebra (breakpoints) e comportamentos:

- Mobile: de 0 a 767px (Padrão inicial, sem prefixo)
- md: 768px (Tablet Pequeno - 768px a 1023px)
- lg: 1024px (Tablet Grande - 1024px a 1199px)
- xl: 1200px (Notebooks - 1200px a 1439px)
- 2xl: 1440px (PC/Monitores Maiores - 1440px em diante)

### Tipografia Adaptativa:
O tamanho das fontes não deve truncar. Utilize as classes responsivas do Tailwind para escalar o texto conforme a tela cresce.

### Regra geral para corpo de texto: 
Iniciar com text-[14px] no mobile e escalar para xl:text-[16px] (a partir de 1200px / Notebooks).

### Títulos:
Devem escalar proporcionalmente, garantindo legibilidade sem quebrar o layout em telas menores.

### Estratégia de Navegação (Header):
Devido ao grande volume de informações, a navegação deve ser dividida em dois componentes físicos distintos para garantir a melhor UX:

### HeaderMobile:
Deve ser um componente. Renderizado exclusivamente em telas menores que 1200px (Mobile até Tablet Grande). Deve conter apenas o logotipo e o botão para abrir o menu (Hamburguer). Pode haver exceções quando necessário.  Ao clicar, deve abrir um painel lateral (Sheet do shadcn/ui) limpo e otimizado para o toque dos dedos.

### HeaderDesktop:
Deve ser um componente. Renderizado exclusivamente a partir de 1200px (xl - Notebooks em diante). Deve conter todos os elementos do Header.

### Sistema de Containers e Espaçamento (Layout):
Todas as seções da página devem ter seu conteúdo envolvido por um container estrutural para garantir o alinhamento perfeito.

### Regra Geral de Padding Lateral:
Todo container deve ter um padding esquerdo e direito de 16px em telas até 1199px para evitar que o conteúdo encoste nas bordas. A partir de 1200px (xl), esse padding lateral deve ser removido (px-4 xl:px-0).

### Modo Boxed (Padrão):
O conteúdo deve ter largura máxima fixa de 1160px e ser centralizado. Classes base: w-full px-4 xl:px-0 max-w-[1160px] mx-auto. Crie uma classe para padronizar o modo boxed e para ser fácil alterar quando necessário.

### Modo Full:
O conteúdo ocupa 100% da tela, mas continua respeitando a regra do padding lateral até 1199px. Classes base: w-full px-4 xl:px-0. Crie uma classe para padronizar o modo full também.

