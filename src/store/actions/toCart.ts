export const ADD_PRODUCT = "ADD_PRODUCT"

export function addProduct(item:any){
    return{
        type:"ADD_PRODUCT",
        payload:item
    }
}

export const REMOVE_PRODUCT = "REMOVE_PRODUCT"

export function removeProduct(id:number) {
    return {
        type: 'REMOVE_PRODUCT',
        payload: { id },

    }
}





