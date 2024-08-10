import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import "./slidebar_product.css"
import { GlobalContext } from '../../store';
function SlidebarProduct() {
    const navigate = useNavigate();
    const {cardProduct} = useContext(GlobalContext)
  return (
    <div class="SlidebarProduct">
        <div className="title text-center">
            <h5 className='text-capitalize fw-bold fs-4'>recently added product</h5>
        </div>
        <div className="content_slidebar_product">
            {
                cardProduct.length > 0 ? cardProduct?.map((product)=>(
                    <div className="card mb-2" key={Math.random()} style={{display:"grid" , gridTemplateColumns:"75% 20%"  , alignItems:"center" , justifyContent:"space-between"}}>
                        <div className="main-img-title d-flex align-items-center gap-2">
                            <img style={{width:"80px" , height:"80px"}} src={product.thumbnail} alt="img not found" />
                            <div className="title">
                                <h6 className='text-capitalize'>{product.title}</h6>
                            </div>
                        </div>
                        <div className="price">
                            <span style={{color:"orangered"}}>{"$" + product.price}</span>
                        </div>
                    </div>
                )) :null
            }
        </div>
        <div className="button text-end">
            <button onClick={navigate("/card")} className='btn shopping-card btn-md'>view shopping card</button>
        </div>
    </div>
  )
}

export default SlidebarProduct