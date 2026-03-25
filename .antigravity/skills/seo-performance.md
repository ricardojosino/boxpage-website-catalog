# Skill: SEO & Open Graph Master

Sempre que criar uma página ou componente de rota:

1. **Metadata API:** Toda página em `src/app/*/page.tsx` deve exportar um objeto `metadata`.
2. **Open Graph (OG):** Configure obrigatoriamente o objeto `openGraph` dentro dos metadados:
   - `title`: Título otimizado para partilha.
   - `description`: Descrição curta e apelativa.
   - `url`: A URL canónica da página.
   - `siteName`: O nome da marca/projeto.
   - `images`: Array com pelo menos uma imagem (1200x630px). Use `/images/screenshot.jpg` como fallback se não houver uma específica.
   - `locale`: `pt_BR` ou `pt_PT`.
   - `type`: `website`.

3. **Twitter Cards:** Adicione o objeto `twitter` com `card: 'summary_large_image'`.

4. **Imagens & Performance:**
   - Use `next/image` com `priority` para o LCP (Largest Contentful Paint).
   - Use `alt` texts descritivos em tudo.

5. **JSON-LD (Opcional Pro):** Se for uma página de produto ou artigo, sugira a criação de um script de dados estruturados.