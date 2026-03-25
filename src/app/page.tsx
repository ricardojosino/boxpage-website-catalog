import { Metadata } from 'next'
import Stepper from '@/components/Stepper'
import HeroSection from './HeroSection'
import StyleGridSection from './StyleGridSection'
import BottomTextSection from './BottomTextSection'

export const metadata: Metadata = {
  title: 'Escolha o Estilo do seu Site | BoxPage Studio',
  description: 'Selecione o estilo visual que melhor representa o seu negócio e descubra modelos exclusivos desenhados para alta performance.',
  openGraph: {
    title: 'Escolha o Estilo do seu Site | BoxPage Studio',
    description: 'Selecione o estilo visual que melhor representa o seu negócio e descubra modelos exclusivos desenhados para alta performance.',
    url: 'https://catalogo.boxpage.pt',
    siteName: 'BoxPage Studio',
    images: [
      {
        url: '/images/screenshot-style.jpg',
        width: 1200,
        height: 630,
        alt: 'Catálogo de Estilos BoxPage Studio',
      },
    ],
    locale: 'pt_PT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Escolha o Estilo do seu Site | BoxPage Studio',
    description: 'Selecione o estilo visual que melhor representa o seu negócio e descubra modelos exclusivos desenhados para alta performance.',
    images: ['/images/screenshot-style.jpg'],
  },
}

export const dynamic = 'force-dynamic'

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Stepper currentStep={1} styleId={null} />

      {/* Hero Section */}
      <HeroSection />

      {/* Style Chooser / Catalog Entry */}
      <StyleGridSection />

      {/* Bottom Text */}
      <BottomTextSection />
    </div>
  )
}
