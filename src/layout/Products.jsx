import React, { Fragment, useEffect, useState } from 'react'
import ProductsCard from './ProductsCard';

const Product = () => {
  const [data, setData] = useState([]);
  let componentMounted = true;

  console.table(data);
  // Fetch data from API
  useEffect(() => { 
    const getProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products/');
      if(componentMounted){
        setData(await response.json());
      }
    }
    getProducts();
  },[]);

  return (
    <Fragment>
      <div className="container my-3 py-3">
        <div className="row">
          <div className="col">
            <h5 className="display-5 text-center">Latest Products</h5>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="text-center">
            <button className="btn btn-outline-dark m-2 btn-sm">All</button>
            <button className="btn btn-outline-dark m-2 btn-sm">Men's Clothing</button>
            <button className="btn btn-outline-dark m-2 btn-sm">Women's Clothing</button>
            <button className="btn btn-outline-dark m-2 btn-sm">Jewelry</button>
            <button className="btn btn-outline-dark m-2 btn-sm">Electronics</button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {
            data.map(product => <ProductsCard key={product.id} {...product} />)
          }
        </div>
      </div>
      
    </Fragment>
  )
}

export default Product