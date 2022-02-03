import { Card } from '../../components/Card'
import { News } from '../../interfaces/News.interface'

import './styles.css'

interface Props {
  cards: News[]
}

export const ListOfCards = ({ cards }: Props) => {
  console.log(cards)
  return (
    <section className='list-of-cards'>
      {cards.map((card) => (
        <Card key={card.objectID} card={card} />
      ))}
    </section>
  )
}
