import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Auth from './pages/Auth/Auth'
import About from './pages/about/about'
import Blogs from './pages/Blogs/Blogs'
import Services from './pages/Services/Services'
import Dashboard from './pages/Dashboard/Dashboard'
const AllRoutes = () => {
  return (
    <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/Auth' element={<Auth/>} />
        <Route exact path='/about' element={<About/>} />
        <Route exact path='/Blogs' element={<Blogs/>} />
        <Route exact path='/Services' element={<Services/>} />
        <Route exact path='/Dashboard' element={<Dashboard/>} />
    </Routes>
  )
}

export default AllRoutes
