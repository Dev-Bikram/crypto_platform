import { useQuery } from 'react-query';
import { fetchCoinMarket} from '../../../services/coinApi';
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@mui/material';
import Link from 'next/link';
import Wrapper from '@/Layout/wrapper';
import { useRouter } from 'next/router';

const CoinMarket: React.FC = () => {
  const router = useRouter();
  const {id} = router.query;
  console.log(id);
    
  const { data: markets, isLoading } = useQuery({
    queryKey : [`markets-${id}`],
    queryFn : () => fetchCoinMarket(id),
    enabled : id ? true : false
  })

 

  if (isLoading) {
    return <p>Loading...</p>;
    }
    
   interface Market {
    id: string;
    priceUsd: String;
    time: string;
    exchangeId: String;
    quoteId: String;
    quoteSymbol: String;
    volumeUsd24Hr: string;
    volumePercent: String;


  }





  
   

    return (
        <>
             <Wrapper>
    <div>
          <h1 style={{textAlign: "center"}}>Coin Market Page</h1>
                    <Link href={'/'} >Back</Link>
                    
          <TableContainer component={Paper}>
      <Table>
        <TableBody>
                                
        <TableRow>
        <TableCell>Ex-ID</TableCell>
           <TableCell>Quote-ID</TableCell>
           <TableCell>Quote-SYMBOL</TableCell>
           <TableCell>Volume</TableCell>
           <TableCell style={{ color: 'red' }}>Price($)</TableCell>
           <TableCell style={{ color: 'red' }}>Volume(%)</TableCell>
        </TableRow>
                      
    
              {markets?.map((market : Market) => (
            <TableRow key={market?.id}>
                <TableCell>{market?.exchangeId}</TableCell>
                <TableCell>{market?.quoteId}</TableCell>
                <TableCell>{market?.quoteSymbol}</TableCell>
                <TableCell style={{ color: 'red' }}>{market?.volumeUsd24Hr}</TableCell>
                <TableCell  style={{ color: 'red' }}>{market?.priceUsd}</TableCell>
                <TableCell style={{ color: 'red' }}>{market?.volumePercent}</TableCell>
              
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

export default CoinMarket;
