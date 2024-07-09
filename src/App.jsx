import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/layouts/Header'
import Home from './components/pages/Home'
import { Route, Routes } from 'react-router-dom'
import Product from './components/pages/Product'
import ProductDetail from './components/pages/ProductDetail'
import ProductBox from './components/pages/ProductBox'
import LayoutFe from './components/layouts/LayoutFe'
import LayoutBE from './components/admin/layouts/LayoutBE'
import Dashboard from './components/admin/pages/Dashboard'
import CategoryPage from './components/admin/pages/category/CategoryPage'
import AddCategory from './components/admin/pages/category/AddCategory'

function App() {

  return (
    <>

      <Routes>
        <Route path='/' element={<LayoutFe></LayoutFe>}>
          <Route index element={<Home></Home>}></Route>
          <Route path='/product' element={<ProductBox></ProductBox>}>
            <Route index element={<Product></Product>}></Route>
            <Route path='detail/:id' element={<ProductDetail></ProductDetail>}></Route>
          </Route>
        </Route>
        <Route path='/admin' element={<LayoutBE></LayoutBE>}>
          <Route index element={<Dashboard></Dashboard>}></Route>
          <Route path='category' element={<CategoryPage></CategoryPage>}></Route>
          <Route path='add-category' element={<AddCategory></AddCategory>}></Route>
        </Route>
      </Routes>

    </>
  )
}

export default App
