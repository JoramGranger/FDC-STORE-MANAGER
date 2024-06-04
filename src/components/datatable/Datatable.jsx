import './datatable.scss'
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../datatablesource';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const Datatable = () => {

  const [data, setData] = useState(userRows)

    const actionColumn = [
        {
            field: "action", 
            headerName: "Action", 
            width: 200, 
            renderCell: () => {
            return(
                <div className='cellAction'>
                  <Link to="/users/test" style={{textDecoration: 'none'}}>
                    <div className="viewButton">View</div>
                    </Link>
                    <div className="deleteButton">Delete</div>
                </div>
            )
        },
    },
];


  return (
    <div className='datatable'>
      <div className="dataTableTitle">
        Add New Product
        <Link to="/products/new" style={{textDecoration: 'none'}} className='link'>
          Add New
        </Link>
      </div>
         <DataGrid
        rows={data}
        columns={userColumns.concat(actionColumn)}
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

export default Datatable