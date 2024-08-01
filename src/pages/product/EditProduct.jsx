import React, { useState, useEffect } from "react";
import './editProduct.scss';
import noneIm from '../../assets/none.png';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { getProductById, updateProduct } from "../../api/productApi";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const EditProduct = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    const [file, setFile] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        category: '',
        price: '',
        stock: '',
        image: '',
    });

    const { token } = useSelector((state) => state.auth);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const data = await getProductById(productId);
                setProduct(data);

                // Pre-fill the form data with fetched product data
                setFormData({
                    name: data.name,
                    description: data.description,
                    category: data.category,
                    price: data.price,
                    stock: data.stock,
                    image: data.image,
                });

            } catch (error) {
                console.error('Error fetching product:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [productId]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFile(file);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const productData = new FormData();
        for (const key in formData) {
            if (key !== 'image') {
                productData.append(key, formData[key]);
            }
        }

        // If a new file is selected, append it to FormData
        if (file) {
            productData.append('image', file);
        }

        // Log formData for debugging
        console.log('FormData contents:');
        for (let pair of productData.entries()) {
            console.log(`${pair[0]}: ${pair[1]}`);
        }

        try {
            if (!token) {
                throw new Error('Token not available');
            }
            const updatedProduct = await updateProduct(productId, productData, token);
            console.log('Product updated', updatedProduct);

        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    if (loading) return <div>Loading...</div>;
    if (!product) return <div>Product not found</div>;

    return (
        <div className="new">
            <Sidebar />
            <div className="newContainer">
                <Navbar />
                <div className="top">
                    <h1>Edit Product</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img
                            src={file ? URL.createObjectURL(file) : (product.image ? `http://localhost:5000/${product.image.replace(/\\/g, '/')}` : noneIm)}
                            alt="product"
                        />
                    </div>
                    <div className="right">
                        <form onSubmit={handleSubmit}>
                            <div className="formInput">
                                <label htmlFor="file">
                                    Image: <DriveFolderUploadIcon className="icon" />
                                </label>
                                <input type="file" name="image" id="file" onChange={handleFileChange} style={{ display: "none" }} />
                            </div>
                            <div className="formInput">
                                <label>Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Product Name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="formInput">
                                <label>Description</label>
                                <input
                                    type="text"
                                    name="description"
                                    placeholder="Product Description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="formInput">
                                <label>Category</label>
                                <input
                                    type="text"
                                    name="category"
                                    placeholder="Product Category"
                                    value={formData.category}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="formInput">
                                <label>Price</label>
                                <input
                                    type="number"
                                    name="price"
                                    placeholder="Product Price"
                                    value={formData.price}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="formInput">
                                <label>Stock</label>
                                <input
                                    type="number"
                                    name="stock"
                                    placeholder="Stock Quantity"
                                    value={formData.stock}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <button type="submit">Update</button>
                            <button type="button" onClick={() => window.history.back()}>Back</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProduct;
