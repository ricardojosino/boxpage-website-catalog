import Stepper from '@/components/Stepper'
import HeroSection from './HeroSection'
import StyleGridSection from './StyleGridSection'
import BottomTextSection from './BottomTextSection'

export const dynamic = 'force-dynamic'

export default function HomePage() {
  return (
    <div className="flex flex-col gap-8 py-10">
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
