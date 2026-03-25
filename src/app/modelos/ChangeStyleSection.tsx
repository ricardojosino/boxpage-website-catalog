'use client'

import Link from 'next/link'
import { Palette } from 'lucide-react'

export default function ChangeStyleSection() {
  return (
    <section className="boxed-container py-16 xl:py-24 border-t border-white/5">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 bg-zinc-900/40 p-8 md:p-12 rounded-4xl border border-white/5 backdrop-blur-sm">
        <div className="flex flex-col gap-4 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Procurando uma <span className="text-primary italic">estética</span> diferente?
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg">
            Se os modelos acima não combinam com seu gosto, você pode voltar e explorar outros estilos visuais.
          </p>
        </div>

        <div className="shrink-0 w-full md:w-auto">
          <Link 
            href="/"
            className="w-full md:w-auto flex items-center justify-center gap-2 bg-primary text-primary-foreground px-12 py-4 rounded-xl font-bold transition-all hover:brightness-110 hover:scale-[1.02] active:scale-95 shadow-xl shadow-primary/20 whitespace-nowrap"
          >
            <Palette className="w-5 h-5" />
            Trocar de Estilo
          </Link>
        </div>
      </div>
    </section>
  )
}
