'use client'

import { motion } from 'framer-motion'
import { Check, ChevronRight } from 'lucide-react'
import Link from 'next/link'

const steps = [
  { id: 1, name: 'Estilo', label: 'Estilo', path: '/' },
  { id: 2, name: 'Modelos', label: 'Modelos', path: '/modelos' },
  { id: 3, name: 'Finalizar', label: 'Escolher', path: '/modelos/' }
]

interface StepperProps {
  currentStep: number
  styleId?: string | null
}

export default function Stepper({ currentStep, styleId }: StepperProps) {
  const getStepStatus = (stepId: number) => {
    if (stepId < currentStep) return 'complete'
    if (stepId === currentStep) return 'active'
    return 'upcoming'
  }

  return (
    <div className="w-full bg-background border-b border-white/5  xl:py-3 z-40 backdrop-blur-md">
      <div className="boxed-container">
        <nav aria-label="Progress" className="flex items-center justify-center">
          <ol className="flex items-center gap-4 sm:gap-8 xl:gap-16 w-full max-w-4xl">
            {steps.map((step, index) => {
              const status = getStepStatus(step.id)
              const isLast = index === steps.length - 1

              const stepPath = step.id === 2 && styleId
                ? `${step.path}?style=${styleId}`
                : step.path

              const isClickable = status !== 'upcoming'

              return (
                <li key={step.id} className={`flex items-center justify-center ${!isLast ? 'flex-1' : ''}`}>
                  <Link
                    href={isClickable ? stepPath : '#'}
                    className={`flex flex-col sm:flex-row items-center gap-2 sm:gap-4 group transition-all ${isClickable ? 'cursor-pointer hover:opacity-80' : 'cursor-default opacity-40'}`}
                  >
                    {/* Circle Indicator */}
                    <div className={`
                      relative h-8 w-8 sm:h-10 sm:w-10 flex items-center justify-center rounded-full border-2 transition-all duration-300
                      ${status === 'complete' ? 'bg-primary border-primary text-primary-foreground' : ''}
                      ${status === 'active' ? 'border-primary text-primary shadow-[0_0_15px_rgba(22,169,250,0.3)]' : ''}
                      ${status === 'upcoming' ? 'border-white/10 text-muted-foreground' : 'group-hover:scale-110'}
                    `}>
                      {status === 'complete' ? (
                        <Check className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={3} />
                      ) : (
                        <span className="text-xs sm:text-sm font-black">{step.id}</span>
                      )}

                      {status === 'active' && (
                        <motion.div
                          layoutId="stepper-active"
                          className="absolute inset-0 rounded-full border-2 border-primary"
                          initial={false}
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </div>

                    {/* Labels */}
                    <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                      <span className={`text-[10px] sm:text-[11px] uppercase font-black tracking-widest leading-none ${status === 'active' ? 'text-primary' : 'text-muted-foreground'}`}>
                        Etapa 0{step.id}
                      </span>
                      <span className={`text-xs sm:text-sm font-bold whitespace-nowrap ${status === 'upcoming' ? 'text-muted-foreground/50' : 'text-foreground'}`}>
                        {step.label}
                      </span>
                    </div>
                  </Link>

                  {/* Divider Line */}
                  {!isLast && (
                    <div className="hidden sm:block flex-1 h-[2px] mx-4 sm:mx-8 xl:mx-16 bg-white/5 overflow-hidden">
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: status === 'complete' ? 1 : 0 }}
                        className="h-full bg-primary origin-left transition-all duration-500"
                      />
                    </div>
                  )}
                  {!isLast && (
                    <ChevronRight className="sm:hidden h-4 w-4 text-white/10 mx-auto" />
                  )}
                </li>
              )
            })}
          </ol>
        </nav>
      </div>
    </div>
  )
}
