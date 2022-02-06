import './styles.css'

interface Props {
  view: boolean
  handleNavigation: (opt: string) => void
}

export const Navigation = ({ view, handleNavigation }: Props) => {
  return (
    <nav className='navigation'>
      <button
        className={view ? 'active' : ''}
        onClick={() => handleNavigation('all')}
      >
        All
      </button>
      <button
        className={view ? '' : 'active'}
        onClick={() => handleNavigation('favs')}
      >
        My faves
      </button>
    </nav>
  )
}
