import { useQuery } from 'react-query';
import { fetchMarketList } from '../services/coinApi';
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@mui/material';
import Link from 'next/link';
import Wrapper from '@/Layout/wrapper';


const MarketPage: React.FC = () => {
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
                    
     
        {markets.map((market:Market) => (
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
                </div>
            </Wrapper>
        </>
  );
};

export default MarketPage;
