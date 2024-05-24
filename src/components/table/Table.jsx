import React from 'react'
import './table.scss'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const TableComponent = () => {
const rows = [
  {
    id: 1,
    product: "Anti-Aging Serum",
    img: "https://clabane.com/cdn/shop/products/temp_w7uC1Ff.webp?v=1709935329&width=360",
    customer: "Jane Doe",
    date: "15 Mar",
    amount: 120.00,
    method: "Credit Card",
    status: "Approved"
  },
  {
    id: 2,
    product: "Vitamin C Serum",
    img: "https://clabane.com/cdn/shop/products/Clabane-MD-Cracked-Skin-Softening-Cream-Sample.webp?v=1676146170&width=360",
    customer: "John Smith",
    date: "10 Apr",
    amount: 75.00,
    method: "PayPal",
    status: "Pending"
  },
  {
    id: 3,
    product: "Hyaluronic Acid",
    img: "https://clabane.com/cdn/shop/products/Clabane-Organics-Acne-Bar-2.jpg?v=1674058736&width=360",
    customer: "Emily Clark",
    date: "21 Feb",
    amount: 95.00,
    method: "Bank Transfer",
    status: "Shipped"
  },
  {
    id: 4,
    product: "Retinol Cream",
    img: "https://clabane.com/cdn/shop/products/temp_w7uC1Ff.webp?v=1709935329&width=360",
    customer: "Michael Brown",
    date: "05 Mar",
    amount: 110.00,
    method: "Credit Card",
    status: "Approved"
  },
  {
    id: 5,
    product: "Sunscreen SPF 50",
    img: "https://clabane.com/cdn/shop/products/Clabane-MD-Cracked-Skin-Softening-Cream-Sample.webp?v=1676146170&width=360",
    customer: "Sarah Lee",
    date: "30 Mar",
    amount: 45.00,
    method: "Debit Card",
    status: "Pending"
  },
  {
    id: 6,
    product: "Facial Cleanser",
    img: "https://clabane.com/collections/all/products/clabane-organics-acne-control-cream",
    customer: "David Wilson",
    date: "12 Apr",
    amount: 60.00,
    method: "Credit Card",
    status: "Shipped"
  },
  {
    id: 7,
    product: "Moisturizing Cream",
    img: "https://clabane.com/cdn/shop/products/temp_i8kwemM.webp?v=1707740515&width=360",
    customer: "Anna Johnson",
    date: "23 Feb",
    amount: 80.00,
    method: "PayPal",
    status: "Approved"
  },
  {
    id: 8,
    product: "Exfoliating Scrub",
    img: "https://clabane.com/cdn/shop/products/Clabane-Refine-and-Glow-Body-Milk-with-Vanilla-Essence-Sample.webp?v=1676145207&width=360",
    customer: "James Anderson",
    date: "18 Mar",
    amount: 55.00,
    method: "Bank Transfer",
    status: "Pending"
  },
  {
    id: 9,
    product: "Eye Cream",
    img: "https://clabane.com/cdn/shop/products/Clabane-Organics-Natural-Skin-Care-Oil-output.webp?v=1685365832&width=360",
    customer: "Mary Martinez",
    date: "08 Apr",
    amount: 70.00,
    method: "Credit Card",
    status: "Approved"
  },
  {
    id: 10,
    product: "Lip Balm",
    img: "https://clabane.com/cdn/shop/products/temp_w7uC1Ff.webp?v=1709935329&width=360",
    customer: "Christopher Taylor",
    date: "27 Feb",
    amount: 20.00,
    method: "Debit Card",
    status: "Shipped"
  }
];
  return (
    <TableContainer component={Paper} className='table'>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
            >
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                    <img src={row.img} alt="" className='image'/>
                    {row.product}
                </div>                                
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableComponent