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
  IconButton,
} from '@mui/material';

import AddIcon from '@mui/icons-material/Add';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import AddPackageModal from '../components/AddPackageModal/AddPackageModal';
import { useAppContext } from '../context/context';

const PackageList = () => {
  let { packages, removePackage, showModal, displayModal, moveUp, moveDown } =
    useAppContext();

  packages = packages.sort((a, b) => a.shippingOrder - b.shippingOrder);

  return (
    <>
      <TableContainer
        component={Paper}
        style={{
          minWidth: 'fit-content',
          maxWidth: '600px',
          margin: '40px auto',
        }}
      >
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow align='center'>
              <TableCell align='center'>id</TableCell>
              <TableCell align='center'>Customer Id</TableCell>
              <TableCell align='center'>Weight</TableCell>
              <TableCell align='center'>Price</TableCell>

              <TableCell align='center'>
                <IconButton
                  onClick={() => displayModal()}
                  size='large'
                  edge='start'
                  color='inherit'
                  aria-label='menu'
                >
                  <AddIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {packages.length > 0 ? (
              packages.map((row, index) => {
                return (
                  <TableRow
                    key={index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align='center' component='th' scope='row'>
                      {row.id}
                    </TableCell>
                    <TableCell align='center'>{row.customerid}</TableCell>
                    <TableCell align='center'>{row.weight}</TableCell>
                    <TableCell align='center'>{row.price}</TableCell>
                    <TableCell align='center'>
                      <Button
                        onClick={() => removePackage(row.id)}
                        variant='contained'
                      >
                        Delete
                      </Button>
                      <Button
                        disabled={index === 0}
                        onClick={() => moveUp(index)}
                      >
                        <ArrowUpwardIcon />
                      </Button>
                      <Button
                        disabled={index === packages.length - 1}
                        onClick={() => moveDown(index)}
                      >
                        <ArrowDownwardIcon />
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
      {showModal && <AddPackageModal />}
    </>
  );
};

export default PackageList;
