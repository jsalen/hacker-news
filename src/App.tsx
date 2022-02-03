import { useState } from 'react'
import { Dropdown } from './components/Dropdown'
import { Header } from './components/Header'
import { Navigation } from './components/Navigation'
import { ListOfCards } from './container/ListOfCards'

import useFetch from './hooks/useFetch'
import { filterData } from './utils'

function App() {
  const [view, setView] = useState(true)
  const [filter, setFilter] = useState('')
  const { data, loading, error } = useFetch(filter)
  const filteredData = filterData(data)

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
        {loading ? <div>Loading...</div> : <ListOfCards cards={filteredData} />}
      </main>
    </>
  )
}

export default App
