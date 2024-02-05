import { useQuery } from 'react-query';
import {fetchRateDetails} from '../../services/coinApi';
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@mui/material';
import Link from 'next/link';
import Wrapper from '@/Layout/wrapper';
import { useRouter } from 'next/router';


const RateDetails: React.FC = () => {
  const router = useRouter();
  const {id} = router.query;
  console.log(id);

  
  const { data, isLoading } = useQuery({
    queryKey : [`details-${id}`],
    queryFn : () => fetchRateDetails (id),
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
          <h1 style={{textAlign: "center"}}>Rate Details Page</h1>
                    <Link href={'/ratepages'} >Back</Link>
                    
          <TableContainer component={Paper}>
      <Table>
                            <TableBody>
                                
                                <TableRow>
           <TableCell>ID</TableCell>
           <TableCell>SYMBOL</TableCell>
           <TableCell>Currency-symbol</TableCell>
           <TableCell>TYPE</TableCell>
           <TableCell style={{ color: 'red' }}>RATE($)</TableCell>
              </TableRow>
                      
    
        
            <TableRow>
                <TableCell>{data?.id}</TableCell>
              <TableCell>{data?.symbol}</TableCell>
              <TableCell>{data?.currencySymbol}</TableCell>
                <TableCell>{data?.type}</TableCell>
                <TableCell  style={{ color: 'red' }}>{data?.rateUsd}</TableCell>
              </TableRow>
        
              
                  </TableBody>
              </Table>
              </TableContainer>
                </div>
            </Wrapper>
        </>
  );
};

export default RateDetails;
