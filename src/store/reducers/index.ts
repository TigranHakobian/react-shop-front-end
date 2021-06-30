import {combineReducers} from "redux"
import AddToCart from './addToCart'
import products from './products'

export default combineReducers({
    AddToCart,
    products

})
