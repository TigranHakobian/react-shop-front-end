import React from "react";

const priceFilter = () =>{
    return(
        <div className="sidebar__item">
            <h4>Price</h4>
            <div className="price-range-wrap">
                <input
                    type={"text"}
                    />
            </div>
        </div>
    )
}

export default priceFilter
