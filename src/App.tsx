import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Users from './pages/users/Users'
import Products from './pages/products/Products'
import NotFound from './pages/error/NotFound'
import HomePage from './pages/home/Home'
import MainLayout from './layouts/Main'

const App = (): JSX.Element => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<Users />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MainLayout>
  )
}

export default App
