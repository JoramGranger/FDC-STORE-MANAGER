/* const imageUrl = `http://localhost:5000/${params.row.image.replace(/\\/g, '/')}`; */

import { formatDateAndCalculateDays, getVerificationStatus } from "../utils/userDetailsFormatting";

export const userColumns = [
    {field: "name", headerName: "Name", width: 100},
    {
        field: "email", headerName: "Email", width: 400    
    },
    {
        field: "phone", headerName: "Phone", width: 120    
    },
    {
        field: "role", headerName: "Role", width: 120    
    },
    {
        field: "isVerified", headerName: "Verified", width: 120,
        renderCell:(params) => {
            return (
                <div className={`cellWithVerification ${getVerificationStatus(params.row.isVerified)}`}>{params.row.isVerified ? 'Verified' : 'Not Verified'}</div>              
            )
        }   
    },
    {
        field: "createdAt", headerName: "Joined", width: 200,
        renderCell:(params) => {
            return (
                <div className>{formatDateAndCalculateDays(params.row.createdAt)[0]}</div>           
            )
        }  
    }
];


  

