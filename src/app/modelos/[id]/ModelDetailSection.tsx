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
      <section className="boxed-container grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20">
        {/* Left Col: Screenshot */}
        <div className="flex flex-col gap-6">
          <div className="group relative aspect-[1.91/1] overflow-hidden rounded-3xl border border-border bg-muted shadow-2xl shadow-primary/5">
            <Image
              src={model.image}
              alt={model.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
              sizes="(max-width: 1200px) 100vw, 50vw"
            />
          </div>

          <Link
            href={model.link}
            target="_blank"
            className="w-full flex items-center justify-center gap-2 py-4 bg-white text-black hover:bg-white/90 border border-transparent rounded-2xl font-black transition-all group shadow-xl"
          >
            <ExternalLink className="h-5 w-5 group-hover:rotate-12 transition-transform" />
            Ver Modelo em Tempo Real
          </Link>

          <div className="flex items-center justify-between p-6 rounded-2xl bg-secondary/30 border border-border/50 group/item">
            <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Código do Modelo</span>
              <span className="text-xl font-mono font-bold text-primary">#{model.id}</span>
            </div>
            <button
              onClick={handleCopyCode}
              title="Copiar código"
              className="p-3 hover:bg-secondary rounded-xl transition-all text-muted-foreground hover:text-primary active:scale-90"
            >
              <Copy className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Right Col: Info */}
        <div className="flex flex-col gap-8 py-4">
          <div className="flex flex-col gap-3">
            <div className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-[0.2em]">
              {style?.title}
            </div>
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-black tracking-tight leading-[1.1]">
              {model.title}
            </h1>
          </div>

          <p className="text-muted-foreground text-lg leading-relaxed whitespace-pre-line">
            {model.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
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

          <div className="flex flex-col gap-6 pt-4">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-sm font-bold opacity-80 decoration-primary underline-offset-8">
                <div className="w-8 h-[2px] bg-primary" /> Funcionalidades Incluídas
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {['Design Responsivo', 'SEO Otimizado', 'Formulário de contato', 'Site Seguro SSL', 'Sem custo de alojamento', 'Suporte contínuo'].map((feat) => (
                  <li key={feat} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full px-12 py-5 bg-primary text-primary-foreground font-black text-md md:text-lg rounded-2xl shadow-2xl shadow-primary/20 hover:brightness-110 hover:scale-[1.02] active:scale-95 transition-all uppercase tracking-wider"
              >
                Escolher esse modelo
              </button>
              <p className="text-center sm:text-left pt-4 text-[10px] text-muted-foreground uppercase font-bold tracking-widest opacity-50">
                * Em breve entraremos em contacto para dar sequência ao seu pedido.
              </p>
            </div>
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
