import React, { useEffect, useState } from "react";
import './singleOrder.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Chart from '../../components/chart/Chart'
import TableComponent from '../../components/table/Table'
import { Link, useParams } from "react-router-dom";
import { getOrderById } from '../../api/orderApi';
import { useSelector } from "react-redux";



const SingleOrder = () => {
    const { token } = useSelector((state) => state.auth);
    const { orderId } = useParams();
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOrder = async () => {
          try {
            const data = await getOrderById(orderId, token); // Fetch product data using the productId
            setOrder(data);

            // debug
            console.log(order);
          } catch (error) {
            console.error('Error fetching order:', error);
          } finally {
            setLoading(false);
          }
        };
    
        fetchOrder();
      }, [orderId]);
    
      if (loading) return <div>Loading...</div>; // Display loading message or spinner
      if (!order) return <div>Order not found</div>;

      /* const imageUrl = `http://localhost:5000/${product.image.replace(/\\/g, '/')}`; */

    return (
        <div className="single">
            <Sidebar />
            <div className="singleContainer">
                <Navbar />
                <div className="top">
                    <div className="left">
                        <h1 className="title">Information</h1>
                        <div className="item">
                            <img 
                            src="https://images.thedermaco.com/catalog/product/c/o/combos-21-_1200x1200_.jpg"
                            /* src={imageUrl} */
                            alt="item"
                            className="itemImg" 
                            />
                            <div className="details">
                                {/* <h1 className="itemTitle">Product </h1> */}
                                <div className="detailItem">
                                    <span className="itemKey">ID:</span>
                                    <span className="itemKey">{order._id}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Category:</span>
                                    <span className="itemKey">{order.customer._id}</span>
                                </div>
                            </div>
                        </div>
                        <Link to={`/orders/${orderId}/update`} className="editButton">
                                Edit
                        </Link>
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

export default SingleOrder;