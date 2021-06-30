import React, {useState} from "react";
import {connect} from "react-redux";
import {actionsProducts} from "../../store/actions/products";


const Products = (props: any) => {

    const [prodArr, setProdArr]= useState<any>([])

    //
    //
    // useEffect(() => {
    //     props.actionsProducts()
    // }, [props.sortBy]);
    const oddToCart = (item:any) =>{
        // debugger;

        const chackProd =  JSON.parse(localStorage.getItem("prod") as string)

        console.log(chackProd)

        if (!chackProd.length){
            setProdArr([...prodArr, {
                id: item.id,
                price: item.price,
                title: item.title,
                count: 1,
                image:item.image
            }])
        }else{
            const isFound  = () =>{
                for(let i = 0; i < chackProd.length; i++){
                    if (chackProd[i].id === item.id){
                        return false
                    }
                }
                return true
            }
            if (isFound()){
                chackProd.map((i:any) => (
                     setProdArr([...prodArr, {
                        id: item.id,
                        price: item.price,
                        title: item.title,
                        image:item.image,
                    }])
                )
                )
            }else{
                chackProd.map((i:any) => (
                    item.id === i.id?  i.count = i.count +  1:null
                ))
            }


        }


    }

    localStorage.setItem("prod",JSON.stringify(prodArr))

    return (
        <>
            {props.prod.map((item: any) => (
                <div className=" items" key={item.id}>
                    <div className="image product__item">
                        <a href="#">
                            <img src={item.image} alt=""/>
                        </a>
                    </div>
                    <div>
                        <ul className="prod-item-gen">
                            <li><button>  <i className="fa fa-heart"/></button></li>
                            {/*<li><a></a></li>*/}
                            <li><button onClick={()=> oddToCart(item)} className="btn btn-success"><i  className="fa fa-shopping-cart"/></button> </li>
                        </ul>
                        Title : <span>{item.title}</span><br/>
                        <div className={"description"}><strong style={{fontSize: 16}}>Description
                            : </strong> {item.description}</div>
                    </div>
                    <p className="price"> Price: <strong>{item.price}$</strong></p>

                </div>
            ))
            }

        </>
    )
}


const mapStateToProps = (props: any) => ({
    // prod: props.products.prodData
});

const mapDispatchToProps = {
    actionsProducts,
};
const ProductsContainer = connect(mapStateToProps, mapDispatchToProps)(Products);

export default ProductsContainer;

