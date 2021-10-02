import { takeLatest, all, call, put } from "@redux-saga/core/effects";
import productTypes from "./product.types";
import { auth } from "../../firebase/utils";
import { handleAddProduct, handleDeleteProduct, handleFetchProduct } from "./products.helpers";
import { fetchProdustStart, setProduct } from "./product.actions";

export function* addProduct({ payload: {
    service,
    productName,
    urls,
    description,
    features
} }) {
    try {
        const timestamps = new Date();
        yield handleAddProduct({
            service,
            productName,
            urls,
            description,
            features,
            productAdminUserUID: auth.currentUser.uid,
            createdAt: timestamps
        });
        yield put(
            fetchProdustStart()
        );

    } catch (err) {
        console.log(err);
    }
}

export function* onAddNewProductStart() {
    yield takeLatest(productTypes.ADD_NEW_PRODUCT_START, addProduct)
}


export function* fetchProduct() {
    try {
        const products = yield handleFetchProduct();
        yield put(
            setProduct(products)
        )
    } catch (err) {
        // console.log(err);
    }
}

export function* onFetchProductStart() {
    yield takeLatest(productTypes.FETCH_PRODUCT_START, fetchProduct);
}


export function* deleteProduct({ payload }) {
    try {
        yield handleDeleteProduct(payload);
        yield put(
            fetchProdustStart()
        )
    } catch (err) {
        // console.log(err);
    }
}

export function* onDeleteProductStart() {
    yield takeLatest(productTypes.DELETE_PRODUCT_START, deleteProduct);
}

export default function* productSagas() {
    yield all([
        call(onAddNewProductStart),
        call(onFetchProductStart),
        call(onDeleteProductStart)
    ]);
}
