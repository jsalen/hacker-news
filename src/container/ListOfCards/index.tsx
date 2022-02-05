import { Card } from '../../components/Card'
import { News } from '../../interfaces/News.interface'
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll'

import './styles.css'

interface Props {
  cards: News[]
  loading: boolean
  error: boolean
  onLoading: () => JSX.Element
  onError: () => JSX.Element
}

export const ListOfCards = ({
  cards,
  loading,
  error,
  onLoading,
  onError,
}: Props) => {
  const { count } = useInfiniteScroll()

  return (
    <>
      {error && onError()}
      {loading && onLoading()}
      {!loading && !error && (
        <section className='list-of-cards'>
          {cards.slice(0, count).map((card) => (
            <Card key={card.objectID} card={card} />
          ))}
        </section>
      )}
    </>
  )
}
