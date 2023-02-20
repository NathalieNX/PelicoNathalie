import React, { useMemo } from 'react'
import { Link, useOutletContext, useParams } from 'react-router-dom'
import Product from '../data/product'

const Item = () => {
  const { products, addToCart } = useOutletContext<{
    products: Product[]
    addToCart: (product: Product) => void
  }>()

  let { productId } = useParams()

  const item = useMemo(
    () =>
      products.find((product) => {
        if (typeof productId !== 'string') return false
        return product.id === parseInt(productId, 10)
      }),
    [productId, products],
  )

  console.log(productId)

  return (
    <div>
      {item !== undefined ? (
        <div>
          {item?.title}
          <button onClick={() => addToCart(item)}>Add to Cart</button>
        </div>
      ) : (
        <div>
          <Link to={`/products`}>Product not found, return to listing</Link>
        </div>
      )}
    </div>
  )
}

export default Item
