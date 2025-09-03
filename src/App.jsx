import React from 'react'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import LayoutOne from './layout/LayoutOne'
import Home from './pages/Home'

import Blog from './pages/Blog'
import Contact from './pages/Contact'
import AllProduct from './components/AllProduct'

const App = () => {

  const myRoute = createBrowserRouter(createRoutesFromElements(
    <Route >
      <Route path='/' element={<LayoutOne />}>
      <Route index element={<Home />} ></Route>
      <Route path='/contact' element={<Contact />} ></Route>
      <Route path='/blog' element={<Blog />} ></Route>
      <Route path='/allProduct' element={<AllProduct />} ></Route>
    
      
      </Route>
    </Route>
  ))



  return (
    <>
    
    <RouterProvider router={myRoute} />
    
    
    
    
    
    
    
    </>
  )
}

export default App