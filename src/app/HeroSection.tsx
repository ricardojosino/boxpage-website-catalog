export default function HeroSection() {
  return (
    <section className="boxed-container py-5 md:py-10">
      <div className="max-w-3xl flex flex-col gap-6">
        <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight">
          Descubra a <span className="text-primary tracking-tighter italic">vibe</span> perfeita para o seu projeto digital.
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
          Escolher um estilo serve apenas como referência inicial para entendermos o seu gosto. 
          Utilizaremos as características visuais do estilo escolhido para apresentar os modelos ideais.
        </p>
      </div>
    </section>
  )
}
