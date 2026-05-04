'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, Copy, ExternalLink, Sparkles, Type } from 'lucide-react'
import OrderModal from '@/components/OrderModal'
import Toast from '@/components/Toast'

interface ModelDetailSectionProps {
  model: any
  style: any
}

export default function ModelDetailSection({ model, style }: ModelDetailSectionProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isToastVisible, setIsToastVisible] = useState(false)

  const handleCopyCode = () => {
    navigator.clipboard.writeText(`${model.id}`)
    setIsToastVisible(true)
  }

  return (
    <>
      <section className="boxed-container max-w-4xl mx-auto flex flex-col gap-12 py-5 md:py-10">
        {/* Header: Title and Style */}
        <div className="flex flex-col items-center text-center gap-3">
          <div className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-[0.2em]">
            {style?.title}
          </div>
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-black tracking-tight leading-[1.1]">
            {model.title}
          </h1>
        </div>

        {/* Screenshot */}
        <div className="flex flex-col gap-6">
          <div className="relative aspect-[1.91/1] overflow-hidden rounded-3xl border-4 border-primary bg-muted shadow-2xl shadow-primary/20">
            <Image
              src={model.image}
              alt={model.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1200px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Info Content */}
        <div className="flex flex-col items-center text-center gap-8 py-4">
          <p className="text-muted-foreground text-lg leading-relaxed whitespace-pre-line">
            {model.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 w-full">
            <div className="p-6 rounded-2xl bg-[#1c1c1c] border border-white/10 hover:border-primary/40 transition-all flex flex-col gap-4 shadow-lg shadow-black/20">
              <div className="flex items-center gap-2 text-primary font-bold">
                <Type className="h-5 w-5" />
                <span className="text-xs uppercase tracking-widest">Tipografia</span>
              </div>
              <p className="text-sm font-medium leading-relaxed opacity-90">
                {model.typography}
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#1c1c1c] border border-white/10 hover:border-primary/40 transition-all flex flex-col gap-4 shadow-lg shadow-black/20">
              <div className="flex items-center gap-2 text-primary font-bold">
                <Sparkles className="h-5 w-5" />
                <span className="text-xs uppercase tracking-widest">A "Vibe"</span>
              </div>
              <p className="text-sm font-medium leading-relaxed opacity-90">
                {model.vibe}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-6 pt-4">
            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center gap-2 text-sm font-bold opacity-80 decoration-primary underline-offset-8">
                <div className="w-8 h-[2px] bg-primary" /> Funcionalidades Incluídas
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-left">
                {['Design Responsivo', 'SEO Otimizado', 'Formulário de contacto', 'Site Seguro SSL', 'Alojamento de alta performance', 'Suporte contínuo'].map((feat) => (
                  <li key={feat} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full pt-8">
              <Link
                href={model.link}
                target="_blank"
                rel="noopener"
                className="flex-1 w-full sm:w-auto flex items-center justify-center gap-2 px-10 py-5 bg-white text-black hover:bg-white/90 border border-transparent rounded-2xl font-black text-sm md:text-base transition-all group shadow-xl hover:scale-[1.02] active:scale-95 uppercase tracking-wider whitespace-nowrap"
              >
                <ExternalLink className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                Ver Ao Vivo
              </Link>

              <button
                onClick={() => setIsModalOpen(true)}
                className="flex-1 w-full sm:w-auto px-10 py-5 bg-primary text-primary-foreground font-black text-sm md:text-base rounded-2xl shadow-2xl shadow-primary/20 hover:brightness-110 hover:scale-[1.02] active:scale-95 transition-all uppercase tracking-wider whitespace-nowrap"
              >
                Escolher esse modelo
              </button>
            </div>
            <p className="text-center pt-4 text-[10px] text-muted-foreground uppercase font-bold tracking-widest opacity-50">
              * Em breve entraremos em contacto para dar sequência ao seu pedido.
            </p>
          </div>
        </div>
      </section>

      {/* Order Modal Component */}
      <OrderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        model={model}
        style={style}
      />

      {/* Reusable Toast */}
      <Toast
        isVisible={isToastVisible}
        message={`Código copiado com sucesso`}
        onClose={() => setIsToastVisible(false)}
      />
    </>
  )
}
