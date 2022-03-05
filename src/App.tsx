import { useState } from 'react'
import { useAppSelector } from './hooks/hooksTypes'
import { Dropdown } from './components/Dropdown'
import { Header } from './components/Header'
import { Navigation } from './components/Navigation'
import { ListOfCards } from './container/ListOfCards'

import useFetch from './hooks/useFetch'
import { Message } from './components/Message'
import { Pagination } from './components/Pagination'

function App() {
  const [view, setView] = useState(true)
  const [filter, setFilter] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const { data, totalPages, loading, error } = useFetch(filter, currentPage)
  const { likedPosts } = useAppSelector((state) => state.likedPosts)

  const handlePageChange = (page: number) => setCurrentPage(page)

  const handleNavigation = (opt: string) => {
    return opt === 'all' ? setView(true) : setView(false)
  }

  const handleFilter = (filter: string) => {
    setFilter(filter)
    setCurrentPage(1)
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
        {view && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            loading={loading}
            onPageChange={handlePageChange}
          />
        )}
      </main>
    </>
  )
}

export default App
