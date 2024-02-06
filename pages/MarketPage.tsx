import { useQuery } from 'react-query';
import { fetchMarketList } from '../services/coinApi';
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper ,TablePagination} from '@mui/material';
import Link from 'next/link';
import Wrapper from '@/Layout/wrapper';
import React from 'react';


const MarketPage: React.FC = () => {

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);


  const { data: markets, isLoading } = useQuery('markets', fetchMarketList);

  if (isLoading) {
    return <p>Loading...</p>;
    }
    interface Market {
   id: string;
   name: string;
   priceUsd: String;
   rank: Number;
   exchangeId: String;
   baseSymbol: String;
   quoteSymbol: String;
   tradesCount24Hr: String;
   




  
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
                    <h1 style={{textAlign: "center"}}>Market Page</h1>
                    <Link href={'/exchangepages'} >Back</Link>
                    <br/>
                    <Link href={'/'} >Next</Link>
          <TableContainer component={Paper}>
      <Table>
                            <TableBody>
                                
                                <TableRow>
           <TableCell>ID</TableCell>
           <TableCell>SYMBOL</TableCell>
           <TableCell>CURRENCY_SIGN</TableCell>
           <TableCell>TYPE</TableCell>
           <TableCell style={{ color: 'red' }}>RATE($)</TableCell>
              </TableRow>
                    
     
        {markets
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((market:Market) => (
          <TableRow key={market.id}>
               <TableCell> {market.exchangeId}</TableCell>
                <TableCell>{market.baseSymbol}</TableCell>
                <TableCell>{market.quoteSymbol}</TableCell>
               <TableCell> {market.tradesCount24Hr}</TableCell>
                <TableCell>{market.priceUsd}</TableCell>
                
            
          </TableRow>
        ))}
            </TableBody>
              </Table>
              </TableContainer>

              <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={markets.length}
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

export default MarketPage;
