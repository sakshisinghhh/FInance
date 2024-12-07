import  React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const tableData = [
    {   id:1,
        loanid: "HDFC",
        name: "50",
        business: "PRIV",
        creditScore: 700,
        requestedloan: "5 lakh",
        interestrate: "11%",

    },
    {   
        id: 2,
        loanid: "ALLAHABAD",
        name: "10",
        business: "GOV",
        creditScore: 680,
        requestedloan: "5 lakh",
        interestrate: "11%",
    },
    {   
        id: 3,
        loanid: "SBI",
        name: "10",
        business: "GOV",
        creditScore: 750,
        requestedloan: "5 lakh",
        interestrate: "11%",
    },
    {   
        id: 4,
        loanid: "PNB",
        name: "20",
        business: "GOV",
        creditScore: 790,
        requestedloan: "10 lakh",
        interestrate: "10%",
        
    }
]
 const TableComp = () =>{
    return (
        <TableContainer component={Paper} >
            <Table aria-label='simple table'>
            <TableHead sx={{ backgroundColor: '#bf1f61' }}>
                <TableRow>
                    <TableCell >BANK NAME</TableCell>
                    <TableCell>BANK RANKING</TableCell>
                    <TableCell>GOV/PRIV</TableCell>
                    <TableCell>Credit Score</TableCell>
                    <TableCell>number of Loan approved</TableCell>
                    <TableCell>Interest Rate</TableCell>
                   
                </TableRow>
            </TableHead>
            <TableBody>
                {tableData.map(row=>(
                    <TableRow key={row.id} sx={{'&:last-child td,&:last-child-th':{border:0}}} >
                        <TableCell>{row.loanid}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.business}</TableCell>
                    <TableCell>{row.creditScore}</TableCell>
                    <TableCell>{row.requestedloan}</TableCell>
                    <TableCell>{row.interestrate}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TableComp;