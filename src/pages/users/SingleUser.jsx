import React, { useEffect, useState } from "react";
import './singleUser.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Chart from '../../components/chart/Chart'
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
    const [loading, setLoading] = useState(true);
    const [customer, setCustomer] = useState(null);


    useEffect(() => {
        const fetchUser = async () => {
          try {
            const data = await getUserById(token, userId); // Fetch user data using the userId
            setUser(data);

            // debug
            /* console.log(user); */
          } catch (error) {
            console.error('Error fetching user:', error);
          } finally {
            setLoading(false);
          }
        };
    
        fetchUser();
      }, [userId]);    
    
    useEffect(() => {
        const fetchCustomer = async () => {
            try {
                const customerData = await getCustomerById(token, userId);
                setCustomer(customerData);
            } catch (error) {
                console.error('Error fetching user:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCustomer();
    }, [userId]);


    if (!user) return <div>user not found</div>;
    if (loading) return <div>Loading...</div>; // Display loading message or spinner
    /* if (!customer) return <div>customer not found</div>; */


      /* const imageUrl = `http://localhost:5000/${user.image.replace(/\\/g, '/')}`; */


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
                                {/* <h1 className="itemTitle">user </h1> */}
                                <div className="detailItem">
                                    <span className="itemKey">Name:</span>
                                    <span className="itemKey">{user.name}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Email:</span>
                                    <span className="itemKey">{user.email}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Phone:</span>
                                    <span className="itemKey">{user.phone}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Role:</span>
                                    <span className="itemKey">{user.role}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Account status</span>
                                    <span className="itemKey">{user.isVerified ? 'Verified' : 'Not Verified'}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Joined</span>
                                    <span className="itemKey">{formatDateAndCalculateDays(user.createdAt)[0]}</span>
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
                                {/* <h1 className="itemTitle">user </h1> */}
                                <div className="detailItem">
                                    <span className="itemKey">Address:</span>
                                    <span className="itemKey">
                                    {customer && customer.addresses?.length > 0 
                                    ? customer.addresses.join(', ') 
                                    : 'No addresses available'}
                                    </span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Order History:</span>
                                    <span className="itemKey">
                                    {customer && customer.orderHistory?.length > 0 
                                    ? customer.orderHistory.length 
                                    : 'No order history'}
                                    </span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Wishlist:</span>
                                    <span className="itemKey">{customer && customer.wishlist?.length > 0 
                                    ? customer.wishlist.length 
                                    : 'No wishlist'}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Cart:</span>
                                    <span className="itemKey">
                                    {customer && customer.cart?.length > 0 
                                    ? customer.cart.length 
                                    : 'No cart'}
                                    </span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Payment Method:</span>
                                    <span className="itemKey">{customer && customer.paymentMethod?.length > 0 
                                    ? customer.paymentMethod.length 
                                    : 'No Payment method'}</span>
                                </div>
                            </div>
                        </div>
                        {/* <Link to={`/users/${userId}/edit`} className="actionButton editbtn">
                                Edit
                        </Link>
                        <Link to={`/users/${userId}/deactivate`} className="actionButton debtn">
                                Deactivate
                        </Link> */}
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

export default SingleUser;