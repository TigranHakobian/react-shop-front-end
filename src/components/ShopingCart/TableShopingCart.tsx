import React,{useState} from "react";
import {connect} from "react-redux";
import {addProduct} from "../../store/actions/toCart";
import {log} from "util";



const TableShopingCart = (props:any) =>{

    const localProd = JSON.parse( localStorage.getItem("prod") as string)


    const  [count,setCount] = useState(1)

    const removeItem = (title:string) =>{
        const filtered =  localProd.filter((i:any)=>i.title !== title)
        localStorage.setItem("prod",JSON.stringify(filtered))
        console.log(filtered)
        props.addProduct()
    }

    const countChange = (event:any) =>{
        event.preventDefault();
        setCount(event.target.value)
    }








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
                                        <span className=""><i onClick={() =>removeItem(item.title)} className="fa fa-remove"/></span>
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
    addProduct,
}

const Container = connect(
    mapSateToProps,
    mapDispatchToProps,
)(TableShopingCart)

export default Container
