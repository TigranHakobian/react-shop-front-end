import React, {useEffect, useState} from "react";
import Wrapper from "../Wrapper"
import CategoryFilter from "./Filters/CategoryFilter"
import PriceFilter from "./Filters/PriceFilter"
import ColorsFilter from "./Filters/ColorsFIlter"
import TopFilter from "./Filters/TopFilter"
import PopularSizeFilter from "./Filters/PopularSizeFilter"
import Products from "./Products"
import OrganiShop from "../OrganiShop"
import {actionsProducts} from "../../store/actions/products";
import {connect} from "react-redux";
import { withRouter } from "react-router-dom";


const Home = (props: any) => {
    const [sortBy, setSortBy] = useState('fructs')
    useEffect(() => {
        props.actionsProducts(sortBy)
    }, [sortBy]);
    console.log('home sortBy', sortBy)
    console.log('propa.prod Home', props.prod);

    return (
        <Wrapper>
            <section className="breadcrumb-section set-bg" data-setbg="img/breadcrumb.jpg">
                <OrganiShop/>
            </section>
            <section className="product spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-5">
                            <div className="sidebar">
                                <CategoryFilter/>
                                <PriceFilter/>
                                <ColorsFilter/>
                                <PopularSizeFilter/>


                                <div className="sidebar__item">
                                    <div className="latest-product__text">
                                        <h4>Latest Products</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-7">
                            <TopFilter sortBy={sortBy} setSortBy={setSortBy}/>

                            <div className="cont-of-item">
                                 <Products sortBy={sortBy} prod={props.prod} />
                            </div>


                            Pagination
                            {/*<Pagination*/}
                            {/*    totalPages={productsList.length}*/}
                            {/*    current={page}*/}
                            {/*    onChange={this.changePage}*/}
                            {/*/>*/}
                        </div>
                    </div>
                </div>
            </section>
        </Wrapper>
    )
}

// export default Home;
const mapStateToProps = (props: any) => ({
    prod: props.products.prodData
});

const mapDispatchToProps = {
    actionsProducts,
};
const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default  withRouter(HomeContainer);
