'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Users } from 'lucide-react'

interface StyleCardProps {
  id: number
  title: string
  legend: string
  audience: string
  image: string
  priority?: boolean
}

export default function StyleCard({ id, title, legend, audience, image, priority = false }: StyleCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group flex flex-col bg-[#1c1c1c] rounded-2xl border border-white/10 overflow-hidden hover:border-primary/60 hover:shadow-[0_0_30px_rgba(22,169,250,0.15)] transition-all duration-500"
    >
      <Link href={`/modelos?style=${id}`} className="flex flex-col h-full">
        {/* Aspect Ratio 1.91:1 for the image */}
        <div className="relative aspect-[1.91/1] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={priority}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
            <span className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider">
              Explorar Estilo <ArrowRight className="h-4 w-4" />
            </span>
          </div>
        </div>

        <div className="p-8 flex flex-col flex-grow gap-4">
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">
              {title}
            </h3>
            <div className="flex items-center gap-2 text-xs font-semibold text-primary/80 tracking-widest">
              <span>{audience}</span>
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed text-sm xl:text-base line-clamp-3">
            {legend}
          </p>

          <div className="mt-auto pt-4">
            <div className="h-0.5 w-12 bg-primary/20 group-hover:w-full transition-all duration-500 rounded-full" />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
