import React, { useState } from "react";
import './new.scss'
import noneIm from '../../assets/none.png'

import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { createProduct } from "../../api/productApi";
import { useSelector } from "react-redux";

const New = ({inputs,title}) => {

    const [file, setFile] = useState("");
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        category: '',
        stock: '',
        image: '',
    });

    const { token } = useSelector((state) => state.auth);
    /* console.log(token); */

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
        setFormData((prevData) => ({
            ...prevData,
            image: file
        }));
    };

    const handleSubmit = async (e) => {
        /* e.preventDefault(); */
        const productData = new FormData();
        for (const key in formData) {
            productData.append(key, formData[key]);
        }

        try {
            if(!token) {
                throw new Error('Token not available');
            }
            const newProduct = await createProduct(productData, token);
            console.log('Product created', newProduct);
        } catch (error) {
            console.error('Error creating product:', error);
        }
    }

    /* console.log('File:', file);
    console.log('FormData:', formData);
    console.log('Token:', token); */

    return (
        <div className="new">
            <Sidebar />
            <div className="newContainer">
                <Navbar />
                <div className="top">
                    <h1>New</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img 
                         src={file ? URL.createObjectURL(file) : noneIm} 
                         alt="product"
                        />
                    </div>
                    <div className="right">
                        <form onSubmit={handleSubmit}>
                            <div className="formInput">
                                <label htmlFor="file">
                                    Image: <DriveFolderUploadIcon className="icon"/>
                                    </label>
                                <input type="file" id="file" onChange={handleFileChange} style={{display: "none"}}/>
                            </div>
                           {inputs.map((input) => (
                            <div className="formInput" key={input.id}>
                                <label>{input.label}</label>
                                <input type={input.type} placeholder={input.placeholder}
                                onChange={handleInputChange}
                                />
                            </div>
                           ))}
                            <button type="submit">Add</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default New;