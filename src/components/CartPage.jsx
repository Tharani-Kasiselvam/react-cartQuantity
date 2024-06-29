import { useContext, useState } from "react"
import { ProductContext } from "../App"
import '../../src/App.css'

const CartPage = () => {
    const {product_data} = useContext(ProductContext)
    const prod_details = product_data[3]

    const [cartCount,setCartCount] = useState(1)

    const setRating = () => {
      let currentRating = Math.round(prod_details.rating)
      console.log(currentRating)
    }

    const addCountHandler = () => {
      setCartCount(cartCount+1)
    }

    const removeCountHandler = () => {
      if(cartCount!=1)
      setCartCount(cartCount-1)
      
      //resticted to select below one quantity
      else
      setCartCount(1)
    }

    const calcTotalPrice = () => {
      let totalPrice = prod_details.price * cartCount
      console.log(totalPrice)
      return totalPrice
    }

  return (
    <div className="main">
        <div className="row" >
          <div className="col-md-6" style={{marginTop:"30px"}}>
            <img className="card-img-top" src="../prod_1.png" alt="cart_img"/>
          </div>
          <div className="col" style={{marginTop:"30px"}}>
            <h3>{prod_details.title}</h3>
            <h6>Description:</h6>
            <p>{prod_details.description}</p>
            <h6>Brand:</h6>{prod_details.brand}
            {setRating()}
          </div>
        </div>
        <hr className="line"/>
        <div className="row">
          <div className="col">
              <button className="rmvCount" onClick = {removeCountHandler}>-</button>
              <button>{cartCount}</button>
              <button className="addCount" onClick = {addCountHandler}>+</button>
          </div>
          <div className="col" style={{textAlign: "right"}}><b>Price:</b> ₹{prod_details.price}</div>
        </div>
        <hr className="line"/>
        <div className="row">
          <div className="col">SUBTOTAL:</div>
          <div className="col" style={{textAlign: "right"}}>₹{prod_details.price} x {cartCount}</div>
        </div>
        <hr className="line"/>
        <div className="row">
        <div className="col"><b>TOTAL PRICE:</b></div>
        <div className="col" style={{textAlign: "right"}}><b>₹{calcTotalPrice()}</b></div>
        <br /> <br />
        </div>
    </div>
  )
}

export default CartPage