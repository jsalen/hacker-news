import { Card } from '../../components/Card'
import { News } from '../../interfaces/News.interface'
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll'

import './styles.css'

interface Props {
  cards: News[]
}

export const ListOfCards = ({ cards }: Props) => {
  const { count } = useInfiniteScroll()

  return (
    <section className='list-of-cards'>
      {cards.slice(0, count).map((card) => (
        <Card key={card.objectID} card={card} />
      ))}
    </section>
  )
}
