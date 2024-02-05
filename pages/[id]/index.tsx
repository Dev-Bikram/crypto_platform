import { useQuery } from 'react-query';
import {fetchCoinDetails} from '../../services/coinApi';
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper, Box, Grid } from '@mui/material';
import Link from 'next/link';
import Wrapper from '@/Layout/wrapper';
import { useRouter } from 'next/router';
import CoinMarket from './market';

const CoinDetails: React.FC = () => {
  const router = useRouter();
  const {id} = router.query;
  console.log(id);
    
  const { data, isLoading } = useQuery({
    queryKey : [`details-${id}`],
    queryFn : () => fetchCoinDetails(id),
    enabled : id ? true : false
  })

 

  if (isLoading) {
    return <p>Loading...</p>;
    }
    
   interface Detail {
    id: string;
    name: string;
    priceUsd: String;
    rank: Number;
    symbol: String;
    supply: String;
    maxSupply: Number;


  
    }


  
   

    return (
        <>
             <Wrapper>
    <div>
          <h1 style={{textAlign: "center"}}>Coin Details Page</h1>
                    <Link href={'/'} >Back</Link>
                    
          <TableContainer component={Paper}>
      <Table>
                            <TableBody>
                                
                                <TableRow>
           <TableCell>ID</TableCell>
           <TableCell>SYMBOL</TableCell>
           <TableCell>SUPPLY</TableCell>
           <TableCell>MAX-SUPPLY</TableCell>
           <TableCell style={{ color: 'red' }}>PRICE($)</TableCell>
              </TableRow>
                      
    
        
            <TableRow>
                <TableCell>{data?.id}</TableCell>
              <TableCell>{data?.symbol}</TableCell>
              <TableCell>{data?.supply}</TableCell>
                <TableCell>{data?.maxSupply}</TableCell>
                <TableCell  style={{ color: 'red' }}>{data?.priceUsd}</TableCell>
              </TableRow>
        
              
                  </TableBody>
              </Table>
              </TableContainer>

              <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          
        </Grid>
        <Grid item xs={6}>
         
        </Grid>
        </Grid>
        </Box>

                </div>
            </Wrapper>
        </>
  );
};

export default CoinDetails;
