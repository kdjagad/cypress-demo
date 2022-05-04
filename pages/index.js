import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import Link from 'next/link';
import Button from '@mui/material/Button';


export default function DataGridDemo() {
  const columns = [
    {
      field: 'id', headerName: 'ID', valueGetter: params => {
        return params.row.login.uuid;
      }, minWidth: 150
    },
    {
      field: 'name', headerName: 'First Name', valueGetter: params => {
        return params.row.name.first;
      }, minWidth: 150
    },
    {
      field: 'name', headerName: 'Last Name', valueGetter: params => {
        return params.row.name.last;
      }, minWidth: 150
    },
    {
      field: 'gender', headerName: 'Gender', minWidth: 150
    },
    {
      field: 'email', headerName: 'Email', minWidth: 150
    },
    {
      headerName: 'Actions', minWidth: 150, renderCell: params => {
        return (
          <button>Delete</button>
        )
      }
    },

  ];
  const [rows, setRows] = React.useState([]);

  React.useEffect(() => {
    getUsers();
  }, [])

  const getUsers = async () => {
    try {
      const res = await axios.get('https://randomuser.me/api/?results=100');
      const { data } = res;
      console.log("data", data);
      setRows(data.results);
    } catch (error) {
      console.log("user error", error);
    }
  }

  return (
    <Paper elevation={4} style={{ marginTop: 25 }}>
      <h1>Users</h1>
      
        <Link href="/user/add">
          <Button variant="contained">Add User</Button>
        </Link>
      
      <div style={{ height: 'auto', width: '100%' }}>
        {
          rows.length > 0 &&
          <DataGrid
            rows={rows}
            autoHeight={true}
            // autoPageSize
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[5, 10, 50]}
            checkboxSelection
            disableSelectionOnClick
            getRowId={row => row.login.uuid}

          />
        }
      </div>
    </Paper>
  );
}