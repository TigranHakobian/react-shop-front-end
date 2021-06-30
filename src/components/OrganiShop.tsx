import React from "react";
import {Link} from "react-router-dom";

const OrganiShop = ()=>{
    return(
        <div className="container">
            <div className="row organi_shop">
                <div className="col-lg-12 text-center">
                    <div className="breadcrumb__text">
                        <h2 className="">Organi Shop</h2>
                        <div className="breadcrumb__option">
                            <Link to="/home">Home</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrganiShop
