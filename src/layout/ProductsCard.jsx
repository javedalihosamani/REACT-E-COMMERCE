import { faCartShopping, faMoneyCheckDollar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment } from "react";
import { NavLink } from 'react-router-dom';

const ProductsCard = (props) => {
    const {id, image, title, description, price} = props;
 return(
    <Fragment>
        <NavLink to={`/product/${id}`} className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 my-3">
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
                    <NavLink className="float-end">
                        <FontAwesomeIcon icon={faCartShopping}  className="btn btn-outline-dark btn-lg"/>
                    </NavLink>
                </div>
            </div>            
        </NavLink>
    </Fragment>
 )
}
export default ProductsCard;