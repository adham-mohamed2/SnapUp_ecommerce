import React, { useContext } from 'react'
import { GlobalContext } from '../../store'
import "./cardtitle.css"
function CartTitle({product}) {
  const {handleRemoveItem , handleAddToCard} = useContext(GlobalContext)
  return (
    
      <>
        <div className="cart-item my-3 w-100 d-flex justify-content-between align-items-center">
          <div className='main-img d-flex gap-3' >
            <img src={product?.thumbnail} className='rounded' style={{width:"90px" , height:"90px" , backgroundColor:"#ccc"}}  alt="img not found"/>
            <div className='title-button'>
              <h3 className='title fw-bold fs-5 text-capitalize mb-2'>{product?.title}</h3>
              <button onClick={()=>handleRemoveItem(product , true)} className='d-block btn btn-dark text-white btn-md text-capitalize' style={{width:"150px"}}>remove</button>
            </div>
          </div>
          <div className='section-price d-flex flex-column'>
            <p className='price fw-bold'>{product?.totalPrice.toFixed(2)}</p>
            <p className='mb-3 fw-bold text-capitalize'>quantity : {product.quantityes}</p>
            <div className='increament-and-decrement-button'>
              <button onClick={()=>handleRemoveItem(product , false)} disabled={product?.quantityes === 1} className='decrement  btn btn-outline btn-outline-dark btn-md rounded' style={{width:'40px' , }}>-</button>
              <button onClick={()=>handleAddToCard(product)} className='increament  btn btn-outline btn-outline-dark btn-md rounded' style={{width:'40px'}}>+</button>
            </div>
          </div>
        </div>
      <hr className='w-100'/>
      </>
  )
}

export default CartTitle