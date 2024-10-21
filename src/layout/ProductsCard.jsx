import { faCartShopping, faMoneyCheckDollar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment, useContext } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from 'react-router-dom';
import { addCart } from "../redux/action/ProductAction";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

const ProductsCard = (props) => {
    const {id, image, title, description, price} = props;
    
    const dispatch = useDispatch();

    const context = useContext(AuthContext);
    const addToCart = (product) => {
        console.log(product);
        if(context.loginStatus === false) {
            toast.error(`Please login to add product to cart`);
        } else {
            dispatch(addCart(product));
        }
    };

 return(
    <Fragment>
        <NavLink to={`/product/${id}`} className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 my-3 text-decoration-none">
            <div className="card p-3 bg-light shadow">
                <img className="card-img-top" src={image} alt="Title" height={200}/>
                <div className="card-body text-center">
                    <h4 className="card-title bg-white p-3 border-radius">{title.substring(0, 12)} ...</h4>
                    <p className="card-text">{description.substring(0 ,60)} ...</p>
                        
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item lead">$ {price}</li>
                    </ul>
                </div>
                <div className="card-footer">
                    <NavLink to={`/product/${id}`}>
                        <FontAwesomeIcon icon={faMoneyCheckDollar} className="btn btn-outline-dark btn-lg"/>
                    </NavLink>
                    <NavLink className="float-end" onClick={()=>{addToCart(props)}}>
                        <FontAwesomeIcon icon={faCartShopping}  className="btn btn-outline-dark btn-lg"/>
                    </NavLink>
                </div>
            </div>            
        </NavLink>
    </Fragment>
 )
}
export default ProductsCard;