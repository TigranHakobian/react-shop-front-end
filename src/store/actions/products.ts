export const PRODUCTS_REQUEST = 'PRODUCTS_REQUEST';
export const PRODUCTS_SUCCESS = 'PRODUCTS_SUCCESS';
export const PRODUCTS_FAIL = 'PRODUCTS_FAIL';


export function actionsProducts(sortBy:string) {
    console.log('actiona  sortBy', sortBy)
    return {
        type: PRODUCTS_REQUEST,
        payload:{
            sortBy: sortBy
        }
    };
}
