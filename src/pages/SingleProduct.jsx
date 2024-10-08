import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { Footer, Header } from '../layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Skeleton from 'react-loading-skeleton';
import Marquee from "react-fast-marquee";
import axios from 'axios';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/action/ProductAction';

const Product = () => {

  const {id} = useParams();
  const [product, setProduct] = useState([]);
  const [similarProduct, setSimilarProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  //console.table(similarProduct);

  const dispatch = useDispatch();

  // User Defined Method
  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(()=>{
    const getProduct = async () => {
      setLoading(true);
      // Fetch data from API
      await axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(response =>{
        setProduct(response.data);
        setLoading(false);
      }).catch(error => toast.error(error.message))

      await axios.get(`https://fakestoreapi.com/products/category/${product.category}`)
       .then(res=>{
        // console.log(res.data);
        setSimilarProduct(res.data);
        setLoading(false); 
      }).catch(error => toast.error(error.message))
    };
    getProduct();

    /* Fetch data from Redux Store
    dispatch(readProduct(id));
    const product = useSelector(state => state.product.products.find(p => p.id === parseInt(id)));
    if(product) setProduct(product);
    setLoading(false); */

  },[id, product.category]);

  // User Defined  Method
  const ShowProduct = () => {
    return(
      <>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 my-3">
          <img src={product.image} className="img-fluid" alt={product.title} />
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 my-3">
          <h4 className='text-uppercase text-muted'>{product.category}</h4>
          <h1 className='display-5'>{product.title}</h1>
          <p className="lead">
            {product.rating && product.rating.rate}
            <FontAwesomeIcon icon={faStar} />
          </p>
          <h4 className='display-6 my-4'>Price: ${product.price}</h4>
          <p className='lead'>{product.description}</p>
          <button className="btn btn-outline-dark my-4" onClick={()=>addProduct(product)}>Add to Cart</button>
          <NavLink to={`/cart`}>
            <button className="btn btn-outline-dark mx-4">Go to Cart</button>
          </NavLink>
          {loading && <div>Loading...</div>}
        </div>
      </>
    )
  } 

  // Loading Method
  const Loading = () => {
    return (
      <>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 my-3">
          <Skeleton height={10} count={15}/>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 my-3">
          <Skeleton height={10} count={15}/>
        </div>
      </>
    )
  }

  // Show Similar Product
  const ShowSimilarProduct = () => {
    return(
      <>
        <div className="d-flex">
        {
          similarProduct.map((product, index) => 
          {
            return(
              <div key={index} className="card p-2 m-2">
                <img className="card-img-top" src={product.image} alt={product.title} height={100} width={100}/>
                <div className="card-body">
                  <h4 className="card-title">{product.title.substring(0,15)} ...</h4>
                  <hr />
                  <p className="lead">
                    {product.rating && product.rating.rate}
                    <FontAwesomeIcon icon={faStar} />
                    <span className='float-end'>Price: ${product.price}</span>
                  </p>
                  <NavLink to={`/product/${product.id}`}>
                    <button className="btn btn-outline-dark btn-sm">Buy Now</button>
                  </NavLink>
                  <NavLink>
                    <button className="btn btn-outline-dark btn-sm float-end" onClick={()=> addProduct(product)}>Add to Cart</button>
                  </NavLink>
                </div>
              </div>)
          }) 
        }
        </div>
      </>
    )
  }

  return (
    <>
      <Header/>
      <div className="container my-3 py-3">
        <div className="row">
          {loading ? <Loading /> : <ShowProduct/>}
        </div>
      </div>
      <div className="container my-3 py-3">
        <div className="row">
          <div className="col-12">
            <h5 className="display-5 text-center">Related Products</h5>
            <hr />
          </div>
        </div>
        <div className="row my-3 py-3">
          <Marquee pauseOnHover={true} pauseOnClick={true} speed={50}>
            {
              loading ? <Loading /> : <ShowSimilarProduct/>
            }
          </Marquee>      
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Product