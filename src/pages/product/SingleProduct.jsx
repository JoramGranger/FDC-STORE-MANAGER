import React, { useEffect, useState } from "react";
import './singleProduct.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Chart from '../../components/chart/Chart'
import TableComponent from '../../components/table/Table'
import { useParams } from "react-router-dom";
import { getProductById } from '../../api/productApi';


const SingleProduct = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
          try {
            const data = await getProductById(productId); // Fetch product data using the productId
            setProduct(data);

            // debug
            console.log(product);
          } catch (error) {
            console.error('Error fetching product:', error);
          } finally {
            setLoading(false);
          }
        };
    
        fetchProduct();
      }, [productId]);
    
      if (loading) return <div>Loading...</div>; // Display loading message or spinner
      if (!product) return <div>Product not found</div>;

      const imageUrl = `http://localhost:5000/${product.image.replace(/\\/g, '/')}`;

    return (
        <div className="single">
            <Sidebar />
            <div className="singleContainer">
                <Navbar />
                <div className="top">
                    <div className="left">
                        <div className="EditButton">Edit</div>
                        <h1 className="title">Information</h1>
                        <div className="item">
                            <img 
/*                             src="https://images.thedermaco.com/catalog/product/c/o/combos-21-_1200x1200_.jpg" */
                            src={imageUrl}
                            alt="item"
                            className="itemImg" 
                            />
                            <div className="details">
                                {/* <h1 className="itemTitle">Product </h1> */}
                                <div className="detailItem">
                                    <span className="itemKey">Name:</span>
                                    <span className="itemKey">{product.name}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Category:</span>
                                    <span className="itemKey">{product.category}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Description:</span>
                                    <span className="itemKey">{product.description}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Stock:</span>
                                    <span className="itemKey">{product.stock}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Sold Pieces</span>
                                    <span className="itemKey">{product.sold}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="right">
                        <Chart aspect={3/1} title="User Spending (Last 6 Months)"/>
                    </div> */}
                </div>
                {/* <div className="bottom">
                    <h1 className="title">Last Transactions</h1>
                    <TableComponent />
                </div> */}
            </div>
        </div>
    )
}

export default SingleProduct;