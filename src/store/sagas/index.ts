// import { all, fork } from "redux-saga/effects";
// import products from './products'
//
// export default function* root() {
//     const sagas = [
//         Products
//     ];
//     yield all(sagas.map(fork));
// }



import { all, fork } from "redux-saga/effects";
import products from "./products";

export default function* root() {
    const sagas = [
        products,
    ];
    yield all(sagas.map(fork));
}
