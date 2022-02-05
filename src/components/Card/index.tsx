import { useState } from 'react'
import TimeAgo from 'react-timeago'
import { News } from '../../interfaces/News.interface'

import clockIcon from '../../statics/images/iconmonstr-time-2.svg'
import likedIcon from '../../statics/images/iconmonstr-favorite-3.svg'
import unlikedIcon from '../../statics/images/iconmonstr-favorite-2.svg'

import { useInitialState } from '../../hooks/useInitialState'

import './styles.css'

interface Props {
  card: News
}

export const Card = ({ card }: Props) => {
  const [liked, setLiked] = useState(card.liked)
  const { addLikedPost, removeLikedPost } = useInitialState()

  const handleLike = () => {
    if (liked) {
      removeLikedPost(card)
    } else {
      addLikedPost(card)
    }
    setLiked((prev) => !prev)
  }

  return (
    <article className='card'>
      <div className='card__body'>
        <header className='card__header'>
          <img src={clockIcon} alt='Time ago' />
          <span>
            <TimeAgo date={card.created_at.toString()} /> by {card.author}
          </span>
        </header>
        <div className='card__title'>
          <a
            href={card.story_url?.toString()}
            target='_blank'
            rel='noopener noreferrer'
          >
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
