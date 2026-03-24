'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Globe, ArrowRight } from 'lucide-react'
import { useSearchParams } from 'next/navigation'

interface ModelCardProps {
  id: number
  title: string
  legend: string
  image: string
}

export default function ModelCard({ id, title, legend, image }: ModelCardProps) {
  const searchParams = useSearchParams()
  const styleId = searchParams.get('style')
  const detailUrl = styleId ? `/modelos/${id}?style=${styleId}` : `/modelos/${id}`

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="group flex flex-col bg-[#1c1c1c] rounded-2xl border border-white/10 overflow-hidden hover:border-primary/60 hover:shadow-[0_0_30px_rgba(22,169,250,0.15)] transition-all duration-500"
    >
      <Link href={detailUrl} className="flex flex-col h-full">
        {/* Screenshot 1.91:1 */}
        <div className="relative aspect-[1.91/1] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
          />
          <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="bg-background/90 text-primary p-3 rounded-full scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300">
              <ArrowRight className="h-6 w-6" />
            </div>
          </div>
        </div>

        <div className="p-6 flex flex-col gap-2">
          <div className="flex items-center gap-2 text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1 group-hover:text-primary transition-colors">
            <Globe className="h-3 w-3" />
            <span>Modelo Profissional</span>
          </div>
          <h3 className="text-xl font-bold tracking-tight">
            {title}
          </h3>
          <p className="text-muted-foreground leading-snug text-sm">
            {legend}
          </p>
        </div>
      </Link>
    </motion.div>
  )
}
