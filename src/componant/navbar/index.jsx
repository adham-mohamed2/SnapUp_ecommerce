import React, { useContext } from 'react'
import "./nvbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars , faBagShopping , faMagnifyingGlass , faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../store'
import { useNavigate } from 'react-router-dom'
function Navbar() {

    const {LimitCategory  , setOpenSildebar , searchValue , setSearchValue , cardProduct } = useContext(GlobalContext);
    
    const navigate = useNavigate();

    function handleOpenSildebar(){
        setOpenSildebar(true);
    }

    function handleChangeInput(e){
        setSearchValue(e.target.value);
    }
    function handleClickInput(){
        setSearchValue("");
    }

    function handleOpenCard(){
        navigate("/card")
    }
    
  return (
    <div className="bottom-header-content d-flex align-items-center justify-content-between">
        <div className="left-section d-flex align-items-center">
            <span onClick={handleOpenSildebar} className='me-2 text-white fs-4' style={{cursor:"pointer"}}><FontAwesomeIcon icon={faBars} /></span>
            <span><FontAwesomeIcon className='text-white me-2 fs-4' icon={faBagShopping} /></span>
            <Link style={{textDecoration:"none"}} to="/" className=" title-header text-capitalize text-white fw-bold  fs-4">snap<span className='fw-normal text-capitalize'>Up.</span></Link>
        </div>
        <div className="middel-section d-flex flex-column gap-2">
            <form>
                <input value={searchValue} onChange={handleChangeInput} className='search-input' type="text" />
                <Link onClick={handleClickInput} className='search-icon' to={`/search/${searchValue}`}><FontAwesomeIcon icon={faMagnifyingGlass} /></Link>
            </form>
            <div className="category d-flex align-items-center">
                {
                    LimitCategory.length > 0 ? LimitCategory.map((category)=>(
                        <Link className='text-white me-3 text-capitalize fw-bold category_link' style={{textDecoration:"none"}} to={`/category/${category}`}>{category.replace("-" , "")}</Link>
                    )) : null
                }
            </div>
        </div>
        <div className="right-section">
            <span onClick={handleOpenCard} style={{cursor:"pointer"}} className='position-relative pt-3'>
                <FontAwesomeIcon className='fs-4 text-white' icon={faCartShopping} />
                <span className='count-card position-absolute bg-white rounded-circle text-center '>{cardProduct.length}</span>
            </span>
        </div>
    </div>
  )
}

export default Navbar