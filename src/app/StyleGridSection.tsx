import StyleCard from '@/components/StyleCard'
import stylesData from '@/data/styles.json'

export default function StyleGridSection() {
  return (
    <section className="boxed-container py-5 md:py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-12">
        {stylesData.map((style: any, index: number) => (
          <StyleCard 
            key={style.id}
            id={style.id}
            title={style.title}
            legend={style.legend}
            audience={style.audience}
            image={style.image}
            priority={index < 2}
          />
        ))}
      </div>
    </section>
  )
}
