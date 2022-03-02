import { Card } from '../../components/Card'

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
  return (
    <>
      {error && onError()}
      {loading && onLoading()}
      {!view && !cards.length && onNoLikedPosts()}
      {!loading && !error && (
        <section className='list-of-cards'>
          {cards.map((card) => (
            <Card key={card.objectID} card={card} />
          ))}
        </section>
      )}
    </>
  )
}
