import { useState } from 'react'
import Hero from './Hero'
import Navbar from './Navbar'



function App() {
  return (
    <>
      <Navbar></Navbar>

      <div className="mt-28 max-w-screen-md mx-auto px-2 ">
        <Hero />
      </div>
    </>
  )
}

export default App
