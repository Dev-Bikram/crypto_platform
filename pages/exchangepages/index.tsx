import { useQuery } from 'react-query';
import { fetchExchangesList, fetchExchangeDetails } from '../../services/coinApi';
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper , TablePagination} from '@mui/material';
import Link from 'next/link';
import Wrapper from '@/Layout/wrapper';
import React from 'react';

const Index: React.FC = () => {

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);


  const { data: exchanges, isLoading } = useQuery('exchanges', fetchExchangesList);

  // Add logic for navigating to exchange details page

  if (isLoading) {
    return <p>Loading...</p>;
    }
    
    interface Exchange {
   exchangeId : String;
   id: string;
   name: string;
   priceUsd: Number;
   rank: String;
   percentTotalVolume: String;
   volumeUsd: String;
   tradingPairs: String;


  
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
          <h1 style={{textAlign: "center"}}>Exchanges Page</h1>
                    <Link href={'/'} >Back</Link>
                    <Link href={'/MarketPage'} >Next</Link>
          <TableContainer component={Paper}>
      <Table>
                  <TableBody>
                      <TableRow>
           <TableCell>ID</TableCell>
           <TableCell>RANKS</TableCell>
           <TableCell>TOTAL-VOLUME(%)</TableCell>
           <TableCell>VOLUME($)</TableCell>
           <TableCell style={{ color: 'red' }}>TRADING-PAIRS</TableCell>
              </TableRow>
                      
     
        {exchanges
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((exchange : Exchange ) => (
           <TableRow key={exchange.id}>
                <TableCell>{exchange.exchangeId}</TableCell>
                <TableCell>
                <Link href={`exchangepages/${exchange.exchangeId}`}>
                {exchange.rank}
                </Link>
                </TableCell>
              <TableCell>{exchange.percentTotalVolume}</TableCell>
                <TableCell>{exchange.volumeUsd}</TableCell>
                <TableCell  style={{ color: 'red' }}>{exchange.tradingPairs}</TableCell>
              </TableRow>
        ))}
                      
                  </TableBody>
              </Table>
              </TableContainer>

              <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={exchanges.length}
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
