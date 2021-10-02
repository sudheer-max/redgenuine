import productTypes from "./product.types";

export const addNewProductStart = productData => ({
    type: productTypes.ADD_NEW_PRODUCT_START,
    payload: productData
});


export const fetchProdustStart = () => ({
    type: productTypes.FETCH_PRODUCT_START
});

export const setProduct = products => ({
    type: productTypes.SET_PRODUCTS,
    payload: products
});

export const deleteProductStart = productID => ({
    type: productTypes.DELETE_PRODUCT_START,
    payload: productID
});


