import React, {useEffect, useState} from "react";
import TableShopingCart from "./TableShopingCart";
import Wrapper from "../Wrapper"
import {addProduct} from "../../store/actions/toCart";


const ShopingCart = () => {
   const [item, setItem] = useState('hello')
    useEffect(() => {
            addProduct(item);
    },)
    return (
        <Wrapper>
            <section className="shoping-cart spad">
                <div className="container">
                    <TableShopingCart/>
                    <div className="row">
                        <div className="col-lg-12">

                        </div>
                        <div className="col-lg-6">
                            <div className="shoping__continue">
                                <div className="shoping__discount">
                                    <h5>Discount Codes</h5>
                                    <form action="#">
                                        <input type="text" placeholder="Enter your coupon code"/>
                                        <button type="submit" className="site-btn">APPLY COUPON</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="shoping__checkout">
                                <h5>Cart Total</h5>
                                <ul>
                                    <li>Subtotal <span>$454.98</span></li>
                                    <li>Total <span>$454.98</span></li>
                                </ul>
                                <a href="#" className="primary-btn">PROCEED TO CHECKOUT</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Wrapper>
    )
}

export default ShopingCart;




