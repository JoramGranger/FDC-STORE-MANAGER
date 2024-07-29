import React, { useEffect } from "react";
import './product.scss'
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";
import ProductTable from "../../components/productTable/ProductTable";

const Product = () => {
    return (
        <div className="product">
            <Sidebar />
            <div className="productContainer">
                <Navbar />
                <ProductTable />
            </div>
        </div>
    )
}

export default Product;