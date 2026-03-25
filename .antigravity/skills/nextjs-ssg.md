# Skill: Static Strategy (SSG)
- **Objetivo:** Performance extrema e custo zero de servidor.
- **Regra:** Não use funções dinâmicas (cookies/headers).
- **Dados:** Devem ser injetados no momento do build.
- **Output:** Garanta que o componente seja puramente estático.

## Estratégia: SSG (Static Site Generation)
Velocidade Instantânea. A página é gerada uma única vez no momento do deploy. É a escolha definitiva para Landing Pages que buscam o 100/100 no Google PageSpeed.

## ESTRATÉGIA: SSG (ESTÁTICO PURO)
Objetivo: Performance máxima e SEO imbatível.

**Comportamento:** Use Server Components para buscar dados durante o build.
**Implementação:** Não utilize funções dinâmicas (como cookies() ou headers()) nem revalidate. A página deve ser tratada como um arquivo HTML estático imutável até o próximo deploy.
**Uso Ideal:** Landing Pages, Páginas de "Quem Somos", Documentação.

## Imagens: 
Use o componente next/image com priority={true} para o LCP (Largest Contentful Paint) em todas as seções acima da dobra (Hero).