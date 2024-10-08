import React from 'react'
import { NavLink } from 'react-router-dom';

const EmptyCart = () => {
  return (
    <>
        <div className="container my-3">
            <div className="row">
                <div className="col text-center">
                    <h5 className="display-5">Your Cart is Empty..!</h5>
                    <NavLink to={`/`}>
                        <button className='btn btn-outline-dark'>Continue Shopping</button>
                    </NavLink>
                </div>
            </div>
        </div>
    </>
  )
}

export default EmptyCart