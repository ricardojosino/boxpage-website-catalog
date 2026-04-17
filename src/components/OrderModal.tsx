'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, CheckCircle2, Phone, Mail, User, Building, ArrowRight } from 'lucide-react'
import Image from 'next/image'

interface OrderModalProps {
  isOpen: boolean
  onClose: () => void
  model: {
    id: number
    title: string
    style_id: number
    link: string
  }
  style?: {
    id: number
    title: string
  }
}
 
export default function OrderModal({ isOpen, onClose, model, style }: OrderModalProps) {
  const [step, setStep] = useState<'form' | 'success'>('form')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
 
  // Bloquear e liberar o scroll do body conforme o modal abre e fecha
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
 
    // Cleanup ao desmontar
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])
 
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
 
    const payload = {
      ...formData,
      modelId: model.id,
      modelTitle: model.title,
      modelLink: model.link,
      styleTitle: style?.title,
      catalogUrl: typeof window !== 'undefined' ? window.location.href : ''
    }
 
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
 
      if (!response.ok) {
        throw new Error('Falha ao enviar e-mail');
      }
 
      console.log('Pedido enviado com sucesso:', payload);
      setStep('success');
    } catch (error) {
      console.error('Erro ao enviar pedido:', error);
      alert('Ocorreu um erro ao enviar o seu pedido. Por favor, tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
          <style jsx global>{`
            .premium-scrollbar::-webkit-scrollbar {
              width: 5px;
            }
            .premium-scrollbar::-webkit-scrollbar-track {
              background: transparent;
              margin: 20px 0;
            }
            .premium-scrollbar::-webkit-scrollbar-thumb {
              background: rgba(22, 169, 250, 0.2);
              border-radius: 10px;
            }
            .premium-scrollbar::-webkit-scrollbar-thumb:hover {
              background: rgba(22, 169, 250, 0.5);
            }
          `}</style>

          {/* Overlay - Bloqueado para clique conforme pedido */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-lg bg-[#1a1a1a] border border-white/10 rounded-3xl shadow-[0_25px_100px_rgba(0,0,0,0.8)] overflow-hidden max-h-[90vh] flex flex-col"
          >
            {/* Close Button - Contraste Extremo fixo no topo */}
            {step === 'form' && (
              <button
                onClick={onClose}
                className="absolute top-6 right-6 flex items-center gap-2 pl-4 pr-3 py-2 bg-white hover:bg-white/90 text-black border-none rounded-full shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all z-30 group"
                title="Fechar Formulário"
              >
                <span className="text-[10px] font-black tracking-widest uppercase mb-px">Fechar</span>
                <X className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </button>
            )}

            {/* Conteúdo com Scroll Interno Ajustado */}
            <div className="flex-1 overflow-y-auto premium-scrollbar p-1">
              <div className="p-8 md:p-10">
                {step === 'form' ? (
                  <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest">
                        <ArrowRight className="h-3 w-3" /> Solicitar Modelo
                      </div>
                      <h2 className="text-3xl font-black tracking-tight">{model.title}</h2>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Preencha os seus dados abaixo para que possamos personalizar este modelo de acordo com o seu negócio.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold uppercase tracking-wider pl-1">Nome Completo *</label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-primary" />
                          <input
                            required
                            type="text"
                            placeholder="Ex: Ricardo Josino"
                            className="w-full h-12 pl-11 pr-4 rounded-xl bg-secondary border-none focus:ring-2 focus:ring-primary text-sm transition-all"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          />
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold uppercase tracking-wider pl-1">E-mail*</label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-primary" />
                          <input
                            required
                            type="email"
                            placeholder="Ex: utilizador@empresa.pt"
                            className="w-full h-12 pl-11 pr-4 rounded-xl bg-secondary border-none focus:ring-2 focus:ring-primary text-sm transition-all"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          />
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold uppercase tracking-wider pl-1">Telemóvel / Whatsapp *</label>
                        <div className="relative">
                          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-primary" />
                          <input
                            required
                            type="tel"
                            placeholder="Ex: +351 912 345 678"
                            className="w-full h-12 pl-11 pr-4 rounded-xl bg-secondary border-none focus:ring-2 focus:ring-primary text-sm transition-all"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          />
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold uppercase tracking-wider pl-1">Nome da Empresa</label>
                        <div className="relative">
                          <Building className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-primary" />
                          <input
                            type="text"
                            placeholder="Opcional"
                            className="w-full h-12 pl-11 pr-4 rounded-xl bg-secondary border-none focus:ring-2 focus:ring-primary text-sm transition-all"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          />
                        </div>
                      </div>

                      <button
                        disabled={isSubmitting}
                        type="submit"
                        className="mt-4 flex items-center justify-center gap-2 h-14 bg-primary text-primary-foreground font-black uppercase tracking-wider rounded-2xl shadow-xl shadow-primary/20 hover:brightness-110 active:scale-95 transition-all disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <span className="w-6 h-6 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        ) : (
                          <>
                            <Send className="h-5 w-5" /> Enviar Pedido
                          </>
                        )}
                      </button>
                    </form>
                  </div>
                ) : (
                <div className="flex flex-col items-center text-center gap-5 relative overflow-hidden animate-in fade-in zoom-in duration-500 py-2">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-primary/10 blur-[80px] -z-10" />

                  <div className="relative h-20 w-20 rounded-full p-1 border-2 border-primary/20 shadow-xl">
                    <div className="relative h-full w-full rounded-full overflow-hidden border-2 border-background">
                      <Image
                        src="/images/profile-daiani-small.jpg"
                        alt="Daiani Josino"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-green-500 text-white p-1.5 rounded-full border-2 border-background shadow-lg">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-3 max-w-[340px]">
                    <h2 className="text-3xl font-black tracking-tight leading-tight">Escolha recebida!</h2>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      Olá <span className="text-foreground font-bold">{formData.name.split(' ')[0]}</span>, registamos o seu interesse no modelo <span className="text-primary font-bold">{model.title}</span>.
                      Em breve entrarei em contacto.
                    </p>
                  </div>

                  <div className="flex flex-col items-center gap-0.5 py-4 border-t border-border/50 w-full mt-1">
                    <span className="text-base font-black tracking-tight uppercase">Daiani Josino</span>
                    <span className="text-[10px] font-bold text-primary tracking-widest uppercase opacity-80">Atendimento Premium</span>
                  </div>

                  <button
                    onClick={onClose}
                    className="w-full py-4 bg-secondary hover:bg-white hover:text-black font-black rounded-xl transition-all uppercase text-[11px] tracking-[0.2em] shadow-lg active:scale-95"
                  >
                    Fechar Janela
                  </button>
                </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
