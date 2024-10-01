import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { Footer, Header } from '../layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Skeleton from 'react-loading-skeleton';
import Marquee from "react-fast-marquee";

const Product = () => {

  const {id} = useParams();
  const [product, setProduct] = useState([]);
  const [similarProduct, setSimilarProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  // console.table(product);

  useEffect(()=>{
    const getProduct = async () => {
      setLoading(true);
      // Fetch data from API
      await fetch(`https://fakestoreapi.com/products/${id}`)
      .then(response => response.json())
      .then(data => {
          setProduct(data);
          setLoading(false);
        })
      .catch(error => console.error('Error:', error));
    };
    getProduct();

    const getSimilarProduct = async () => {
      setLoading(true);
      // Fetch data from API
      await fetch(`https://fakestoreapi.com/products/category/${product.category}`)
      .then(response => response.json())
      .then(data => {
          setSimilarProduct(data);
          setLoading(false);
        })
      .catch(error => console.error('Error:', error));
    };
    getSimilarProduct()
    /* Fetch data from Redux Store
    dispatch(readProduct(id));
    const product = useSelector(state => state.product.products.find(p => p.id === parseInt(id)));
    if(product) setProduct(product);
    setLoading(false); */
  },[]);

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
          <button className="btn btn-outline-dark my-4">Add to Cart</button>
          <NavLink className="btn btn-outline-dark mx-4">Go to Cart</NavLink>
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
        <div className="row">
          <Marquee pauseOnHover={true} pauseOnClick={true} speed={50}>
            {
              loading? <Loading /> : similarProduct.map((product, index) => (
                <div key={index} className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 my-3">
                  <div class="card text-start p-2">
                    <img class="card-img-top" src={product.image} alt={product.title} height="300"/>
                    <div class="card-body">
                      <h4 class="card-title">{product.title.substring(0,15)} ...</h4>
                      <hr />
                      <p class="lead">
                        {product.rating && product.rating.rate}
                        <FontAwesomeIcon icon={faStar} />
                        <span className='float-end'>Price: ${product.price}</span>
                      </p>
                      <NavLink>
                        <button className="btn btn-outline-dark btn-sm">Buy Now</button>
                      </NavLink>
                      <NavLink>
                        <button className="btn btn-outline-dark btn-sm float-end">Add to Cart</button>
                      </NavLink>
                    </div>
                  </div>
                </div>
              ))
            }
          </Marquee>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Product