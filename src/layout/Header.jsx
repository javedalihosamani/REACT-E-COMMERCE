import { faCartShopping, faRightToBracket, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Header = () => {
    const storeLength = useSelector(item => item.handleCart);
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light shadow sticky-top'>
        <div className="container">
            <NavLink to={`/`} className="navbar-brand fw-bold">REACT E-COMMERCE</NavLink>
            
            <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="menu">
                <ul className="navbar-nav m-auto my-2 text-center">
                    <li className="nav-item">
                        <NavLink to={`/`} className="nav-link">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={`/product`} className="nav-link">Products</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={`/about`} className="nav-link">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={`/contact`} className="nav-link">Contact</NavLink>
                    </li>
                </ul>
                <div className="navbar-nav ms-auto my-2 text-center">
                    <NavLink to={`/login`}> 
                        <button className="btn btn-outline-dark m-2">
                            <FontAwesomeIcon icon={faRightToBracket} />
                            &nbsp;Login
                        </button>                        
                    </NavLink>
                    <NavLink to={`/register`}>
                        <button className="btn btn-outline-dark m-2">
                            <FontAwesomeIcon icon={faUserPlus} />
                            &nbsp;Register
                        </button>
                    </NavLink>
                    <NavLink to={`/cart`}>
                        <button className="btn btn-outline-dark m-2">
                            <FontAwesomeIcon icon={faCartShopping} />
                            &nbsp;Cart ({storeLength.length})
                        </button>
                    </NavLink>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Header