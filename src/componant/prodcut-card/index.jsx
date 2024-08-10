import React from 'react'
import { Link } from 'react-router-dom'
function Card({product}) {
    
  return (
    <Link style={{textDecoration:'none' , color:"#000"}} to={`/details/${product.id}`}>
      <div className="card">
        <img src={product.images[0]} style={{height:"336px"}}  alt="img not found" />
        <div className="card-body text-center">
            <div className="card-brand fw-bold text-capitalize"><span className='fw-normal'>Brand : </span>{product.brand}</div>
            <div className="card-title fw-bold text-capitalize">{product.title}</div>
            <div className="price w-100 d-flex align-items-center justify-content-around">
                <span className="old-price" style={{textDecoration:"line-through"}}>$2001</span>
                <span className="new-price pb-2 fw-bold" style={{borderBottom:"2px solid rgb(255, 68, 0)"}}>{"$" + product.price}</span>
                <span className="descount-price" style={{textDecoration:"line-through"}}>$2001</span>
            </div>
        </div>
    </div>
    </Link>
  )
}

export default Card