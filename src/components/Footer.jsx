// src/components/Footer.js
import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

function Footer() {
  return (
    <Box 
      sx={{
        backgroundColor: '#D63384',
        color: '#fff',
        padding: 3,
        textAlign: 'center',
        position: 'relative',
        bottom: 0,
        width: '100%',
      }}
    >
      <Typography variant="h6" gutterBottom>
        SheFunds: Unlocking Financial Opportunities
      </Typography>
      <Box sx={{ marginBottom: 2 }}>
        <Link href="/" color="inherit" sx={{ marginX: 1 }}>
          Home
        </Link>
        <Link href="/about" color="inherit" sx={{ marginX: 1 }}>
          About
        </Link>
        <Link href="/services" color="inherit" sx={{ marginX: 1 }}>
          Services
        </Link>
        <Link href="/contact" color="inherit" sx={{ marginX: 1 }}>
          Contact
        </Link>
      </Box>
      <Box>
        <Typography variant="body2">
          Follow us:
        </Typography>
        <Link href="https://facebook.com" color="inherit" sx={{ margin: 1 }}>
          <Facebook />
        </Link>
        <Link href="https://twitter.com" color="inherit" sx={{ margin: 1 }}>
          <Twitter />
        </Link>
        <Link href="https://instagram.com" color="inherit" sx={{ margin: 1 }}>
          <Instagram />
        </Link>
      </Box>
      <Typography variant="body2" sx={{ marginTop: 2 }}>
        © {new Date().getFullYear()} SheFunds. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
