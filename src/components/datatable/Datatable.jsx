import './datatable.scss'
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../datatablesource';


const Datatable = () => {

    const actionColumn = [
        {
            field: "action", 
            headerName: "Action", 
            width: 200, 
            renderCell: () => {
            return(
                <div className='cellAction'>
                    <div className="viewButton">View</div>
                    <div className="deleteButton">Delete</div>
                </div>
            )
        },
    },
];


  return (
    <div className='datatable'>
         <DataGrid
        rows={userRows}
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