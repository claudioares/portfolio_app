import { Card } from './card'
import { inforCards } from '@/utils/info.stecks.cards'

export function CardStackInit() {
  return (
    <>
      {inforCards.map((info) => (
        <div className="cards_init" key={info.name}>
          <Card name={info.name} image={info.image} href={info.href} />
        </div>
      ))}
    </>
  )
}
