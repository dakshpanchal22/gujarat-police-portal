import { useState, useEffect } from 'react'
import LoadingScreen from './components/LoadingScreen'
import LoginPage from './components/LoginPage'

const LOGO_URL = 'https://images.seeklogo.com/logo-png/61/1/gujarat-police-logo-png_seeklogo-611297.png'

function App() {
  const [phase, setPhase] = useState('loading')

  useEffect(() => {
    const timer = setTimeout(() => {
      setPhase('login')
    }, 4000)
    return () => clearTimeout(timer)
  }, [])

  if (phase === 'loading') {
    return <LoadingScreen logoUrl={LOGO_URL} />
  }

  return <LoginPage logoUrl={LOGO_URL} />
}

export default App
