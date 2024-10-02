import React from 'react'
import Header from './../layout/Header';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faAddressCard, faHouse } from '@fortawesome/free-solid-svg-icons';
import { faProductHunt } from '@fortawesome/free-brands-svg-icons';

const PageNotFound = () => {
  return (
    <>
        <div className="container my-5">
            <div className="row">
                <div className="col-12 text-center bg-light py-5">
                    <h1 className="display-1">404</h1>
                    <h2 className="display-4">Page Not Found</h2>               
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <ol class="breadcrumb justify-content-center">
                        <li class="breadcrumb-item">
                            <NavLink to={`/`} title='Click to Home Page'>
                                <FontAwesomeIcon icon={faHouse} className='fa-2x'/>
                            </NavLink>
                        </li>
                        <li class="breadcrumb-item">
                            <NavLink to={`/about`} title='Click to About Page'>
                                <FontAwesomeIcon icon={faAddressCard} className='fa-2x'/>
                            </NavLink>
                        </li>
                        <li class="breadcrumb-item">
                            <NavLink to={`/contact`} title='Click to Contact Page'>
                                <FontAwesomeIcon icon={faAddressBook} className='fa-2x'/>
                            </NavLink>
                        </li>
                        <li class="breadcrumb-item">
                            <NavLink to={`/product`} title='Click to Products Page'>
                                <FontAwesomeIcon icon={faProductHunt} className='fa-2x'/>
                            </NavLink>
                        </li>
                    </ol> 
                </div>
            </div>
        </div>
    </>
  )
}

export default PageNotFound