import { Card } from '../../components/Card'
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll'

import './styles.css'

interface Props {
  cards: News[]
  loading: boolean
  error: boolean
  view: boolean
  onLoading: () => JSX.Element
  onError: () => JSX.Element
  onNoLikedPosts: () => JSX.Element
}

export const ListOfCards = ({
  cards,
  loading,
  error,
  view,
  onLoading,
  onError,
  onNoLikedPosts,
}: Props) => {
  const { count } = useInfiniteScroll()
  // count: Set how many posts will be loaded after users
  // gets to bottom of page, creating a infinity scroll.

  return (
    <>
      {error && onError()}
      {loading && onLoading()}
      {!view && !cards.length && onNoLikedPosts()}
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
