import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addNewProductStart, deleteProductStart, fetchProdustStart } from '../redux/Products/product.actions';
import { storage } from '../firebase/utils';

const mapState = ({ productsData }) => ({
    products: productsData.products
});

const Admin = () => {
    const { products } = useSelector(mapState);
    const dispatch = useDispatch();
    const [service, setService] = useState('');
    const [productName, setProductName] = useState('');
    const [productImage, setProductImage] = useState('');
    const [description, setDescription] = useState('');
    const [features, setFeatures] = useState([{ feature: "" }]);
    const [urls, setUrls] = useState('');





    const handleChange = (i, e) => {
        const newFeatures = [...features];
        newFeatures[i][e.target.name] = e.target.value;
        setFeatures(newFeatures);
    }

    const addFeatures = () => {
        setFeatures([...features, { feature: "" }])
    }

    const removeFeature = (i) => {
        const newFeatures = [...features];
        newFeatures.splice(i, 1);
        setFeatures(newFeatures);
    }


    useEffect(() => {
        dispatch(
            fetchProdustStart()
        );
    }, [dispatch])


    const handleFormSubmit = (e) => {
        e.preventDefault();
        // console.log(productImage);
        const uploadTask = storage.ref(`images/${productImage.name}`).put(productImage);
        uploadTask.on(
            'state_changed',
            () => {
                storage
                    .ref('images')
                    .child(productImage.name)
                    .getDownloadURL()
                    .then(url => {
                        console.log(url);
                        setUrls(url);
                    })
                    .catch(err => {
                        console.log(err);
                    })
            }
        )
        dispatch(
            addNewProductStart({
                service,
                productName,
                urls,
                description,
                features
            })
        );

    }
    return (
        <>

            <section className="breadcrumb-area" style={{ backgroundImage: process.env.PUBLIC_URL + 'url(images/background/3.jpg);' }}>
                <div className="container text-center">
                    <h1>Admin Panel</h1>
                </div>
            </section>

            <section className="contact-form-area sec-padd-top" style={{ padding: '45px' }}>
                <div className="container">
                    <div className="section-title">
                        <h2>Add new Products</h2>
                    </div>

                    <div className="row">

                        <div className="col-md-6">

                            <div className="contact-form">
                                <form onSubmit={handleFormSubmit}>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <label>Select Services</label>
                                            <select name="service" value={service} onChange={(e) => setService(e.target.value)}>
                                                <option value="select services">Select Services</option>
                                                <option value="RD Genuine Parts">RD Genuine Parts</option>
                                                <option value="Precision Turned Parts">Precision Turned Parts</option>
                                                <option value="Valve & Flanges">Valve & Flanges</option>
                                                <option value="Hose Fitting">Hose Fitting</option>
                                                <option value="SS Water Bottle">SS Water Bottle</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <label>Product Name:-</label>
                                            <input type="text" name="productName" value={productName} onChange={(e) => setProductName(e.target.value)} placeholder="Product Name" />
                                        </div>

                                    </div>


                                    <div className="row">
                                        <div className="col-md-12">
                                            <label>Upload Product Image</label>
                                            <input type="file" name="productImage" onChange={(e) => setProductImage(e.target.files[0])} />
                                        </div>

                                    </div>

                                    <div className="row">
                                        <div className="col-md-12">
                                            <label>Product Description:-</label>
                                            <textarea type="text" name="description" placeholder="Product Description" value={description} onChange={(e) => setDescription(e.target.value)} ></textarea>
                                        </div>
                                    </div>

                                    {features.map((element, index) => (
                                        <div className="row" key={index}>
                                            <div className="col-md-10">
                                                <input type="text" name="feature" placeholder="Product Features" value={element.feature || ""} onChange={(e) => handleChange(index, e)} />
                                            </div>
                                            {
                                                index ?
                                                    <div className="col-md-2">
                                                        <button type="button" className="bg-clr1" onClick={() => removeFeature(index)} >X</button>
                                                    </div>
                                                    : null
                                            }
                                        </div>
                                    ))}

                                    <div className="row">
                                        <div className="col-md-4">
                                            <button className="thm-btn bg-clr1" type="button" onClick={() => addFeatures()} >Add features</button>
                                        </div>

                                    </div><br />


                                    <div className="row">
                                        <div className="col-md-12">
                                            <button className="thm-btn bg-clr1" type="submit" name="submit" data-loading-text="Please wait...">Add Product</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="col-md-6 col-sm-12 col-xs-12">
                            <div className="table-outer">
                                <table className="cart-table">
                                    <thead className="cart-header">
                                        <tr>
                                            <th className="prod-column">Products</th>
                                            <th>Product Title</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {products.map((product, index) => {
                                            const { urls, productName, service, documentID } = product;
                                            return (
                                                <tr key={index}>
                                                    <td className="prod-column">
                                                        <div className="column-box">
                                                            <div className="prod-thumb">
                                                                <Link to="#"><img src={urls} alt="product" style={{ width: '160px' }} /></Link>
                                                            </div>

                                                        </div>
                                                    </td>

                                                    <td>
                                                        <h3 className="prod-title">{productName}</h3>
                                                        <p>{service}</p>
                                                    </td>

                                                    <td>
                                                        <div className="remove">
                                                            <div className="checkbox">
                                                                <button className="thm-btn bg-clr3">Update</button><br />
                                                                <button className="thm-btn bg-clr1" onClick={() => dispatch(deleteProductStart(documentID))}>Delete</button>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        })}

                                    </tbody>
                                </table>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}

export default Admin;
