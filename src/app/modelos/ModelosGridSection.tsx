import ModelCard from '@/components/ModelCard'
import { Search } from 'lucide-react'
import { Suspense } from 'react'

export default function ModelosGridSection({ filteredModels }: { filteredModels: any[] }) {
  return (
    <section className="boxed-container min-h-[400px]">
      {filteredModels.length > 0 ? (
        <Suspense fallback={<div>Carregando modelos...</div>}>
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
        </Suspense>
      ) : (
        <div className="flex flex-col items-center justify-center py-24 gap-6 bg-card/50 rounded-3xl border border-dashed border-border text-center px-6">
          <div className="p-6 rounded-full bg-secondary text-muted-foreground">
            <Search className="h-10 w-10 opacity-20" />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold">Nenhum modelo encontrado</h3>
            <p className="text-muted-foreground whitespace-pre-line">
              Tente pesquisar por outros termos ou explore outros estilos.
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
