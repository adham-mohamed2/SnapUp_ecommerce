import React, { useContext, useEffect } from 'react'
import "./details.css"
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../../store';
import Reload from "../../componant/reload/index"
import Message from "../../componant/Message_shoping/index"
function Details() {

    // the array that has data from store page
  
    const {details , setDetails , handleAddToCard , cardProduct , loader  , setLoading  , open} = useContext(GlobalContext);

    //**************************** fetch  id from url *********************************************************

    const {id} = useParams();

    //******************************* function to fetch Api when we click on product by id and return product ***********************

    useEffect(()=>{
      async function FetchDetails(){
        const res = await fetch(`https://dummyjson.com/products/${id}`)
        const data = await res.json();
        if(data){
          setDetails(data);
          setLoading(false);
        }
        
      }
      FetchDetails();
      
    },[id])

    //**************************** if data not fetch do reload until data download*************************************

    if(loader){
      return(
        <Reload/>
      )
    }

    //*************************************************************************************************************************
  
  return (
    <div className="details-page-section mb-5 py-5" style={{background:'whiteSmoke'}}>
      <div className="container">
        <div className="content-details w-100">
          <div className="row w-100">
            <div className="col-md-6 col-12 mb-4 mb-md-0">
              <div className='main-img h-100 py-3 px-2' style={{background:"#fff"}}>
                <img src={details?.thumbnail} style={{width:"100%" , height:"300px" , marginBottom:"20px"}} alt="img not found" />
                <div className="small-img d-flex align-items-center justify-content-around" style={{background:"whiteSmoke"}}>
                  {
                     details?.images?.length ? details?.images.map((item)=>(
                      <img key={Math.random()} style={{width:"100px" , height:"100px"}} src={item}  alt="img not found"/>
                    )):<Reload/>
                  }
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <h4 className='title text-capitalize fw-bold mb-5 fs-4'>{details.title}</h4>
              <div className="text mb-5">
                <p className="text-capitalize mb-2">{details.description}</p>
                <ul style={{listStyle:"none"}} className='d-flex align-items-center '>
                  <li>
                      Rating: <span>{details.rating}</span>
                  </li>
                  <li className="arrow-details"></li>
                  <li>
                      Brand: <span>{details.brand}</span>
                  </li>
                  <li className="arrow-details"></li>
                  <li>
                      Category: <span>{details.category}</span>
                  </li>
                </ul>
              </div>
              <div className="price mb-5">
                <div className="old-price mb-2">
                    <span className="me-2" style={{textDecoration:"line-through"}}>$50.00</span>
                    <span>  (Inclusive of all taxes)</span>
                </div>
                <div className="new-price">
                  <span className='fw-bold fs-4 me-2' style={{color:"orangered"}}>{"$" + details.price}</span>
                  <span style={{padding:"5px 8px" , background:"orangered" , color:"#fff"}} className="discount rounded-pill">4% OFF</span>
                </div>
              </div>
              <div className="button">
                <button disabled={cardProduct.findIndex(item=> item.id === details.id) > -1} onClick={()=>handleAddToCard(details)} className='btn btn-md text-capitalize me-3 add-card'>add to card</button>
                <button className='btn btn-md text-capitalize buy-now'>buy now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* when we click on button add to card show the message  */}
      {open === true ? <Message/>: null} 
    </div>
  )
}

export default Details