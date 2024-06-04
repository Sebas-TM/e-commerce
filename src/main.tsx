import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Index from './pages/Index'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'
import AboutUs from './pages/AboutUs'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />
  },
  {
    path: '/product/:productId',
    element: <ProductPage />
  },
  {
    path: '/cart',
    element: <CartPage />
  },
  {
    path: '/about-us',
    element: <AboutUs />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
