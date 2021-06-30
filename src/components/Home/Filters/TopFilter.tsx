import React from "react";
import queryString from "query-string";
import { withRouter } from "react-router-dom";

const TopFilter = (props:any) => {

const setHearRouterFruits = () =>{
    const query = queryString.parse(window.location.search, { arrayFormat: 'comma' })
    query.sortBy = "fructs";
    const queryStr = queryString.stringify(query, { arrayFormat: 'comma' });
    props.history.replace('?' + queryStr)
    props.setSortBy('fructs')
}

    const setHearRouterSweets = () =>{
        const query = queryString.parse(window.location.search, { arrayFormat: 'comma' })
        query.sortBy = "sweets";
        const queryStr = queryString.stringify(query, { arrayFormat: 'comma' });
        props.history.replace('?' + queryStr)
        props.setSortBy('sweet')
    }

    const setHearRouterFoods = () =>{
        const query = queryString.parse(window.location.search, { arrayFormat: 'comma' })
        query.sortBy = "food";
        const queryStr = queryString.stringify(query, { arrayFormat: 'comma' });
        props.history.replace('?' + queryStr)
        props.setSortBy('food')
    }




    return(
        <div className="filter__item">
            <div className="row">
                <div className="col-lg-4 col-md-5">
                    <div className="filter__sort">
                        <span>Sort By
                            <div  className={"btnFruits"} onClick={setHearRouterFruits}>Fruits</div>
                            <div className={"btnSweets"} onClick={setHearRouterSweets}>Sweets</div>
                            <div className={"btnFoods"} onClick={setHearRouterFoods}>Foods</div>
                        </span>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4">
                    <div className="filter__found">
                        <h6><span>4 .length</span> Products found</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(TopFilter) ;
