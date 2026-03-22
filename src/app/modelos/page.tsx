import stylesData from '@/data/styles.json'
import sitesData from '@/data/sites.json'
import ModelCard from '@/components/ModelCard'
import Link from 'next/link'
import { ArrowLeft, Search, Filter, Home } from 'lucide-react'

interface ModelosPageProps {
  searchParams: Promise<{
    style?: string
    search?: string
  }>
}

export default async function ModelosPage({ searchParams }: ModelosPageProps) {
  const params = await searchParams
  const styleIdStr = params.style
  const searchStr = params.search

  let filteredModels = [...sitesData]
  let filterTitle = "Todos os Modelos"
  let filterContext = ""

  if (searchStr) {
    const query = searchStr.toLowerCase()
    filteredModels = sitesData.filter(site =>
      site.title.toLowerCase().includes(query) ||
      site.id.toString().includes(query)
    )
    filterTitle = `Resultados para: "${searchStr}"`
    filterContext = "Pesquisa Global"
  } else if (styleIdStr) {
    const styleId = parseInt(styleIdStr)
    const styleObj = stylesData.find(s => s.id === styleId)

    if (styleObj) {
      filteredModels = sitesData.filter(site => site.style_id === styleId)
      filterTitle = `${styleObj.title}`
      filterContext = styleObj.audience
    }
  }

  return (
    <div className="flex flex-col gap-12 py-12 xl:py-20">
      {/* Header / Nav Section */}
      <section className="boxed-container flex flex-col md:flex-row items-center justify-between gap-6 border-b border-border pb-12">
        <div className="flex flex-col gap-4 max-w-2xl text-center md:text-left">
          <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-medium mb-4 group">
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Voltar aos Estilos
          </Link>

          <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight">
            {filterTitle}
          </h1>

          <div className="flex items-center gap-3 justify-center md:justify-start">
            <span className="text-xs font-bold uppercase tracking-widest text-primary/60">{filterContext || "Galeria de Sites"}</span>
          </div>

        </div>


      </section>

      {/* Grid Section */}
      <section className="boxed-container min-h-[400px]">
        {filteredModels.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
            {filteredModels.map((site: any) => (
              <ModelCard
                key={site.id}
                id={site.id}
                title={site.title}
                legend={site.legend}
                image={site.image}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 gap-6 bg-card/50 rounded-3xl border border-dashed border-border text-center px-6">
            <div className="p-6 rounded-full bg-secondary text-muted-foreground">
              <Search className="h-10 w-10" />
            </div>
            <div className="max-w-md">
              <h2 className="text-xl font-bold mb-2">Ops! Nenhum modelo encontrado</h2>
              <p className="text-muted-foreground text-sm">
                Não conseguimos encontrar modelos para "{searchStr || styleIdStr}". Tente pesquisar por outro nome ou explore outros estilos.
              </p>
            </div>
            <Link href="/" className="px-8 py-3 bg-primary text-primary-foreground font-bold rounded-xl hover:brightness-110 active:scale-95 transition-all">
              Voltar ao Início
            </Link>
          </div>
        )}
      </section>

      {/* Context info for styles */}
      {styleIdStr && !searchStr && (
        <section className="boxed-container py-12 border-t border-border">
          <div className="p-8 rounded-2xl bg-primary/5 border border-primary/10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex flex-col gap-2 flex-grow">
              <h4 className="font-bold text-lg">💡 Sabia que pode mudar de estilo?</h4>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
                Estes modelos representam o estilo selecionado, mas podemos adaptar qualquer interface para as suas necessidades específicas. Sinta-se à vontade para explorar outras vibes.
              </p>
            </div>
            <Link href="/" className="px-6 py-3 border border-primary/20 hover:bg-primary/10 text-primary font-bold rounded-xl transition-all whitespace-nowrap">
              Mudar de Estilo
            </Link>
          </div>
        </section>
      )}
    </div>
  )
}
