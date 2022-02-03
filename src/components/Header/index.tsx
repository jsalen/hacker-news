import logo from '../../statics/images/hacker-news.png'

import './styles.css'

export const Header = () => {
  return (
    <header className='header'>
      <figure className='header__img'>
        <img src={logo} alt='Hacker News Logo' />
      </figure>
    </header>
  )
}
