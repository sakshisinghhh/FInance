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
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const Newbutton= () => {
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
          { text: 'Compound Interest', link: 'https://lxme.in/financial-calculators/compound-interest-calculator/' },
          { text: 'Simple Interest', link: 'https://lxme.in/financial-calculators/simple-interest-calculator/' },
          { text: 'Home Loan EMI', link: 'https://lxme.in/financial-calculators/home-loan-emi-calculator/' },
          { text: 'Personal Loan EMI', link: 'https://lxme.in/financial-calculators/personal-loan-emi-calculator/' },
          { text: 'Car Loan EMI', link: 'https://lxme.in/financial-calculators/car-loan-calculator/' },
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
  )
}

export default Newbutton