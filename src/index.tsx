import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import List from './components/List'
import Cart from './components/Cart'
import Item from './components/Item'

import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/products',
        element: <List />,
        // children: [{ path: ':productId', element: <Item /> }],
      },
      {
        path: '/products/:productId',
        element: <Item />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
    ],
  },
])

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root'),
)
