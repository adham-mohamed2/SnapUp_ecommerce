
import React from 'react'
import { Link } from 'react-router-dom'
import "./footer.css"
function Footer() {
  return (
    <footer>
        <div className="container h-100 ">
            <div className="content h-100 w-100 d-flex gap-3 flex-column align-items-center justify-content-center">
                <ul className='d-flex align-items-center top-link'>
                    <li>
                        <Link to="/" className="text-white text-capitalize fw-bold link-footer">privacy poucy</Link>
                    </li>
                    <li className="arrow"></li>
                    <li>
                        <Link to="/" className="text-white text-capitalize fw-bold link-footer">term of services</Link>
                    </li>
                    <li className="arrow"></li>
                    <li>
                        <Link to="/" className="text-white text-capitalize fw-bold link-footer">about sanp<span>up</span></Link>
                    </li>
                </ul>    
                <div className="copy-right">
                    <h4 className='text-white text-capitalize fw-bold fs-4'>@ 2022 snap<span>up</span>. all right reserved</h4>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer