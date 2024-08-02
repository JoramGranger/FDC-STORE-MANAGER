/* const imageUrl = `http://localhost:5000/${params.row.image.replace(/\\/g, '/')}`; */
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
        field: "isVerified", headerName: "Verified", width: 120    
    },
    {
        field: "createdAt", headerName: "Joined", width: 120    
    }
];

