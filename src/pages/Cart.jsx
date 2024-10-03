import React from 'react'
import Header from './../layout/Header';
import Footer from './../layout/Footer';

const Cart = () => {
  return (
    <>
        <Header/>
        <div className="container my-3 py-3">
            <div className="row">
                <div className="col">
                    <h5 className="display-5 text-center">Cart</h5>
                    <hr />
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default Cart