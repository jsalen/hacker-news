import { useState } from 'react'
import { useAppSelector } from './hooks/hooksTypes'
import { Dropdown } from './components/Dropdown'
import { Header } from './components/Header'
import { Navigation } from './components/Navigation'
import { ListOfCards } from './container/ListOfCards'

import useFetch from './hooks/useFetch'

function App() {
  const [view, setView] = useState(true)
  const [filter, setFilter] = useState('')
  const { data, loading, error } = useFetch(filter)
  const { likedPosts } = useAppSelector((state) => state.likedPosts)

  const handleNavigation = () => {
    setView((prev) => !prev)
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
        {view ? (
          <ListOfCards
            loading={loading}
            error={error}
            view={view}
            cards={data}
            onLoading={() => <div>Loading...</div>}
            onError={() => <div>Something went wrong</div>}
            onNoLikedPosts={() => <div>No liked posts</div>}
          />
        ) : (
          <ListOfCards
            loading={loading}
            error={error}
            view={view}
            cards={likedPosts}
            onLoading={() => <div>Loading...</div>}
            onError={() => <div>Something went wrong</div>}
            onNoLikedPosts={() => <div>No liked posts</div>}
          />
        )}
      </main>
    </>
  )
}

export default App
