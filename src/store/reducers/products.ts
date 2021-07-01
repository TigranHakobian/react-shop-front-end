import {PRODUCTS_REQUEST, PRODUCTS_SUCCESS, PRODUCTS_FAIL} from '../actions/products';
import {StateType} from "./products.interface";

const initialState: StateType = {
    prodData: [],
};

type InitialState = typeof initialState;

export default function reducer(state:StateType = initialState, action:any): InitialState{

    switch (action.type) {
        case PRODUCTS_REQUEST: {
            return {...state};
        }
        case PRODUCTS_SUCCESS: {
            return {
                ...state,
                prodData:  action.payload.prodDataSaga
            };
        }

        case PRODUCTS_FAIL: {
            return {...state};
        }

        default: {
            return state;
        }
    }
}
