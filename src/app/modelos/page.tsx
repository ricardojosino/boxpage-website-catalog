import sitesData from '@/data/sites.json'
import stylesData from '@/data/styles.json'
import Stepper from '@/components/Stepper'
import ModelosHeaderSection from './ModelosHeaderSection'
import ModelosGridSection from './ModelosGridSection'

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
