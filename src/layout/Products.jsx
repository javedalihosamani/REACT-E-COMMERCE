import React, { Fragment, useEffect, useState } from 'react'
import ProductsCard from './ProductsCard';
import Loading from './Loading';
import { useDispatch, useSelector } from 'react-redux';
import { readAllProduct } from '../redux/action/ProductAction';

const Product = () => {
  const [data, setData] = useState([]);
   /* console.table(data); */
  const [filter, setFilter] = useState(data);

  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  // Fetch data from API
  useEffect(() => { 
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch('https://fakestoreapi.com/products/');
      if(componentMounted){
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }
      return () => {
        componentMounted = false;
      }
    }
    getProducts();
  },[]);

  // REDUX-CODE FETCH ALL PRODUCTS
/*   const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(()=>{setLoading(true)}, 10000);
    dispatch(readAllProduct());
    if(componentMounted){
      setData(apiData);
      setFilter(apiData);
      setLoading(false);
    }
    return () => {
      componentMounted = false;
    }
  }, [ dispatch]);

  const apiData = useSelector(product => product.ECOMMERCE_PRODUCTS); */

  // Filter Products
  const filterProducts = (category) => {
    const updateProduct = data.filter((product) => product.category === category);
    setFilter(updateProduct);
  }

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
            <button className="btn btn-outline-dark m-2 btn-sm" onClick={()=> setFilter(data)}>All</button>
            <button className="btn btn-outline-dark m-2 btn-sm" onClick={()=> filterProducts("men's clothing")}>Men's Clothing</button>
            <button className="btn btn-outline-dark m-2 btn-sm" onClick={()=> filterProducts("women's clothing")}>Women's Clothing</button>
            <button className="btn btn-outline-dark m-2 btn-sm" onClick={()=> filterProducts("jewelery")}>Jewelry</button>
            <button className="btn btn-outline-dark m-2 btn-sm" onClick={()=> filterProducts("electronics")}>Electronics</button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {
            filter.map(product => {return(
                loading ? <Loading/> : <ProductsCard key={product.id} {...product} />
            )})
          }
        </div>
      </div>
      
    </Fragment>
  )
}

export default Product