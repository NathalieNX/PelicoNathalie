interface Product {
  category: string
  description: string
  id: number
  image: string
  price: number
  title: string
}

export interface CartProduct extends Product {
  quantity: number
}

export default Product
