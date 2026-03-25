import type { Metadata } from 'next'
import sitesData from '@/data/sites.json'
import stylesData from '@/data/styles.json'
import Stepper from '@/components/Stepper'
import ModelosHeaderSection from './ModelosHeaderSection'
import ModelosGridSection from './ModelosGridSection'

export const metadata: Metadata = {
  title: 'Catálogo de Modelos Premium | BoxPage Studio',
  description: 'Conheça nossa coleção de modelos de alta performance, desenhados para elevar a presença digital do seu negócio.',
  openGraph: {
    title: 'Catálogo de Modelos Premium | BoxPage Studio',
    description: 'Conheça nossa coleção de modelos de alta performance, desenhados para elevar a presença digital do seu negócio.',
    url: 'https://catalogo.boxpage.pt/modelos',
    siteName: 'BoxPage Studio',
    images: [
      {
        url: '/images/screenshot-sites.jpg',
        width: 1200,
        height: 630,
        alt: 'Catálogo de Modelos BoxPage Studio',
      },
    ],
    locale: 'pt_PT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Catálogo de Modelos Premium | BoxPage Studio',
    description: 'Conheça nossa coleção de modelos de alta performance, desenhados para elevar a presença digital do seu negócio.',
    images: ['/images/screenshot-sites.jpg'],
  },
}

export const dynamic = 'force-dynamic'

interface ModelosPageProps {
  searchParams: Promise<{
    style?: string
    search?: string
  }>
}

export default async function ModelosPage({ searchParams }: ModelosPageProps) {
  const params = await searchParams
  const styleIdStr = params.style
  const searchStr = params.search

  let filteredModels = [...sitesData]
  let filterTitle = "Todos os Modelos"
  let filterContext = ""

  if (searchStr) {
    const query = searchStr.toLowerCase()
    filteredModels = sitesData.filter(site =>
      site.title.toLowerCase().includes(query) ||
      site.id.toString().includes(query)
    )
    filterTitle = `Resultados para: "${searchStr}"`
    filterContext = "Pesquisa Global"
  } else if (styleIdStr) {
    const styleId = parseInt(styleIdStr)
    const styleObj = stylesData.find(s => s.id === styleId)

    if (styleObj) {
      filteredModels = sitesData.filter(site => site.style_id === styleId)
      filterTitle = `${styleObj.title}`
      filterContext = styleObj.audience
    }
  }

  return (
    <div className="flex flex-col gap-12 py-10">
      <Stepper currentStep={2} styleId={styleIdStr} />

      <ModelosHeaderSection
        filterTitle={filterTitle}
        filterContext={filterContext}
      />

      <ModelosGridSection filteredModels={filteredModels} />
    </div>
  )
}
