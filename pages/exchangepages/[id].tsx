import { useQuery } from 'react-query';
import {fetchExchangeDetails} from '../../services/coinApi';
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@mui/material';
import Link from 'next/link';
import Wrapper from '@/Layout/wrapper';
import { useRouter } from 'next/router';


const ExchangeDetails: React.FC = () => {
  const router = useRouter();
  const {id} = router.query;
  console.log(id);

  
  const { data, isLoading } = useQuery({
    queryKey : [`details-${id}`],
    queryFn : () => fetchExchangeDetails (id),
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
          <h1 style={{textAlign: "center"}}>Exchange Details Page</h1>
                    <Link href={'/exchangepages'} >Back</Link>
                    
          <TableContainer component={Paper}>
      <Table>
                            <TableBody>
                                
                                <TableRow>
           <TableCell>ID</TableCell>
           <TableCell>NAME</TableCell>
           <TableCell>RANK</TableCell>
           <TableCell>Trading-Pairs</TableCell>
           <TableCell style={{ color: 'red' }}>SOCKET</TableCell>
              </TableRow>
                      
    
        
            <TableRow>
                <TableCell>{data?.id}</TableCell>
              <TableCell>{data?.name}</TableCell>
              <TableCell>{data?.rank}</TableCell>
                <TableCell>{data?.tradingPairs}</TableCell>
                <TableCell  style={{ color: 'red' }}>{data?.socket}</TableCell>
              </TableRow>
        
              
                  </TableBody>
              </Table>
              </TableContainer>
                </div>
            </Wrapper>
        </>
  );
};

export default ExchangeDetails;
