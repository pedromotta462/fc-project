"use client";

import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  { field: 'age', headerName: 'Age', type: 'number', width: 90 },
  { field: 'fullName', headerName: 'Full name', width: 160, valueGetter: (params) => `${params.row.firstName || ''} ${params.row.lastName || ''}` },
  { field: 'email', headerName: 'Email', width: 200 },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, email: 'jon@example.com' },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, email: 'cersei@example.com' },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, email: 'jaime@example.com' },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, email: 'arya@example.com' },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null, email: 'daenerys@example.com' },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150, email: 'melisandre@example.com' },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, email: 'clifford@example.com' },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, email: 'frances@example.com' },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, email: 'roxie@example.com' },
];

const DataTableContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  height: 400,
  width: '100%',
  backgroundColor: (theme) => theme.palette.background.paper,
});

const Title = styled(Typography)({
  marginBottom: 16,
  fontWeight: 'bold',
});

export default function DataTable() {
  return (
    <DataTableContainer>
      <Title variant="h4" component="div">
        Tickets
      </Title>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        components={{
          Toolbar: GridToolbar,
        }}
      />
    </DataTableContainer>
  );
}


