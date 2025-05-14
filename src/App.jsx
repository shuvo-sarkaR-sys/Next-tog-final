import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NewsRoom from './pages/NewsRoom'
import Footer from './components/Footer'
import MediaKit from './pages/MediaKit'
import Login from './components/Login'
import Dashboard from './pages/Dashboard'
import PrivateRoute from './components/PrivateRoute'
import ContactForm from './components/ContactForm'
import BlogDetails from './pages/BlogDetails'
function App() {
 

  return (
    <>
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/newsroom' element={<NewsRoom/>}/>
      <Route path='/mediakit' element={<MediaKit/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/dashboard' element={<PrivateRoute><Dashboard/></PrivateRoute>} />
      <Route path='/contactus' element={<ContactForm/>}/>
       <Route path="/blog/:id" element={<BlogDetails />} />
      </Routes>
      <Footer/>
       </BrowserRouter>
    </>
  )
}

export default App
