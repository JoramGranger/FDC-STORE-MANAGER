import React from 'react';
import './itemsList.scss'; // Import the SCSS file

const ItemsList = ({ items }) => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Description</th>
            <th>Category</th>
            <th className="quantity">Quantity</th>
            <th className="price">Price</th>
            <th className="total">Total</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item._id}>
              <td>{item.product.name}</td>
              <td>{item.product.description}</td>
              <td>{item.product.category}</td>
              <td className="quantity">{item.quantity}</td>
              <td className="price">{item.price}</td>
              <td className="total">{item.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemsList;
