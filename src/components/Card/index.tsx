import { useState } from 'react'
import { useAppDispatch } from '../../hooks/hooksTypes'
import { addLike, removeLike } from '../../features/likedPosts/likedPostSlice'
import TimeAgo from 'react-timeago'

import clockIcon from '../../statics/images/iconmonstr-time-2.svg'
import likedIcon from '../../statics/images/iconmonstr-favorite-3.svg'
import unlikedIcon from '../../statics/images/iconmonstr-favorite-2.svg'

import './styles.css'

interface Props {
  card: News
}

export const Card = ({ card }: Props) => {
  const dispatch = useAppDispatch()
  const [liked, setLiked] = useState(card.liked)

  const handleLike = () => {
    if (liked) {
      dispatch(removeLike(card.objectID))
      setLiked(false)
    } else {
      dispatch(addLike(card))
      setLiked(true)
    }
  }

  return (
    <article className='card'>
      <div className='card__body'>
        <header className='card__header'>
          <img src={clockIcon} alt='Time ago' />
          <span>
            <TimeAgo date={card.created_at} /> by {card.author}
          </span>
        </header>
        <div className='card__title'>
          <a href={card.story_url} target='_blank' rel='noopener noreferrer'>
            {card.story_title}
          </a>
        </div>
      </div>
      <div className='card__like'>
        <img
          src={liked ? likedIcon : unlikedIcon}
          alt='Like'
          onClick={handleLike}
        />
      </div>
    </article>
  )
}
