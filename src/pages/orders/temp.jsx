import React, { useEffect, useState } from "react";
import './singleOrder.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import { Link, useParams } from "react-router-dom";
import { getOrderById, updateOrderStatus } from '../../api/orderApi';
import { useSelector } from "react-redux";
import { formatDateAndCalculateDays } from "../../components/utils/userDetailsFormatting";
import ItemsList from "./ItemsList";

const SingleOrder = () => {
    const { token } = useSelector((state) => state.auth);
    const { orderId } = useParams();
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(true);
    const [status, setStatus] = useState(order?.status || ''); // Local state to manage status

    useEffect(() => {
        const fetchOrder = async () => {
            try {
                const data = await getOrderById(orderId, token); // Fetch order data using the orderId
                setOrder(data);
                setStatus(data.status); // Set initial status from fetched order
            } catch (error) {
                console.error('Error fetching order:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchOrder();
    }, [orderId, token]);

    const handleStatusChange = async (newStatus) => {
        try {
            await updateOrderStatus(orderId, { status: newStatus }, token);
            setStatus(newStatus); // Update local status
            // Optionally, refetch order data to ensure it's up to date
            const data = await getOrderById(orderId, token);
            setOrder(data);
        } catch (error) {
            console.error('Error updating order status:', error);
        }
    };

    if (loading) return <div>Loading...</div>; // Display loading message or spinner
    if (!order) return <div>Order not found</div>;

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
                                alt="item"
                                className="itemImg" 
                            />
                            <div className="details">
                                <h1 className="itemTitle">Customer </h1>
                                <div className="detailItem">
                                    <span className="itemKey">Order Id:</span>
                                    <span className="itemValue">{order._id}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Customer Name:</span>
                                    <span className="itemValue">{order.customer.name}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Customer Email:</span>
                                    <span className="itemValue">{order.customer.email}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Customer Phone:</span>
                                    <span className="itemValue">{order.customer.phone}</span>
                                </div>
                            </div>
                            <div className="details">
                                <h1 className="itemTitle">Summary </h1>
                                <div className="detailItem">
                                    <span className="itemKey">Amount:</span>
                                    <span className="itemValue">{order.totalAmount}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Status:</span>
                                    <span className="itemValue">{status}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Payment Method:</span>
                                    <span className="itemValue">{order.paymentMethod}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Payment Status:</span>
                                    <span className="itemValue">{order.paymentStatus}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Date:</span>
                                    <span className="itemValue">{formatDateAndCalculateDays(order.createdAt)[0]}</span>
                                </div>
                            </div>
                        </div>
                        <Link to={`/orders/${orderId}/update`} className="editButton">
                            Edit
                        </Link>
                        {/* Status Management Buttons */}
                        <div className="statusButtons">
                            <button
                                onClick={() => handleStatusChange('Pending')}
                                disabled={status === 'Pending'}
                                className="statusButton"
                            >
                                Mark as Pending
                            </button>
                            <button
                                onClick={() => handleStatusChange('Processing')}
                                disabled={status === 'Processing'}
                                className="statusButton"
                            >
                                Mark as Processing
                            </button>
                            <button
                                onClick={() => handleStatusChange('Shipped')}
                                disabled={status === 'Shipped'}
                                className="statusButton"
                            >
                                Mark as Shipped
                            </button>
                            <button
                                onClick={() => handleStatusChange('Delivered')}
                                disabled={status === 'Delivered'}
                                className="statusButton"
                            >
                                Mark as Delivered
                            </button>
                            <button
                                onClick={() => handleStatusChange('Cancelled')}
                                disabled={status === 'Cancelled'}
                                className="statusButton"
                            >
                                Mark as Cancelled
                            </button>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <h1 className="title">Items: <span>{order.items.length}</span></h1>
                    <ItemsList items={order.items}/>                    
                </div>
            </div>
        </div>
    );
};

export default SingleOrder;
