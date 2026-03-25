'use client'

import Link from 'next/link'
import { Palette, LayoutGrid } from 'lucide-react'

interface ExploreMoreSectionProps {
  styleId?: string | null
}

export default function ExploreMoreSection({ styleId }: ExploreMoreSectionProps) {
  const modelsPath = styleId ? `/modelos?style=${styleId}` : '/modelos'

  return (
    <section className="boxed-container py-16 xl:py-24 border-t border-white/5">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 bg-zinc-900/40 p-8 md:p-12 rounded-4xl border border-white/5 backdrop-blur-sm">
        <div className="flex flex-col gap-4 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Não é exatamente o que <span className="text-primary italic">imagina</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg">
            Você pode explorar outros modelos dentro deste estilo ou voltar para escolher uma estética completamente diferente.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto shrink-0">
          <Link
            href={modelsPath}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary text-primary-foreground px-10 py-4 rounded-xl font-bold transition-all hover:brightness-110 hover:scale-[1.02] active:scale-95 shadow-xl shadow-primary/20 whitespace-nowrap"
          >
            <LayoutGrid className="w-5 h-5" />
            Ver Mais Modelos
          </Link>

          <Link
            href="/"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white px-10 py-4 rounded-xl font-bold transition-all hover:bg-white/10 active:scale-95 whitespace-nowrap"
          >
            <Palette className="w-5 h-5" />
            Trocar de Estilo
          </Link>
        </div>
      </div>
    </section>
  )
}
