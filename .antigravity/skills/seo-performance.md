# Skill: SEO e core web vitals (The 4 Pillars)

Sempre que criares ou revisares uma página ou componente, deves garantir nota máxima (100/100) seguindo rigorosamente estes quatro pilares:

## 1. DESEMPENHO (Core Web Vitals)

- **LCP (Largest Contentful Paint):** Use obrigatoriamente `next/image` com a propriedade `priority={true}` para a imagem principal da seção Hero (acima da dobra).
- **CLS (Cumulative Layout Shift):** - Defina sempre `width` e `height` explícitos em todas as imagens.
  - Utilize `next/font` para evitar saltos visuais durante o carregamento de fontes.
  - Skeletons e Loading States devem ter as mesmas dimensões do conteúdo final.
- **INP (Interaction to Next Paint):** Minimize o uso de lógica pesada no Client-Side. Prefira animações CSS ou Framer Motion otimizadas para manter a thread principal livre.

## 2. ACESSIBILIDADE (A11y)

- **Semântica HTML5:** Utilize as tags corretas para a estrutura (`main`, `header`, `footer`, `nav`, `section`, `article`).
- **Hierarquia de Títulos:** Siga uma ordem lógica (H1 -> H2 -> H3). Nunca pule níveis para fins estéticos; use classes Tailwind para ajustar o tamanho visual.
- **Interatividade:** - Botões que contêm apenas ícones devem ter um `aria-label` descritivo.
  - Garanta que todos os elementos interativos sejam acessíveis via teclado (focus states).
- **Imagens:** O atributo `alt` é obrigatório. Se a imagem for meramente decorativa, use `alt=""`.

## 3. BOAS PRÁTICAS

- **Otimização de Assets:** Utilize formatos modernos (WebP/AVIF) gerados automaticamente pelo Next.js Image.
- **Segurança:** Links externos (`target="_blank"`) devem conter sempre `rel="noopener"`. Omitir o `noreferrer` garante que Analytics de destino consigam rastrear a origem do seu blog como referência de tráfego.
- **Consistência de Design:** Utilize estritamente os Design Tokens definidos no `theme.md`. Proibido o uso de valores arbitrários (ex: `mt-[23px]`) a menos que seja um caso extremo.
- **Clean Code:** Use sempre Path Aliases (`@/components/...`) e mantenha os componentes pequenos e focados (Single Responsibility).

## 4. SEO & OPEN GRAPH

- **Metadata API:** Exportar o objeto `metadata` em cada `page.tsx`. O `title` e a `description` devem ser únicos e baseados no conteúdo da página.
- **Canonical URLs & metadataBase Dinâmica:** Para garantir que as imagens OG e links canônicos funcionem corretamente sem bloqueios de acesso (login):
  - **Evite** o uso direto de `process.env.VERCEL_URL` para metadados, pois as URLs de preview da Vercel são protegidas por autenticação, o que impede scrapers (Facebook, WhatsApp, etc.) de lerem as imagens e descrições.
  - Utilize variáveis de ambiente dedicadas: `const baseUrl = process.env.NODE_ENV === 'development' ? process.env.NEXT_PUBLIC_SITE_URL_DEV! : process.env.NEXT_PUBLIC_SITE_URL_PROD!;`
  - Atribua ao `metadataBase: new URL(baseUrl)`.
- **Desativação de Indexação (Sites de Modelo):** Caso o site seja apenas um modelo de catálogo e não deva aparecer em buscas reais:
  - Configure `robots: { index: false, follow: false }` no layout global.
- **Social (OG & Twitter):**
  - **Open Graph:** Configure `title`, `description`, `url`, `siteName`, `type: 'website'` e `locale: 'pt_BR'`.
  - **Imagens de Partilha:** Use preferencialmente a imagem que está em (`/images/screenshot.jpg`) com 1200x630px para gerar o "card".
  - **Twitter:** Use `card: 'summary_large_image'`.

  ## 5. ESTRATÉGIA DE CONTEÚDO (ARTIGOS SEO)

  Ao redigir um artigo ou página, siga estas diretrizes de otimização editorial:

- **Arquitetura de Palavras-Chave:** A palavra-chave foco deve aparecer no H1, no primeiro parágrafo e em pelo menos um subtítulo (H2).
- **Escaneabilidade e Leitura:** - Utilize parágrafos curtos (máximo 3-4 linhas).
  - Use **Bullet Points** e **Listas Numeradas** com moderação, apenas quando for necessário listar itens.
  - Utilize **Negrito** em termos centrais para facilitar a leitura dinâmica (skimming).
- **Link Building Interno:** Inclua links para outras páginas relevantes do próprio site para fortalecer a autoridade temática (Topic Cluster).
- **Autoridade Externa:** Cite e linke para fontes de alta autoridade e confiança no nicho correspondente (E-E-A-T).
- **Rich Snippets (JSON-LD):** Sempre que possível, sugira a inclusão de esquemas de dados estruturados (`FAQPage` e `Article`) para destacar o site nos resultados de pesquisa.
- **CTA (Call to Action):** Todo o conteúdo deve terminar com uma chamada à ação clara e alinhada com o objetivo da página.

- Escreva de forma simples, direta e objetiva, como se estivesse a conversar com um amigo. **Não use** travessão e nunca escreva de forma formal e erudita como se fosse um jornalista ou escritor.
