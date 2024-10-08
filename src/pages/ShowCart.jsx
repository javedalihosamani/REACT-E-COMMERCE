import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addCart, removeCart } from '../redux/action/ProductAction';
import { NavLink } from 'react-router-dom';

const ShowCart = () => {
    
    const storeData = useSelector(store => store.handleCart);
    let subTotal = 0;
    storeData.map(item => subTotal += item.price * item.quantity);
    //console.log(subTotal);

    let totalItems = 0;
    storeData.map(item => totalItems += item.quantity);
    //console.log(totalItems);  

    let shipment = 30;
    
    const dispatch = useDispatch();
    const addItem = (product) => {
        dispatch(addCart(product));
    };
    const removeItem = (product) => {
        dispatch(removeCart(product));
    };

  return (
    <>
        <div className="container my-3">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                    <div className="card">
                        <div className="card-header py-2">
                            <h3>Item List</h3>
                        </div>
                        <div className="card-body">
                            <table className="table table-striped table-responsive">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Image</th>
                                        <th scope="col">Product</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {storeData.map((item, index) => (
                                        <tr key={index} className='table-responsive'>
                                            <th scope="row">{index + 1}</th>
                                            <td>
                                                <img src={item.image} alt={item.title} height={'100px'} width={100}/>
                                            </td>
                                            <td>{item.title.substring(0 ,10)} ...</td>
                                            <td>
                                                <FontAwesomeIcon icon={faPlus} style={{cursor:'pointer'}} onClick={() => {addItem(item);}}/> 
                                                    {item.quantity} 
                                                <FontAwesomeIcon icon={faMinus} style={{cursor:'pointer'}} onClick={() => {removeItem(item);}}/></td>
                                            <td>{item.price * item.quantity}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <div className="card">
                        <div className="card-header py-2">
                            <h3>Order Summary</h3>
                        </div>
                        <div className="card-body">
                            <div className="lead">
                                <p>Total Items: {totalItems}</p>
                                <p>Subtotal: ${Math.round(subTotal)}</p>
                                <p>Shipment : ${shipment}</p>
                                <hr />
                                <p><b>Total Amount: ${Math.round(subTotal + shipment)}</b></p>
                            </div>
                            <NavLink to={`/checkout`}>
                                <button className='btn btn-outline-dark w-100'>Go to Checkout</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ShowCart