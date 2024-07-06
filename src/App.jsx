import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/layouts/Header'
import Home from './components/pages/Home'
import { Route, Routes } from 'react-router-dom'
import Product from './components/pages/Product'
import ProductDetail from './components/pages/ProductDetail'
import ProductBox from './components/pages/ProductBox'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/product' element={<ProductBox></ProductBox>}>
          <Route index element={<Product></Product>}></Route>
          <Route path='detail/:id' element={<ProductDetail></ProductDetail>}></Route>
        </Route>

      </Routes>

    </>
  )
}

export default App
