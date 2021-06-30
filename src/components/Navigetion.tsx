import React from "react";
import {Link} from "react-router-dom";

const Navigetion = () => {
    return (
        <div className="col-lg-6">
            <nav className="header__menu">
                <ul>
                    <li className="active"><Link to="/">Home</Link></li>
                    <li>
                        <Link to="/shopingCart">
                            Shoping cart
                            <i className="fab fa-facebook-square"></i>
                        </Link>
                    </li>
                    <li><Link to="/aboutUs">About us</Link></li>
                </ul>
            </nav>
        </div>)

}

export default Navigetion
