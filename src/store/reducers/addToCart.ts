import {ADD_PRODUCT} from "../actions/toCart";

let product: string[]=[]

const initialState = {
    product
}

export default function reducer(state = initialState, action:any) {
    switch (action.type) {
        case ADD_PRODUCT: {
            let { product } = state;
            product = JSON.parse(localStorage.getItem("prod") as string)

            console.log(1111111111,product)
            return {
                ...state,
                product
            }
        }

        default: {
            return state;
        }
    }
}


