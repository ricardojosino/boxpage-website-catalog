import stylesData from '@/data/styles.json'
import StyleCard from '@/components/StyleCard'

export default function HomePage() {
  return (
    <div className="flex flex-col gap-16 py-16 xl:py-24">
      {/* Hero Section / Orientation */}
      <section className="boxed-container">
        <div className="max-w-3xl flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
            Passo 1: Escolha o seu Estilo
          </div>
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight">
            Descubra a <span className="text-primary tracking-tighter italic">vibe</span> perfeita para o seu projeto digital.
          </h1>
          <p className="text-muted-foreground text-lg xl:text-xl leading-relaxed">
            Escolher um estilo serve apenas como referência inicial para entendermos o seu gosto. 
            Utilizaremos as características visuais do modelo escolhido para construir o seu site de forma personalizada.
          </p>
        </div>
      </section>

      {/* Styles Grid */}
      <section className="boxed-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-12">
          {stylesData.map((style: any) => (
            <StyleCard 
              key={style.id}
              id={style.id}
              title={style.title}
              legend={style.legend}
              audience={style.audience}
              image={style.image}
            />
          ))}
        </div>
      </section>
      
      {/* Bottom Text / Trust Indicator */}
      <section className="boxed-container text-center py-8">
        <p className="text-sm text-muted-foreground uppercase tracking-[0.2em] font-medium opacity-50">
          Curadoria Exclusiva BoxPage Studio
        </p>
      </section>
    </div>
  )
}
