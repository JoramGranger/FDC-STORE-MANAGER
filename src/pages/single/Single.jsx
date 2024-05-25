import React from "react";
import './single.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Chart from '../../components/chart/Chart'
import TableComponent from '../../components/table/Table'

const Single = () => {
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
                            src="https://clabane.com/cdn/shop/products/Clabane-Organics-Acne-Bar-2.jpg?v=1674058736&width=360" 
                            alt="item"
                            className="itemImg" 
                            />
                            <div className="details">
                                <h1 className="itemTitle">Jane Doe</h1>
                                <div className="detailItem">
                                    <span className="itemKey">Email:</span>
                                    <span className="itemKey">janedoe@gmail.com</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Phone:</span>
                                    <span className="itemKey">+256 704 578 678</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Address:</span>
                                    <span className="itemKey">kamwokya Bukoto</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Region:</span>
                                    <span className="itemKey">Central</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <Chart aspect={3/1} title="User Spending (Last 6 Months)"/>
                    </div>
                </div>
                <div className="bottom">
                    <h1 className="title">Last Transactions</h1>
                    <TableComponent />
                </div>
            </div>
        </div>
    )
}

export default Single;