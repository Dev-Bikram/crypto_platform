import * as React from 'react';
import { useQuery } from 'react-query';
import { fetchAllCoins } from '../services/coinApi';
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper, Button, Box, TablePagination } from '@mui/material';
import Wrapper from '@/Layout/wrapper';
import Link from 'next/link';
import { useTheme } from '@emotion/react';



const Index: React.FC = () => {

const [page, setPage] = React.useState(0);
const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const { data: coins, isLoading } = useQuery('coins', fetchAllCoins);

  if (isLoading) {
    return <p>Loading...</p>;
    }
    
 interface Coin {
  id: string;
   name: string;
   rank: String;
   symbol: String;
   priceUsd: String;
   changePercent24Hr: String;
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
          <h1 style={{textAlign: "center"}}>All Coins</h1>
    <TableContainer component={Paper}>
      <Table>
       <TableBody>
         
            <TableRow>
           <TableCell>Rank</TableCell>
           <TableCell>Name</TableCell>
           <TableCell>Symbol</TableCell>
           <TableCell>Price</TableCell>
           <TableCell style={{ color: 'red' }}>Change% within 24hr</TableCell>
           <TableCell>Show-History</TableCell>
           <TableCell>Show-Market</TableCell>
              </TableRow>
          {coins
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((coin :Coin) => (
            <TableRow key={coin.id}>
              <TableCell>{coin.rank}</TableCell>
              <TableCell>
                <Link href={`/${coin.id}`}>
                {coin.name}
                </Link>
                </TableCell>
              <TableCell>{coin.symbol}</TableCell>
              <TableCell>{coin.priceUsd}</TableCell>
               <TableCell>{coin.changePercent24Hr}</TableCell>
               <TableCell>
               <Button variant="outlined" color="success">
                <Link href={`/${coin.id}/history`}>
                History
                </Link>
                </Button>
                </TableCell>
                <TableCell>
                <Button variant="outlined" color="error">
                <Link href={`/${coin.id}/market`}>
                Market
                </Link>
                </Button>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
          </TableContainer>
           
          <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={coins.length}
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
