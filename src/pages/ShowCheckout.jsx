import React from 'react'
import { useSelector } from 'react-redux';

const ShowCheckout = () => {

    const storeData = useSelector(store => store.handleCart);
    let subTotal = 0;
    storeData.map(item => subTotal += item.price * item.quantity);
    //console.log(subTotal);

    let totalItems = 0;
    storeData.map(item => totalItems += item.quantity);
    //console.log(totalItems);  

    let shipment = 30;
  return (
    <>
        <div className="container my-3">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                    <div className="card">
                        <div className="card-header py-2">
                            <h3>Billing address</h3>
                        </div>
                        <div className="card-body">
                            <form autoComplete='off'>
                                <div className="row">
                                    <div className="col">
                                        <div className="form-group my-3">
                                            <label for="name">First Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="firstName"
                                                name="firstName"
                                                placeholder="John"
                                            />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group my-3">
                                            <label for="name">Last Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="lastName"
                                                name="lastName"
                                                placeholder="Doe"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group my-3">
                                    <label for="email">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        placeholder="johndoe@example.com"
                                    />
                                </div>
                                <div className="form-group my-3">  
                                    <label for="address">Address</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="address"
                                        name="address"
                                        placeholder="123 Main St"
                                    />
                                </div>

                                <div className="row">
                                    <div className="col">
                                        <div className="form-group my-3">
                                            <label for="city">City</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="city"
                                                name="city"
                                                placeholder="Bengaluru"
                                            />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group my-3">
                                            <label for="zipCode">Zip Code</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="zipCode"
                                                name="zipCode"
                                                placeholder="564321"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col">
                                        <div className="form-group my-3">
                                            <label for="state">State</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="state"
                                                name="state"
                                                placeholder="Karnataka"
                                            />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group my-3">
                                            <label htmlFor="country">Country</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="country"
                                                name="country"
                                                placeholder="India"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <hr />
                            <h4>Payment</h4>

                            <form autoComplete='off'>
                                <div className="row">
                                    <div className="col">
                                        <div className="form-group my-3">
                                            <label for="cc-name" className="form-label">
                                                Name on card
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="cc-name"
                                                placeholder=""
                                                required
                                            />
                                            <small className="text-muted">
                                                Full name as displayed on card
                                            </small>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group my-3">
                                            <label for="cc-number" className="form-label">
                                                Credit card number
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="cc-number"
                                                placeholder=""
                                                required
                                            />
                                            <small className="text-muted">
                                                Last four digits only
                                            </small>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col">
                                        <div className="form-group my-3">
                                            <label for="cc-expiration" className="form-label">
                                                Expiration
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="cc-expiration"
                                                placeholder=""
                                                required
                                            />
                                            <small className="text-muted">
                                                MM/YY
                                            </small>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group my-3">
                                            <label for="cc-cvv" className="form-label">
                                                CVV
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="cc-cvv"
                                                placeholder=""
                                                required
                                            />
                                            <small className="text-muted">
                                                Three digits on the back of the card
                                            </small>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group my-3">
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="same-address"
                                            name="same-address"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="same-address"
                                        >
                                            Shipping address is the same as billing address
                                        </label>
                                    </div>
                                </div>

                                <div className="form-group my-3">
                                    <button className="btn btn-outline-dark w-100" type="submit">
                                        Place Order
                                    </button>
                                </div>
                            </form>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ShowCheckout