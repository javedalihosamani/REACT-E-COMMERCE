import React from 'react'
import Header from './../layout/Header';
import Footer from './../layout/Footer';
import { useSelector } from 'react-redux';
import EmptyCart from './EmptyCart';
import ShowCheckout from './ShowCheckout';

const Checkout = () => {
    const storeData = useSelector(store => store.handleCart);
  return (
    <>
        <Header/>
        <div className="container my-3 py-3">
            <div className="row">
                <div className="col">
                    <h5 className="display-5 text-center">Checkout</h5>
                    <hr />
                </div>
            </div>
        </div>
        {storeData.length > 0 ? <ShowCheckout/> : <EmptyCart/>}
        <Footer/>
    </>
  )
}

export default Checkout