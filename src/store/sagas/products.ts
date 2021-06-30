import {takeLatest, call, put} from 'redux-saga/effects';
import {PRODUCTS_REQUEST, PRODUCTS_SUCCESS, PRODUCTS_FAIL, actionsProducts} from '../actions/products';
import * as api from '../../api';

type Data = ReturnType<typeof actionsProducts>

function* handleProductsRequest(action: any) {
    console.log('sagas SortBy', action.payload.sortBy)
    try {
        const data: Data = yield call(api.getProducts, action.payload.sortBy);
        yield put({
            type: PRODUCTS_SUCCESS,
            payload: {prodDataSaga: data},
        });
    } catch (e) {
        console.log(e);
        yield put({
            type: PRODUCTS_FAIL,
            message: e.message,
        });
    }
}

export default function* watchers() {
    yield takeLatest(PRODUCTS_REQUEST, handleProductsRequest);
}

