import React from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Paper,
} from '@mui/material';

import { Link } from 'react-router-dom';
import { useAppContext } from '../context/context';

const CustomerList = () => {
  const { customers, removeCustomer } = useAppContext();

  return (
    <TableContainer
      component={Paper}
      style={{
        minWidth: 'fit-content',
        maxWidth: '1030px',
        margin: '40px auto',
      }}
    >
      <Table aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers.length > 0 ? (
            customers.map((row) => {
              return (
                <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component='th' scope='row'>
                    {row.id}
                  </TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>
                    <Button
                      variant='contained'
                      component={Link}
                      to={`/invoice/${row.id}`}
                    >
                      Create Invoice
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant='contained'
                      onClick={() => removeCustomer(row.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })
          ) : (
            <TableRow>
              <TableCell>No Data</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomerList;
