import { useState } from 'react'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <div className="bg-[#040033] min-h-screen flex flex-col">
        <Navbar />
        <Hero />
      </div>
    </>
  )
}

export default App
