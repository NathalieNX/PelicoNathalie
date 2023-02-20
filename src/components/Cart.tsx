import { useOutletContext } from 'react-router-dom'
import { CartProduct } from '../data/product'

const List = () => {
  const { cart } = useOutletContext<{
    cart: CartProduct[]
  }>()

  return (
    <div>
      <ul>
        {cart.map((product) => (
          <li>{product.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default List
