import { firestore } from "../../firebase/utils";

export const handleAddProduct = product => {
    return new Promise((resolve, reject) => {
        firestore
            .collection('products')
            .doc()
            .set(product)
            .then(() => {
                resolve()
            })
            .catch(err => {
                reject(err)
            })
    })
}

export const handleFetchProduct = () => {
    return new Promise((reslove, reject) => {
        firestore
            .collection('products')
            .get()
            .then(snapshot => {
                const productArray = snapshot.docs.map(doc => {
                    return {
                        ...doc.data(),
                        documentID: doc.id
                    }
                });
                reslove(productArray)
            })
            .catch(err => {
                reject(err);
            })
    })
}


export const handleDeleteProduct = documentID => {
    return new Promise((reslove, reject) => {
        firestore
            .collection('products')
            .doc(documentID)
            .delete()
            .then(() => {
                reslove()
            })
            .catch(err => {
                reject(err);
            })
    })
}