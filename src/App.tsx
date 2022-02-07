import { useState } from 'react'
import { useAppSelector } from './hooks/hooksTypes'
import { Dropdown } from './components/Dropdown'
import { Header } from './components/Header'
import { Navigation } from './components/Navigation'
import { ListOfCards } from './container/ListOfCards'

import useFetch from './hooks/useFetch'
import { Message } from './components/Message'

function App() {
  const [view, setView] = useState(true)
  const [filter, setFilter] = useState('')
  const { data, loading, error } = useFetch(filter)
  const { likedPosts } = useAppSelector((state) => state.likedPosts)

  const handleNavigation = (opt: string) => {
    return opt === 'all' ? setView(true) : setView(false)
  }

  const handleFilter = (filter: string) => {
    setFilter(filter)
  }

  return (
    <>
      <Header />
      <main>
        <Navigation handleNavigation={handleNavigation} view={view} />
        <Dropdown handleFilter={handleFilter} filter={filter} />
        <ListOfCards
          loading={loading}
          error={error}
          view={view}
          cards={view ? data : likedPosts}
          onLoading={() => <Message message={'Loading...'} />}
          onError={() => <Message message={'Something went wrong'} />}
          onNoLikedPosts={() => <Message message={'No liked posts'} />}
        />
      </main>
    </>
  )
}

export default App
