import type { Metadata } from 'next'
import stylesData from '@/data/styles.json'
import sitesData from '@/data/sites.json'
import { notFound } from 'next/navigation'
import Stepper from '@/components/Stepper'
import ModelDetailSection from './ModelDetailSection'
import ExploreMoreSection from './ExploreMoreSection'

export async function generateMetadata({ params }: ModelDetailPageProps): Promise<Metadata> {
  const { id } = await params
  const modelId = parseInt(id)
  const model = sitesData.find(s => s.id === modelId)

  if (!model) return {}

  const title = `${model.title} | BoxPage Studio`
  const description = model.legend

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://catalogo.boxpage.pt/modelos/${id}`,
      siteName: 'BoxPage Studio',
      images: [
        {
          url: model.image,
          width: 1200,
          height: 630,
          alt: `Modelo ${model.title}`,
        },
      ],
      locale: 'pt_PT',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [model.image],
    },
  }
}

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
    <div className="flex flex-col">
      <Stepper currentStep={3} styleId={style || null} />

      <ModelDetailSection
        model={model}
        style={styleObj}
      />

      <ExploreMoreSection styleId={style} />
    </div>
  )
}
