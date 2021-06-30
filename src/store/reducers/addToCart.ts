import {ADD_PRODUCT} from "../actions/toCart";
import {REMOVE_PRODUCT} from "../actions/toCart";



// interface IMyObject {
//     a: number;
//     b: number;
// }

// interface IState {
//     array: IMyObject[];
// }



let product: string[]=[]



const initialState = {
    product
}

export default function reducer(state = initialState, action:any) {
    switch (action.type) {
        case ADD_PRODUCT: {
            const { product } = state;
            console.log("action",action)
            const  payload  = action.payload;
            product.push(payload)

            return {
                ...state,
                product:[...product]
            }
        }
        case REMOVE_PRODUCT: {
            let { product } = state;
            const { id } = action.payload;

            product = product.filter((x:any) => x.id !== id)

            console.log(id)

            return {
                ...state,
                product: [...product]
            }
        }


        default: {
            return state;
        }
    }
}


