import { useState } from 'react'
import { Dropdown } from './components/Dropdown'
import { Header } from './components/Header'
import { Navigation } from './components/Navigation'

function App() {
  const [view, setView] = useState(true)

  const handleNavigation = () => {
    setView((prev) => !prev)
  }

  return (
    <>
      <Header />
      <main>
        <Navigation handleNavigation={handleNavigation} view={view} />
        <Dropdown />
      </main>
    </>
  )
}

export default App
