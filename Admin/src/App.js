import React from 'react'
import Routes from './Router/Index'
import ContextProvider from './Context/Context'

const App = () => {
  return (
    <ContextProvider>
      <Routes/>
    </ContextProvider>
  )
}

export default App