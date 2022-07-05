import React from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from '@mui/material';
import { useAppContext } from '../context/context';
import {
  getPkgsWeights,
  getPkgsPrices,
  getWeightsAsNumbers,
  sum,
} from '../utils/importantFun';

const Invoices = () => {
  let { customers, packages } = useAppContext();

  customers = customers.map((item) => {
    const getCustomerPkgs = (id) => packages.filter((e) => e.customerid === id);
    const customerPkgs = getCustomerPkgs(item.id);
    const pkgsWeights = getPkgsWeights(customerPkgs);
    const pkgsPrices = getPkgsPrices(customerPkgs);
    const weightsAsNumbers = getWeightsAsNumbers(pkgsWeights);
    const sumWeights = sum(weightsAsNumbers);
    const sumPrices = sum(pkgsPrices);

    return { name: item.name, totalWeight: sumWeights, totalPrice: sumPrices };
  });

  return (
    <>
      <TableContainer
        component={Paper}
        style={{
          minWidth: 'fit-content',
          maxWidth: '700px',
          margin: '40px auto',
        }}
      >
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell align='center'>Customer Name</TableCell>
              <TableCell align='center'>Total Weight</TableCell>
              <TableCell align='center'>Total Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map((row, index) => {
              return (
                <TableRow
                  key={index}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align='center'>{row.name}</TableCell>
                  <TableCell align='center'>{row.totalWeight}</TableCell>
                  <TableCell align='center'>{row.totalPrice}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Invoices;
