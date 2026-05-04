import { Metadata } from 'next'
import Stepper from '@/components/Stepper'
import HeroSection from './HeroSection'
import StyleGridSection from './StyleGridSection'
import BottomTextSection from './BottomTextSection'

export const metadata: Metadata = {
  title: 'Escolha o Estilo do seu Site',
  description: 'Selecione o estilo visual que melhor representa o seu negócio e descubra modelos exclusivos desenhados para alta performance.',
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
