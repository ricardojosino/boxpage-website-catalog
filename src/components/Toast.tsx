'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, X } from 'lucide-react'
import { useEffect } from 'react'

interface ToastProps {
  isVisible: boolean
  message: string
  onClose: () => void
  duration?: number
}

export default function Toast({ isVisible, message, onClose, duration = 3000 }: ToastProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose()
      }, duration)
      return () => clearTimeout(timer)
    }
  }, [isVisible, duration, onClose])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
          className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[200] flex items-center gap-3 px-6 py-4 bg-[#1c1c1c] border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] min-w-[320px]"
        >
          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/20 text-primary shrink-0">
            <CheckCircle2 className="h-6 w-6" />
          </div>

          <div className="flex-1">
            <p className="text-xs text-white">{message}</p>
          </div>

          <button
            onClick={onClose}
            className="p-1 hover:bg-white/5 rounded-lg transition-colors text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>

          {/* Progress Bar Animation */}
          <motion.div
            initial={{ width: '100%' }}
            animate={{ width: '0%' }}
            transition={{ duration: duration / 1000, ease: 'linear' }}
            className="absolute bottom-0 left-0 h-1 bg-primary rounded-full origin-left"
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
