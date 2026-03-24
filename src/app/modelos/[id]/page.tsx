import stylesData from '@/data/styles.json'
import sitesData from '@/data/sites.json'
import { notFound } from 'next/navigation'
import Stepper from '@/components/Stepper'
import ModelDetailSection from './ModelDetailSection'

// Forçar renderização dinâmica (SSR) para garantir que temos os parâmetros no servidor
export const dynamic = 'force-dynamic'

interface ModelDetailPageProps {
  params: Promise<{
    id: string
  }>
  searchParams: Promise<{
    style?: string
  }>
}

export default async function ModelDetailPage({ params, searchParams }: ModelDetailPageProps) {
  const { id } = await params
  const { style } = await searchParams

  const modelId = parseInt(id)
  const model = sitesData.find(s => s.id === modelId)

  if (!model) {
    notFound()
  }

  const styleObj = stylesData.find(s => s.id === model.style_id)

  return (
    <div className="flex flex-col gap-12 py-10">
      <Stepper currentStep={3} styleId={style || null} />

      <ModelDetailSection
        model={model}
        style={styleObj}
      />
    </div>
  )
}
