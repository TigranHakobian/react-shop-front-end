
export const COUNT_OF_CART = "COUNT_OF_CART"


export function countOfCart(item:any) {
    return {
        type: 'COUNT_OF_CART',
        payload: item,

    }
}
