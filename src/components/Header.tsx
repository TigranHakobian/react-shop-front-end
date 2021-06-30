import React from "react";
import CategoryMenu from "./CategoryMenu"
import {Link} from "react-router-dom";
import FruitFresh from "./FruitFresh"
import Support from "./Support"
import FreeShopingForOrder from "./FreeShopingForOrder"
import ContactsAndLangs from "./ContactsAndLangs/ContactsAndLangs"
import Search from "./Search"
import Navigetion from "./Navigetion"
import {connect} from "react-redux";

const Header = (props:any) => {
    return (
        <>
            <header className="header">
                <div className="header__top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <FreeShopingForOrder/>
                            </div>
                            <ContactsAndLangs/>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <Navigetion/>
                        <div className="col-lg-3">
                            <div className="header__cart">
                                <ul>
                                    <li><i className="fa fa-heart"/> <span>1</span></li>
                                    <li>
                                        <Link to="/shopingCart"><i className="fa fa-shopping-bag"/>
                                        <span>{props.product.AddToCart.product.length}</span>
                                    </Link></li>
                                </ul>
                                <div className="header__cart__price">item: <span>$150.00</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="humberger__open">
                        <i className="fa fa-bars"/>
                    </div>
                </div>
            </header>
            <section className="hero">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <CategoryMenu/>
                        </div>
                        <div className="col-lg-9">
                            <div className="hero__search">
                               <Search/>
                                <Support/>
                            </div>
                            <FruitFresh/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

const mapSateToProps = (state:any) => ({
    product: state
})


const Container = connect(
    mapSateToProps,
)(Header)

export default Container;


