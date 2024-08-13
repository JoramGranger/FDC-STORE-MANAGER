import React, { useEffect } from "react";
import './order.scss'
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import OrderTable from "../../components/orderTable/OrderTable";

const Order = () => {
    return (
        <div className="order">
            <Sidebar />
            <div className="orderContainer">
                <Navbar />
                <OrderTable />
            </div>
        </div>
    )
}

export default Order;