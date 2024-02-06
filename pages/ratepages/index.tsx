import { useQuery } from 'react-query';
import { fetchRateList } from '../../services/coinApi';
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper, Button, TablePagination } from '@mui/material';
import Link from 'next/link';
import Wrapper from '@/Layout/wrapper';
import React from 'react';
import { Dialog, DialogTitle, DialogContent, Typography, DialogActions } from '@mui/material';
import Grid from '@mui/material/Grid';



const Index: React.FC = () => {

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);


  const { data: rates, isLoading } = useQuery('rates', fetchRateList);


  const [selectedRate, setSelectedRate] = React.useState(null);

  const openDetailsModal = (rate: any) => {
    setSelectedRate(rate);
  };

  const closeDetailsModal = () => {
    setSelectedRate(null);
  };




  if (isLoading) {
    return <p>Loading...</p>;
  }

  interface Rate {
    id: string;
    name: string;
    priceUsd: Number;
    rank: Number;
    symbol: String;
    currencySymbol: String;
    type: String;
    rateUsd: String;
  }

  interface selectedRate {
    currencySymbol: String;
    rateUsd: String;
  }



  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  return (
    <>
      <Wrapper>
        <div>
          <h1 style={{ textAlign: "center" }}>Rate Page</h1>


          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Button variant="outlined" color="success">
                <Link href={'/'}>
                  Back
                </Link>
              </Button>

            </Grid>
            <Grid item xs={6}>
              <Button variant="outlined" color="success">
                <Link href={'/exchangepages'}>
                  Next
                </Link>
              </Button>
            </Grid>
          </Grid>




          <TableContainer component={Paper}>
            <Table>
              <TableBody>

                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>SYMBOL</TableCell>
                  <TableCell>CURRENCY_SIGN</TableCell>
                  <TableCell>TYPE</TableCell>
                  <TableCell style={{ color: 'red' }}>RATE($)</TableCell>
                  <TableCell>DETAILS</TableCell>
                </TableRow>




                {rates
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((rate: Rate) => (
                    <TableRow key={rate.id}>
                      <TableCell>{rate.id}</TableCell>
                      <TableCell>
                        <Link href={`ratepages/${rate.id}`}>
                          {rate.symbol}
                        </Link>
                      </TableCell>
                      <TableCell>{rate.currencySymbol}</TableCell>
                      <TableCell>{rate.type}</TableCell>
                      <TableCell style={{ color: 'red' }}>{rate.rateUsd}</TableCell>
                      <TableCell>

                        <Button onClick={() => openDetailsModal(rate)}>View Details</Button>

                      </TableCell>

                    </TableRow>
                  ))}

              </TableBody>
            </Table>
          </TableContainer>


          <Dialog open={Boolean(selectedRate)} onClose={closeDetailsModal}>
            <DialogTitle>Rate Details</DialogTitle>
            <DialogContent>


              {selectedRate && (

                <>
                  <Typography variant="subtitle1">{selectedRate.currencySymbol}</Typography>
                  <Typography variant="subtitle1">{selectedRate.rateUsd}</Typography>

                </>
              )}
            </DialogContent>
            <DialogActions>
              <Button onClick={closeDetailsModal}>Close</Button>
            </DialogActions>
          </Dialog>


          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rates.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />

        </div>
      </Wrapper>
    </>
  );
};

export default Index;
