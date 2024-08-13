import React, { useEffect, useState } from "react";
import './singleOrder.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Chart from '../../components/chart/Chart'
import TableComponent from '../../components/table/Table'
import { Link, useParams } from "react-router-dom";
import { getOrderById } from '../../api/orderApi';
import { useSelector } from "react-redux";
import { formatDateAndCalculateDays } from "../../components/utils/userDetailsFormatting";
import ItemsList from "./ItemsList";


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
                        <h1 className="title">Order Information</h1>
                        <div className="item">
                            <img 
                            src="https://images.thedermaco.com/catalog/product/c/o/combos-21-_1200x1200_.jpg"
                            /* src={imageUrl} */
                            alt="item"
                            className="itemImg" 
                            />
                            <div className="details">
                                <h1 className="itemTitle">Customer </h1>
                                <div className="detailItem">
                                    <span className="itemKey">Order Id:</span>
                                    <span className="itemKey">{order._id}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Customer Name:</span>
                                    <span className="itemKey">{order.customer.name}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Customer Email:</span>
                                    <span className="itemKey">{order.customer.email}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Customer Phone:</span>
                                    <span className="itemKey">{order.customer.phone}</span>
                                </div>
                            </div>
                            <div className="details">
                                <h1 className="itemTitle">Summary </h1>
                                <div className="detailItem">
                                    <span className="itemKey">Amount:</span>
                                    <span className="itemKey">{order.totalAmount}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Status:</span>
                                    <span className="itemKey">{order.status}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Payment Method:</span>
                                    <span className="itemKey">{order.paymentMethod}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Payment Status:</span>
                                    <span className="itemKey">{order.paymentStatus}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Date:</span>
                                    <span className="itemKey">{formatDateAndCalculateDays(order.createdAt)[0]}</span>
                                </div>
                            </div>
                        </div>
                        <Link to={`/orders/${orderId}/update`} className="editButton">
                                Edit
                        </Link>
                    </div>
                </div>
                <div className="bottom">
                    <h1 className="title">Items</h1>
                    <ItemsList items={order.items}/>                    
                </div>
            </div>
        </div>
    )
}

export default SingleOrder;