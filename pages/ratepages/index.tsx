import { useQuery } from 'react-query';
import { fetchRateList} from '../../services/coinApi';
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@mui/material';
import Link from 'next/link';
import Wrapper from '@/Layout/wrapper';
import React from 'react';


const Index: React.FC = () => {

  
  const { data: rates, isLoading } = useQuery('rates', fetchRateList);

  // Add modal logic for displaying rate details

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
    
   

    return (
        <>
             <Wrapper>
    <div>
          <h1 style={{textAlign: "center"}}>Rate Page</h1>
                    <Link href={'/'} >Back</Link>
                    <br/>
                    <Link href={'/ExchangesPage'} >Next</Link>
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

              
                      
    
        {rates.map((rate : Rate) => (
            <TableRow key={rate.id}>
                <TableCell>{rate.id}</TableCell>
              <TableCell>
              <Link href={`ratepages/${rate.id}`}>
                {rate.symbol}
                </Link>
            </TableCell>
              <TableCell>{rate.currencySymbol}</TableCell>
                <TableCell>{rate.type}</TableCell>
                <TableCell  style={{ color: 'red' }}>{rate.rateUsd}</TableCell>
                
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

export default Index;
