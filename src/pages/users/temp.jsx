import React, { useEffect, useState } from "react";
import './singleUser.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import TableComponent from '../../components/table/Table'
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUserById } from '../../api/userApi';
import { getCustomerById } from "../../api/customerApi";
import { formatDateAndCalculateDays } from "../../components/utils/userDetailsFormatting";

const SingleUser = () => {
    const { token } = useSelector((state) => state.auth);
    const { userId } = useParams();
    const [user, setUser] = useState(null);
    const [customer, setCustomer] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const data = await getUserById(token, userId);
                setUser(data);
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };

        const fetchCustomer = async () => {
            try {
                const customerData = await getCustomerById(token, userId);
                setCustomer(customerData);
            } catch (error) {
                console.error('Error fetching customer:', error);
            }
        };

        fetchUser();
        fetchCustomer();
        setLoading(false);
    }, [token, userId]);

    if (loading) return <div>Loading...</div>; 
    if (!user) return <div>User not found</div>;
    if (!customer) return <div>Customer not found</div>;

    return (
        <div className="single">
            <Sidebar />
            <div className="singleContainer">
                <Navbar />
                <div className="top">
                    <div className="left">
                        <h1 className="title">User Information</h1>
                        <div className="item">
                            <img 
/*                             src="https://images.thedermaco.com/catalog/user/c/o/combos-21-_1200x1200_.jpg" */
                            src=""
                            alt="item"
                            className="itemImg" 
                            />
                            <div className="details">
                                <div className="detailItem">
                                    <span className="itemKey">Name:</span>
                                    <span className="itemValue">{user.name}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Email:</span>
                                    <span className="itemValue">{user.email}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Phone:</span>
                                    <span className="itemValue">{user.phone}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Role:</span>
                                    <span className="itemValue">{user.role}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Account Status:</span>
                                    <span className="itemValue">{user.isVerified ? 'Verified' : 'Not Verified'}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Joined:</span>
                                    <span className="itemValue">{formatDateAndCalculateDays(user.createdAt)[0]}</span>
                                </div>
                            </div>
                        </div>
                        <Link to={`/users/${userId}/edit`} className="actionButton editbtn">
                            Edit
                        </Link>
                        <Link to={`/users/${userId}/deactivate`} className="actionButton debtn">
                            Deactivate
                        </Link>
                    </div>
                    <div className="left">
                        <h1 className="title">Customer Information</h1>
                        <div className="item">
                            <div className="details">
                                <div className="detailItem">
                                    <span className="itemKey">Address:</span>
                                    <span className="itemValue">{customer.addresses}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Order History:</span>
                                    <span className="itemValue">{customer.orderHistory}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Wishlist:</span>
                                    <span className="itemValue">{customer.wishlist}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Cart:</span>
                                    <span className="itemValue">{customer.cart}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Payment Method:</span>
                                    <span className="itemValue">{customer.paymentMethods}</span>
                                </div>
                            </div>
                        </div>
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

export default SingleUser;
