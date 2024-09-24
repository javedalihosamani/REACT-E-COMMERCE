import React, { Fragment, useEffect, useState } from 'react'

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
      </div>
    </Fragment>
  )
}

export default Product