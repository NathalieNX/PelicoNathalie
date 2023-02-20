import './App.css'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import { useCallback, useState } from 'react'
import Product, { CartProduct } from './data/product'

function App() {
  const [products, setProducts] = useState<Product[]>([])
  const [cart, setCart] = useState<CartProduct[]>([])

  const addToCart = useCallback(
    (product: Product) => {
      const existing = cart.find((cartProd) => cartProd.id === product.id)
      if (existing) {
        setCart(
          cart.map((cartItem) => {
            if (cartItem.id === product.id) {
              return { ...cartItem, quantity: cartItem.quantity + 1 }
            }
            return cartItem
          }),
        )
      } else {
        setCart([...cart, { ...product, quantity: 1 }])
      }
    },
    [cart, setCart],
  )

  return (
    <div className='App'>
      <Header />
      <Outlet context={{ products, setProducts, cart, addToCart }} />
      <h1>Web store application</h1>
    </div>
  )
}

export default App
