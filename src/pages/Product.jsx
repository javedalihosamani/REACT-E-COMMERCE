import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Footer, Header } from '../layout';
import { useDispatch, useSelector } from 'react-redux';
import { readAllProduct } from '../redux/action/ProductAction';

const Product = () => {

  const {id} = useParams();
  const [product, setProduct] = useState([]);
  
  const dispatch = useDispatch();

  const apiData = useSelector(product => product.ECOMMERCE_PRODUCTS);

  useEffect(() => {
    dispatch(readAllProduct());
      setProduct(apiData);
  }, [apiData, dispatch]);

  // User Defined  Method
  const ShowProduct = () => {
    return(
      <>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 my-3">
          <img src={product.image} className="img-fluid" alt="" />
        </div>
      </>
    )
  } 

  return (
    <>
      <Header/>
      <div className="container">
        <div className="row">
          <ShowProduct/>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Product