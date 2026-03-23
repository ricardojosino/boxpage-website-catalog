'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Cookie } from 'lucide-react'

export default function RGPD() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('boxpage-cookie-consent')
    if (!consent) {
      setShow(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('boxpage-cookie-consent', 'true')
    setShow(false)
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:w-[400px] z-[100]"
        >
          <div className="bg-card/95 backdrop-blur-xl border border-border p-6 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-2 h-full bg-primary" />

            <div className="flex flex-col gap-4 pl-2">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  <Cookie className="h-5 w-5" />
                </div>
                <h4 className="font-bold text-sm tracking-tight uppercase">Privacidade & Cookies</h4>
              </div>

              <p className="text-xs text-muted-foreground leading-relaxed">
                Utilizamos cookies para melhorar a sua experiência no nosso catálogo. Ao continuar a navegar, aceita a nossa {' '}
                <Link href="https://boxpage.pt/privacidade" target="_blanck" className="text-primary hover:underline font-semibold underline-offset-4 decoration-primary/30 transition-all">
                  Política de Privacidade
                </Link>.
              </p>

              <div className="flex justify-end gap-3 mt-2">
                <button
                  onClick={handleAccept}
                  className="px-6 py-2 bg-primary text-primary-foreground font-bold text-xs rounded-full hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-primary/20"
                >
                  Entendi
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
