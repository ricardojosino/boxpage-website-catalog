'use client'

import stylesData from '@/data/styles.json'
import sitesData from '@/data/sites.json'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2, Copy, ExternalLink, Sparkles, Type } from 'lucide-react'
import { notFound, useParams } from 'next/navigation'
import OrderModal from '@/components/OrderModal'
import { useState } from 'react'

export default function ModelDetailPage() {
  const params = useParams()
  const id = params.id as string
  const modelId = parseInt(id)
  const model = sitesData.find(s => s.id === modelId)

  const [isModalOpen, setIsModalOpen] = useState(false)

  if (!model) {
    notFound()
  }

  const style = stylesData.find(s => s.id === model.style_id)

  return (
    <div className="flex flex-col gap-12 py-12 xl:py-24">
      {/* Top Navigation */}
      <section className="boxed-container">
        <Link
          href={`/modelos?style=${model.style_id}`}
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-medium mb-8 group"
        >
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          Voltar para {style?.title || 'os modelos'}
        </Link>
      </section>

      {/* Main Content Detail */}
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
            <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-md border border-border px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-primary shadow-lg flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Visualização Ativa
            </div>
            <Link
              href={model.link}
              target="_blank"
              className="absolute bottom-6 right-6 p-4 bg-primary text-primary-foreground rounded-full shadow-xl hover:scale-110 active:scale-95 transition-all group-hover:rotate-6 md:hidden"
            >
              <ExternalLink className="h-6 w-6" />
            </Link>
          </div>

          <Link
            href={model.link}
            target="_blank"
            className="w-full flex items-center justify-center gap-2 py-4 bg-secondary/50 hover:bg-primary hover:text-primary-foreground border border-border rounded-2xl font-bold transition-all group"
          >
            <ExternalLink className="h-5 w-5 group-hover:rotate-12 transition-transform" />
            Ver Modelo em Tempo Real
          </Link>

          <div className="flex items-center justify-between p-6 rounded-2xl bg-secondary/30 border border-border/50">
            <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Código do Modelo</span>
              <span className="text-xl font-mono font-bold text-primary">#{model.id}</span>
            </div>
            <button title="Copiar código" className="p-3 hover:bg-secondary rounded-xl transition-colors text-muted-foreground">
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
            <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all flex flex-col gap-4">
              <div className="flex items-center gap-2 text-primary">
                <Type className="h-5 w-5" />
                <span className="text-xs font-bold uppercase tracking-widest">Tipografia</span>
              </div>
              <p className="text-sm font-medium leading-relaxed">
                {model.typography}
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all flex flex-col gap-4">
              <div className="flex items-center gap-2 text-primary">
                <Sparkles className="h-5 w-5" />
                <span className="text-xs font-bold uppercase tracking-widest">A "Vibe"</span>
              </div>
              <p className="text-sm font-medium leading-relaxed">
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
                className="w-full sm:w-auto px-12 py-5 bg-primary text-primary-foreground font-black text-lg rounded-2xl shadow-2xl shadow-primary/20 hover:brightness-110 hover:scale-[1.02] active:scale-95 transition-all uppercase tracking-wider"
              >
                Escolher esse modelo
              </button>
              <p className="text-center sm:text-left pt-4 text-[10px] text-muted-foreground uppercase font-bold tracking-[0.1em] opacity-50">
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
    </div>
  )
}
