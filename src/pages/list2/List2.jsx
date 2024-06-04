import React from "react";
import './list.scss'
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";
import TableComponent from "../../components/table/Table";
import { Link } from "react-router-dom";

const List2 = () => {
    return (
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                <div className="dataTableTitle">
        Add New Product
        <Link to="/products/new" style={{textDecoration: 'none'}} className='link'>
          Add New
        </Link>
      </div>
                <TableComponent />
            </div>
        </div>
    )
}

export default List2;