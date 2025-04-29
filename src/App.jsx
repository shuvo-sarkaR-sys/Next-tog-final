import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NewsRoom from './pages/NewsRoom'
import Footer from './components/Footer'
import MediaKit from './pages/MediaKit'
function App() {
 

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/newsroom' element={<NewsRoom/>}/>
      <Route path='/mediakit' element={<MediaKit/>}/>
      </Routes>
      <Footer/>
       </BrowserRouter>
    </>
  )
}

export default App
