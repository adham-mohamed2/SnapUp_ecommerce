import  { useContext } from 'react'
import React from 'react'
import { Link } from 'react-router-dom'
import "./slidex.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXmark } from '@fortawesome/free-solid-svg-icons'
import { GlobalContext } from '../../store'
function Sidebar() {
const {category , openSidebar , setOpenSildebar} = useContext(GlobalContext);
 function handleCloseSlide(){
    setOpenSildebar(!openSidebar)
 }
  return (
    <div className={openSidebar? "activeslider" : "sildebar"} >
        <div className="sidebar-header mb-3 d-flex align-items-center justify-content-between">
            <h4 className='fw-bold text-capitalize fs-4' style={{color:"#000"}}>allcategoryes</h4>
            <span onClick={handleCloseSlide} className="clodesidebar" style={{cursor:"pointer"}}>
                <FontAwesomeIcon icon={faXmark} />
            </span>
        </div>
        <div className="sidebar-content">
            <ul className='d-flex flex-column gap-2'>
                {
                    category.length > 0 ? category.map((category)=>(
                        <li className='py-2' style={{borderBottom:"1px solid #ccc"}}><Link className='text-capitalize fw-bold' style={{textDecoration:"none" , color:"#000"}} to={`/category/${category}`}>{category.replace("-" , "")}</Link></li>
                    )) : null
                }
            </ul>
        </div>
    </div>
  )
}

export default Sidebar