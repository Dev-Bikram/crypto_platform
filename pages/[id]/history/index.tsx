import { useQuery } from 'react-query';
import {fetchCoinHistory} from '../../../services/coinApi';
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@mui/material';
import Link from 'next/link';
import Wrapper from '@/Layout/wrapper';
import { useRouter } from 'next/router';

const CoinHistory: React.FC = () => {
  const router = useRouter();
  const {id} = router.query;
  console.log(id);
    
  const { data: historys, isLoading } = useQuery({
    queryKey : [`historys-${id}`],
    queryFn : () => fetchCoinHistory(id),
    enabled : id ? true : false
  })

 

  if (isLoading) {
    return <p>Loading...</p>;
    }
    
   interface History {
    id: string;
    priceUsd: String;
    time: string;
  }





  
   

    return (
        <>
             <Wrapper>
    <div>
          <h1 style={{textAlign: "center"}}>Coin History Page</h1>
                    <Link href={'/'} >Back</Link>
                    
          <TableContainer component={Paper}>
      <Table>
        <TableBody>
                                
        <TableRow>
           <TableCell style={{ color: 'red' }}>PRICE($)</TableCell>
           <TableCell>TIME</TableCell>
           
        </TableRow>
                      
    
              {historys?.map((history : History) => (
            <TableRow key={history?.id}>
                <TableCell  style={{ color: 'red' }}>{history?.priceUsd}</TableCell>
                <TableCell>{history?.time}</TableCell>
              
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

export default CoinHistory;
