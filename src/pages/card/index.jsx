import React, { useContext  } from 'react'
import { GlobalContext } from '../../store'
import CartTitle from "../../componant/cardPage-title/index"
import "./card.css"
import ModelShoping from "../../componant/Model_card/index"
function CardPage() {
    
    const {cardProduct , handleShopinHome} = useContext(GlobalContext);
    
    
    if(cardProduct.length === 0){
      return(
        <ModelShoping/>
      )
    }
  return (
  <div className='main-section  py-4'>
      <div className="container">
        <h1 className='header-section text-center fw-bold fs-3 mb-5 text-capitalize '>my cart page</h1>
        <div className='contentCardPage'>
          <div className='left-section'>
            {cardProduct?.length >0 ?
              cardProduct.map(item => <CartTitle product={item}/>)
              :<h1 className='fw-bold fs-3 text-capitalize'>no product in cart</h1>
            }
          </div>
          <div className='right-section'>
            <div className='content p-3 rounded' style={{backgroundColor:"whitesmoke" , width:"300px" , height:"fit-content"}}>
              <h2 className='header-right-section fw-bold fs-4 text-capitalize pb-2 mb-3' style={{borderBottom:"1px solid #000"}}>order summary</h2>
              <p className='total-price text-capitalize mb-3'>total : <span>$ {cardProduct.reduce((acc , curr)=> acc + curr.totalPrice , 0).toFixed(2)}</span></p>
              <div className='button-right-section'>
                <button className='btn btn-md btn-dark text-white text-capitalize me-2'>checkout</button>
                <button onClick={handleShopinHome}  className='btn btn-md btn-dark text-white text-capitalize'>continue shoping</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
  )
}

export default CardPage