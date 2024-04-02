import React from 'react'
import Footer from './ui/Footer'
import Header from './ui/Header'
import Homepages from './features/home/Homepages'

const App = () => {
  return (
    <div>
      <Header />
      <div className='border-b-2 border-black'></div>
      <Homepages />
      <div className='border-b-2 border-black'></div>
      <Footer />
    </div>
  )
}

export default App
