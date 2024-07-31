import './productTable.scss'
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../datatablesource';
import { productColumns } from './productTableHeader';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProducts } from '../../api/productApi';


const ProductTable = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data =  await getProducts();
        const dataWithId =  data.map((item) => ({id: item._id, ...item}));
        setProducts(dataWithId);
      } catch(error) {
          console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
    console.log(products);
  }, []);

    const actionColumn = [
        {
            field: "action", 
            headerName: "Action", 
            width: 200, 
            renderCell: (params) => {
            return(
                <div className='cellAction'>
                  <Link to={`/products/${params.row.id}`} style={{textDecoration: 'none'}}>
                    <div className="viewButton">Open</div>
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
        rows={products}
        columns={productColumns.concat(actionColumn)}
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

export default ProductTable