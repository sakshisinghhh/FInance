import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        SHE FUNDS
      </Typography>
      <List>
        {['Home', 'Loan Application', 'Financial Literacy', 'Budget Tool', 'Community'].map((page, index) => (
          <ListItem button key={index}>
            <ListItemText primary={page} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#D63384' }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            SheFunds
          </Typography>

          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button component={Link} to="/" sx={{ color: '#fff' }}>
              Home
            </Button>
            <Button component={Link} to="/loan-application" sx={{ color: '#fff' }}>
              Loan Application
            </Button>
            <Button component={Link} to="/financial-literacy" sx={{ color: '#fff' }}>
              Financial Literacy
            </Button>
            <Button component={Link} to="/budget-tool" sx={{ color: '#fff' }}>
              Budget Tool
            </Button>
            <Button component={Link} to="/community" sx={{ color: '#fff' }}>
              Community
            </Button>
          </Box>

          <IconButton color="inherit" aria-label="open drawer" edge="end" onClick={handleDrawerToggle} sx={{ display: { xs: 'block', sm: 'none' } }}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}

export default Header;

