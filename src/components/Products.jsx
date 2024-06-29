import { createContext, useContext, useState } from "react"
import { ProductContext } from "../App"
import CartPage from "./CartPage"
export const ProdCartContext = createContext()
const Products = () => {
    // const [selectedProduct,setSelectedProduct] = useState("")
    const [productId, setProductId] = useState(0)

    const {product_data} = useContext(ProductContext)

    const openCartPage = (productId) => {
        console.log("Inside cart page",productId)
        setProductId(productId)
    }

  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    {/* <div className="col-md-12"> */}
                    {product_data.map(product => {
                        {console.log(product,"-------",productId)}
                        if(productId==0){
                            return(
                            <div key={product.id} className="card" style={{margin:"10px",backgroundColor:'white',borderRadius:"5px 5px", boxShadow:"0px,3px,5px,6px"}}>
                            <img className="card-img-top" src="../prod_1.png" alt="testimg" style={{marginTop:"5px",borderRadius:"5px 5px" }}/>
                            <div className="card-body p-4">
                            <div className="text-center">
                            <h5 className="fw-bolder">{product.title}</h5>
                            <p className="card-text">Price: ₹{product.price}</p>
                            </div>
                            </div>
                            <div className="badge text-black position-absolute" 
                            style={{top: "0.5rem", right: "2rem", backgroundColor:"pink"}}>
                                {product.discountPercentage}%
                            </div>
                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center">
                        <button className="btn btn-outline-dark mt-auto"
                        onClick={()=>openCartPage(product.id)}>CART</button></div>
                        </div>
                        </div>
                     )
                    }
                    else{
                        <ProdCartContext.Provider value={{productId}}>
                        <CartPage />
                        </ProdCartContext.Provider>
                    }
                        })
                        }
                        
                        {/* </div> */}
                        </div>
                        </div>
                        </section>
    </div>
  )
}

export default Products