export const productColumns = [
    {field: "id", headerName: "ID", width: 70},
    {
        field: "name", headerName:"Name", width: 230, renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="avatar"/>
                    {params.row.username}
                </div>
            );
        },
    },
    {
        field: "price", headerName: "Price", width: 120    
    },
    {
        field: "category", headerName: "Category", width: 230    
    },
    {
        field: "sold", headerName: "Sold", width: 120    
    },
    {
        field: "stock", headerName: "Stock", width: 160,
        renderCell:(params) => {
            return (
                <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>                
            )
        }
    },
];
