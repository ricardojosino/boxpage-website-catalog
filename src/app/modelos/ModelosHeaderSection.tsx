export default function ModelosHeaderSection({ 
  filterTitle, 
  filterContext 
}: { 
  filterTitle: string, 
  filterContext: string 
}) {
  return (
    <section className="boxed-container flex flex-col md:flex-row items-center justify-between gap-6 border-b border-border pb-12">
      <div className="flex flex-col gap-4 max-w-2xl text-center md:text-left">
        <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight">
          {filterTitle}
        </h1>

        <div className="flex items-center gap-3 justify-center md:justify-start">
          <span className="text-xs font-bold uppercase tracking-widest text-primary/60">
            {filterContext || "Galeria de Sites"}
          </span>
        </div>
      </div>
    </section>
  )
}
