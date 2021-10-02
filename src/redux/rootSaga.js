import { call, all } from "@redux-saga/core/effects";
import userSagas from "./User/userSagas";
import productSagas from "./Products/product.sagas";

export default function* rootSaga() {
    yield all([
        call(userSagas),
        call(productSagas)
    ]);
}

