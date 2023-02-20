import React, { useEffect } from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import Product from '../data/product'

const List = () => {
  const { products, setProducts } = useOutletContext<{
    products: Product[]
    setProducts: (products: Product[]) => void
  }>()

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setProducts(data.slice(0, 10))
      })
  }, [])

  return (
    <div>
      <ul>
        {products.map((product) => (
          <li>
            <Link key={product.id} to={`/products/${product.id}`}>
              {product.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default List
