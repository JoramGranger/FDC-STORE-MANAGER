import React from 'react';

// Sample customer data
const customer = {
  addresses: [],
  orderHistory: [],
  wishlist: [],
  cart: [],
  paymentMethods: []
};

const CustomerDetails = () => {
  return (
    <div>
      <h1>Customer Details</h1>

      {/* Addresses */}
      <section>
        <h2>Addresses</h2>
        {customer.addresses.length > 0 ? (
          <ul>
            {customer.addresses.map((address, index) => (
              <li key={index}>{address}</li> // Customize display as needed
            ))}
          </ul>
        ) : (
          <p>No addresses found.</p>
        )}
      </section>

      {/* Order History */}
      <section>
        <h2>Order History</h2>
        {customer.orderHistory.length > 0 ? (
          <ul>
            {customer.orderHistory.map((order, index) => (
              <li key={index}>Order #{order.id} - {order.date}</li> // Customize display as needed
            ))}
          </ul>
        ) : (
          <p>No order history found.</p>
        )}
      </section>

      {/* Wishlist */}
      <section>
        <h2>Wishlist</h2>
        {customer.wishlist.length > 0 ? (
          <ul>
            {customer.wishlist.map((item, index) => (
              <li key={index}>{item.name}</li> // Customize display as needed
            ))}
          </ul>
        ) : (
          <p>No items in wishlist.</p>
        )}
      </section>

      {/* Cart */}
      <section>
        <h2>Cart</h2>
        {customer.cart.length > 0 ? (
          <ul>
            {customer.cart.map((item, index) => (
              <li key={index}>{item.name} - {item.quantity}</li> // Customize display as needed
            ))}
          </ul>
        ) : (
          <p>Cart is empty.</p>
        )}
      </section>

      {/* Payment Methods */}
      <section>
        <h2>Payment Methods</h2>
        {customer.paymentMethods.length > 0 ? (
          <ul>
            {customer.paymentMethods.map((method, index) => (
              <li key={index}>{method.type} - **** **** **** {method.lastFourDigits}</li> // Customize display as needed
            ))}
          </ul>
        ) : (
          <p>No payment methods found.</p>
        )}
      </section>
    </div>
  );
};

export default CustomerDetails;
