import React from "react";
import './home.scss'
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Chart from "../../components/chart/Chart";
import Featured from "../../components/featured/Featured";
import TableComponent from "../../components/table/Table";
import { useSelector } from 'react-redux';


const Home = () => {

    const { user } = useSelector((state) => state.auth);
    const token = localStorage.getItem('token');

    return (
        <div className="home">
            {/* {console.log(user)}
            {console.log(token)} */}
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <div className="widgets">
                    <Widget type="user"/>
                    <Widget type="order"/>
                    <Widget type="earning"/>
                    <Widget type="balance" />
                </div>
                <div className="charts">
                    <Featured />
                    <Chart />
                </div>
                <div className="listContainer">
                    <div className="listTitle">
                        Latest Transactions
                    </div>
                    <TableComponent />
                </div>
            </div>
        </div>
    )
}

export default Home;