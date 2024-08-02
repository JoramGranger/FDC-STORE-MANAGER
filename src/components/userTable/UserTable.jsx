import './userTable.scss'
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { userColumns } from './userTableHeader';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAllUsers, getUserById } from '../../api/userApi';
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";


const UserTable = () => {

  const { token } = useSelector((state) => state.auth);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data =  await getAllUsers(token);
        const dataWithId =  data.map((item) => ({id: item._id, ...item}));
        setUsers(dataWithId);
      } catch(error) {
          console.error('Error fetching Users:', error);
      }
    };

    fetchUsers();
    /* console.log(users); */
  }, []);

  /* const handleDelete = async (userId) => {
    try {
      await deleteUser(userId, token);
      setUsers(users.filter((user) => user.id !== userId));
    } catch (error) {
      console.log('Error deleting user:', error);
    }
  } */

    const actionColumn = [
        {
            field: "action", 
            headerName: "Action", 
            width: 200, 
            renderCell: (params) => {
            return(
                <div className='cellAction'>
                  <Link to={`/users/${params.row.id}`} style={{textDecoration: 'none'}}>
                    <div className="viewButton">Open</div>
                    </Link>
                    {/* <div className="deleteButton" onClick={() => handleDelete(params.row.id)}>
                      Delete
                    </div> */}
                </div>
            )
        },
    },
];


  return (
    <div className='datatable'>
      <div className="dataTableTitle">
        Add New User
        <Link to="/users/new" style={{textDecoration: 'none'}} className='link'>
          Add New
        </Link>
      </div>
         <DataGrid
        rows={users}
        columns={userColumns.concat(actionColumn)}
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

export default UserTable