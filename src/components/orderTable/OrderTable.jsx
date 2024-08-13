import './orderTable.scss'
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../datatablesource';
import { orderColumns } from './orderTableHeader';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAllOrders, getOrdersByCustomer, updateOrderStatus} from '../../api/orderApi';
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";


const OrderTable = () => {

  const { token } = useSelector((state) => state.auth);

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data =  await getAllOrders(token);
        const dataWithId =  data.map((item) => ({id: item._id, ...item}));
        setOrders(dataWithId);
      } catch(error) {
          console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
    console.log(orders);
  }, []);

    const actionColumn = [
        {
            field: "action", 
            headerName: "Action", 
            width: 200, 
            renderCell: (params) => {
            return(
                <div className='cellAction'>
                  <Link to={`/orders/${params.row.id}`} style={{textDecoration: 'none'}}>
                    <div className="viewButton">Open</div>
                    </Link>
                </div>
            )
        },
    },
];


  return (
    <div className='datatable'>
      <div className="dataTableTitle">
        Add New Order
        <Link to="/orders/new" style={{textDecoration: 'none'}} className='link'>
          Add New
        </Link>
      </div>
         <DataGrid
        rows={orders}
        columns={orderColumns.concat(actionColumn)}
        getRowId={(row) => row._id}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[10, 20]}
        checkboxSelection
      />
    </div>
  )
}

export default OrderTable