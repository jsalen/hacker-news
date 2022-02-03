import { News } from '../../interfaces/News.interface'

import clockIcon from '../../statics/images/iconmonstr-time-2.svg'
import likedIcon from '../../statics/images/iconmonstr-favorite-3.svg'
import unlikedIcon from '../../statics/images/iconmonstr-favorite-2.svg'

import './styles.css'

interface Props {
  card: News
}

export const Card = ({ card }: Props) => {
  return (
    <article className='card'>
      <div className='card__body'>
        <header className='card__header'>
          <img src={clockIcon} alt='Time ago' />
          <span>
            {card.created_at} by {card.author}
          </span>
        </header>
        <div className='card__title'>
          <h2>{card.story_title}</h2>
        </div>
      </div>
      <div className='card__like'>
        <img src={unlikedIcon} alt='Like' />
      </div>
    </article>
  )
}
