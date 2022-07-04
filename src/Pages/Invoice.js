import React from 'react';
import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import { useAppContext } from '../context/context';
import {
  currentDate,
  getPkgsWeights,
  getWeightsAsNumbers,
  sum,
  getPkgsPrices,
} from '../utils/importantFun';

const Invoice = () => {
  let { customers, packages } = useAppContext();
  const { id: customerId } = useParams();

  let customerName = customers.filter((item) => item.id === Number(customerId));

  const getCustomerPkgs = () =>
    packages.filter((e) => e.customerid === Number(customerId));

  let customerPkgs = getCustomerPkgs();

  customerPkgs = customerPkgs
    .map((item) => {
      return { id: item.id, weight: item.weight, price: item.price };
    })
    .sort((a, b) => a.id - b.id);

  console.log(customerPkgs);

  const pkgsWeights = getPkgsWeights(customerPkgs);
  const weightsAsNumbers = getWeightsAsNumbers(pkgsWeights);
  const pkgsPrices = getPkgsPrices(customerPkgs);

  const sumWeights = `${sum(weightsAsNumbers)}kg`;
  const sumPrices = sum(pkgsPrices);

  return (
    <>
      <Grid container spacing={3} textAlign='center' padding='20px'>
        <Grid item xs>
          <h2>{currentDate()}</h2>
          <h3>{customerName.map((item) => item.name)}</h3>
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs>
          <h2>Invoice</h2>
          <h4>{Date.now()}</h4>
        </Grid>
      </Grid>

      <TableContainer
        component={Paper}
        style={{
          minWidth: 'fit-content',
          maxWidth: '1030px',
          margin: '0 auto',
        }}
      >
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell align='center'>ID</TableCell>
              <TableCell align='center'>Weight</TableCell>
              <TableCell align='center' style={{ backgroundColor: '#DDD' }}>
                Price
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customerPkgs.map((item, index) => (
              <TableRow key={index}>
                <TableCell align='center'>{item.id}</TableCell>
                <TableCell align='center'>{item.weight}</TableCell>
                <TableCell align='center' style={{ backgroundColor: '#DDD' }}>
                  {item.price}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell align='center'></TableCell>
              <TableCell align='center'>{sumWeights}</TableCell>
              <TableCell align='center' style={{ backgroundColor: '#DDD' }}>
                Total: {sumPrices}
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
      <div>
        <p style={{ textAlign: 'center' }}>
          You received {customerPkgs.length} packages
        </p>
        <p style={{ textAlign: 'center' }}> Thank you for using our services</p>
      </div>
    </>
  );
};

export default Invoice;
