import { createContext, useState } from 'react'
import products_list from './data/products.json'
import CartPage from './components/CartPage'

export const ProductContext = createContext()

const App = () => {
  const product_data = products_list.products

  return (
    <div>
      <ProductContext.Provider value={{product_data}}>
        <CartPage />
      </ProductContext.Provider>
      </div>
  )
}

export default App