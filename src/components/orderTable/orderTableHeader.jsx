/* const imageUrl = `http://localhost:5000/${params.row.image.replace(/\\/g, '/')}`; */

import { formatDateAndCalculateDays } from '../utils/userDetailsFormatting';

export const orderColumns = [
    {field: "id", headerName: "ID", width: 100},
    {field: "totalAmount", headerName: "Amount", width: 100},
    {
        field: "items", headerName: "Items", width: 100,
        renderCell:(params) => {
            return (
                <div>{params.row.items.length}</div>              
            )
        }
    },
    {
        field: "createdAt", headerName: "Date", width: 150,
        renderCell:(params) => {
            return (
                <div className>{formatDateAndCalculateDays(params.row.createdAt)[0]}</div>           
            )
        }  
    },
    {
        field: "status", headerName: "Status", width: 150,
        renderCell:(params) => {
            return (
                <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>             
            )
        }
    },
    {
        field: "paymentMethod", headerName: "Payment Method", width: 160    
    },
    {
        field: "paymentStatus", headerName: "Payment Status", width: 160,
        renderCell:(params) => {
            return (
                <div className={`cellWithPaymentStatus ${params.row.paymentStatus}`}>{params.row.paymentStatus}</div>                
            )
        }
    },
];