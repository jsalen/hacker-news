import { useState } from 'react'
import { Dropdown } from './components/Dropdown'
import { Header } from './components/Header'
import { Navigation } from './components/Navigation'

import useFetch from './hooks/useFetch'

function App() {
  const [view, setView] = useState(true)
  const [filter, setFilter] = useState('')
  const { data, loading, error } = useFetch(filter)

  const handleNavigation = () => {
    setView((prev) => !prev)
  }

  const handleFilter = (filter: string) => {
    setFilter(filter)
  }

  console.log(data)

  return (
    <>
      <Header />
      <main>
        <Navigation handleNavigation={handleNavigation} view={view} />
        <Dropdown handleFilter={handleFilter} />
      </main>
    </>
  )
}

export default App
