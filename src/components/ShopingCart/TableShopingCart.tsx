import React,{useState} from "react";
import {connect} from "react-redux";
import {removeProduct} from "../../store/actions/toCart";



const TableShopingCart = (props:any) =>{

    const  [count,setCount] = useState(1)

    const removeItem = (id:number) =>{
        props.removeProduct(id)
    }

    const countChange = (event:any) =>{
        event.preventDefault();
        setCount(event.target.value)
    }

   const localProd = JSON.parse( localStorage.getItem("prod") as string)

    return(
        <div className="row">
            <div className="col-lg-12">
                <div className="shoping__cart__table">
                    <table>
                        <thead>
                        <tr>
                            <th className="shoping__product">Products</th>
                            <th>Price</th>
                            <th>Count</th>
                            <th>Remove</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            localProd.map((item:any)=>(
                                <tr key={Math.random()*1000000}>
                                    <td   className="shoping__cart__item">
                                        <img className="shoping__cart__img" src={item.image} alt=""/>
                                        <h5>{item.title}</h5>
                                    </td>
                                    <td className="shoping__cart__price">
                                        {item.price * count}
                                    </td>
                                    <td className="shoping__cart__item__close">
                                        <input type="text" onChange={countChange}/>
                                     </td>
                                    <td className="shoping__cart__item__close">
                                        <span className=""><i onClick={() =>removeItem(item.id)} className="fa fa-remove"/></span>
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>

                </div>
            </div>
            <a href="#" className="btn btn-success cart-btn">Buy</a>
        </div>
    )
}


const mapSateToProps = (state:any) => ({
    product: state
})

const mapDispatchToProps = {
    removeProduct,
}

const Container = connect(
    mapSateToProps,
    mapDispatchToProps,
)(TableShopingCart)

export default Container
