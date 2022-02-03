import { useState } from 'react'
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
      </main>
    </>
  )
}

export default App
