export const productColumns = [
    {field: "id", headerName: "ID", width: 70},
    {
        field: "name", headerName:"Name", width: 230, renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.image} alt="avatar"/>
                    {params.row.name}
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
                <div className={`cellWithStatus ${getStockStatus(params.row.stock)}`}>{params.row.stock}</div>                
            )
        }
    },
];

function getStockStatus(stock) {
    if(stock === 0) {
        return "depleted";
    }
    else if (stock < 10) {
        return "depleting"
    }
    else {
        return "stocked";
    }
}

