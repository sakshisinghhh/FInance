import { IconButton } from '@mui/material';
import React from 'react'
import { IoReorderThreeOutline } from "react-icons/io5";
import { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography'



const Financialbar = () => {
    const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen)
  }
  const handleLinkClick = (link) => (event) => {
    
    event.stopPropagation(); 
    window.location.href = link;
  }
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>


      <List>
        {[
          { text: 'Mutual Funds', link: 'https://lxme.in/financial-calculators/compound-interest-calculator/' },
          { text: 'Public Provident Fund (PPF)', link: 'https://groww.in/p/savings-schemes/public-provident-fund-ppf' },
          { text: 'Sukanya Samriddhi Yojana (SSY)', link: 'https://groww.in/calculators/sukanya-samriddhi-yojana-calculator' },
          { text: 'National Pension System (NPS)', link: 'https://www.financialservices.gov.in/beta/en/nps' },
          { text: 'Gold Investments', link: 'https://groww.in/p/gold-investment' },
          { text: 'Stocks & Equities', link: 'https://www.nseindia.com/' },
          { text: 'Fixed Deposits', link: 'https://www.etmoney.com/fixed-deposit' },
          { text: 'Real Estate', link: 'https://www.nseindia.com/' },
          { text: 'Unit Linked Insurance Plans(ULIPs)', link: 'https://www.iciciprulife.com/ulip-plans/unit-linked-insurance-plans/icici-pru-signature-ulip-calculator.html?UID=35039&cid=Search:Bing::Text:DM:SIG:Bing_IPRU-Search-Generic_ULIP-EM-RX-35039:signature_invest_debt_equity_lc99::Eng::35039:cpc:::&keyword=ulip&matchtype=e&msclkid=76f7359408da15b7dc8e528e1ca139f4&utm_source=bing&utm_medium=cpc&utm_campaign=Bing_IPRU-Search-Generic_ULIP-EM-RX-35039&utm_term=ulip&utm_content=Invest%20ULIP' },
          { text: 'Recurring Deposits', link: 'https://groww.in/recurring-deposit' },
        ].map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={handleLinkClick(item.link)}>
              
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      
    </Box>
  );
  return (
    <div style={{display:"flex", justifyContent:"space-between"}}>
        <div>
            <Typography></Typography>
        </div>
        
        <div >
        <Typography variant='h3' align='center' sx={{marginBottom:'20px',textAlign:'center',color:'#bf1f61'}}>Financial Management</Typography>
        
        
        
        </div>
        <div>
        <IconButton aria-label='linesbutton' sx={{ 
          padding: '4px', 
          border: '2px solid black', 
          marginRight:'4px',
          marginBottom:'44px'
          
        }} onClick={toggleDrawer(true)}>
        
            <IoReorderThreeOutline/>
        </IconButton>
        <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
      </div>
    </div>
  )
}

export default Financialbar