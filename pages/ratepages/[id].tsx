import { QueryClient, useQuery } from 'react-query';
import {fetchRateDetails} from '../../services/coinApi';
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper, Typography } from '@mui/material';
import Link from 'next/link';
import Wrapper from '@/Layout/wrapper';
import { useRouter } from 'next/router';
import { BarChart } from '@mui/x-charts/BarChart';
import { dehydrate } from 'react-query';



// export async function getServerSideProps(context : any) {
//   const {id} = context.query
//   const queryClient = new QueryClient()

//   await queryClient.prefetchQuery({
//     queryKey : [`details-${id}`],
//     queryFn : () => fetchRateDetails(id),
//   })
//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//     },
//   }
// }


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

    // const chartData = {
    //   labels: ['Label1', 'Label2', 'Label3', 'Label4', 'Label5'],
    //   datasets: [
    //     {
    //       label: 'Rate History',
    //       data: [50, 55, 60, 65, 70],
    //       borderColor: 'rgb(75, 192, 192)',
    //       tension: 0.1,
    //     },
    //   ],
    // };
  
    // const chartOptions = {
    //   scales: {
    //     x: {
    //       type: 'category',
    //       labels: ['Label1', 'Label2', 'Label3', 'Label4', 'Label5'],
    //     },
    //     y: {
    //       type: 'linear',
    //       position: 'left',
    //     },
    //   },
    // };

    
  
   

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


              {/* <div style={{ marginTop: '20px' }}>
            <Typography variant="h6">Rate Chart</Typography>
            <Link data={chartData} options={chartOptions} />
          </div> */}

<BarChart
      series={[
        { data: [35, 44, 24, 34] },
        { data: [51, 6, 49, 30] },
        { data: [15, 25, 30, 50] },
        { data: [60, 50, 15, 25] },
      ]}
      height={290}
      xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]}
      margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
    />

                </div>
            </Wrapper>
        </>
  );
};

export default RateDetails;
