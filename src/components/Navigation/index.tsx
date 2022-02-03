import './styles.css'

interface Props {
  view: boolean
  handleNavigation: () => void
}

export const Navigation = ({ view, handleNavigation }: Props) => {
  return (
    <nav className='navigation'>
      <button className={view ? 'active' : ''} onClick={handleNavigation}>
        All
      </button>
      <button className={view ? '' : 'active'} onClick={handleNavigation}>
        My faves
      </button>
    </nav>
  )
}
