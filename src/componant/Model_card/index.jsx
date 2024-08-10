import React, { useContext } from 'react'
import NoProductLogo from "../../image/assits/shopping_cart.png"
import { GlobalContext } from '../../store'
function ModelShoping() {
    const {handleShopinHome} = useContext(GlobalContext)
  return (
    <div style={{width:"100%" , height:"calc(60vh - 12px)"}} className="d-flex flex-column align-items-center justify-content-center">
          <img style={{width:"200px"  , height:"200px"}} src={NoProductLogo} alt="" />
          <p className='text-capitalize my-3'>your shoping card is empty</p>
          <button onClick={handleShopinHome} style={{width:"200px", background:"orangered" , color:"#fff"}} className=' btn-shopping-card btn btn-lg text-capitalize'>go to shopping</button>
    </div>
  )
}

export default ModelShoping