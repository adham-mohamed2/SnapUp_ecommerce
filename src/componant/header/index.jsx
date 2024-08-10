import React  from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareInstagram , faFacebook  } from '@fortawesome/free-brands-svg-icons'
import "./header.css"
import Navbar from "../navbar/index"
import { Link } from 'react-router-dom'
// import SlidebarProduct from "../slidebar_shoping/index"
// import { GlobalContext } from '../../store'

function Header() {
    // const {openCard} = useContext(GlobalContext)
  return (
    <header>
        <div className="top-header">
            <div className="container  py-2">
                <div className="top-header-content d-flex align-items-center justify-content-between w-100">
                    <div className="left-section">
                        <ul className='d-flex align-items-center'>
                            <li>
                                <Link className='text-capitalize  text-white text-decoration-none' to="/">saller  center</Link>
                            </li>
                            <li className="arrow"></li>
                            <li>
                                <Link to="/download" className='text-capitalize  text-white text-decoration-none'>download</Link>
                            </li>
                            <li className="arrow"></li>
                            <li>
                                <span className='text-capitalize  text-white me-2'>
                                    follow us on
                                </span>
                            </li>
                            <li className='me-2'> 
                                <a className='text-white' href="https://facebook.com"><FontAwesomeIcon icon={faFacebook} /></a>
                            </li>
                            <li className='me-2'>
                                <a className='text-white' href="https://instagram.com"><FontAwesomeIcon icon={faSquareInstagram} /></a>
                            </li>
                        </ul>
                    </div>
                    <div className="right-section">
                        <ul className='d-flex align-items-center'>
                            <li>
                                <Link className='text-capitalize  text-white text-decoration-none' to="/">
                                    <span className='me-2 question'>?</span>
                                    support
                                </Link>
                            </li>
                            <li className="arrow"></li>
                            <li>
                                <Link className='text-capitalize  text-white text-decoration-none' to="register">register</Link>
                            </li>
                            <li className="arrow"></li>
                            <li>
                                <Link className='text-capitalize  text-white text-decoration-none' to="login">login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="bottom-header">
            <div className="container py-2">
                <Navbar/>
            </div>
        </div>
        {/* <div className={openCard ? `activeSlidebarProduct`:`SlidebarProduct`}>
            <SlidebarProduct/>
        </div> */}
    </header>
  )
}

export default Header