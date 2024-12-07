// src/pages/SignIn.jsx
import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Static credentials for different roles
    const staticCredentials = {
      mentor: {
        email: 'mentor@gmail.com',
        password: 'password123',
      },
      lender: {
        email: 'lender@gmail.com',
        password: 'password123',
      },
    };

    // Check for valid credentials
    if (
      (email === staticCredentials.mentor.email && password === staticCredentials.mentor.password) ||
      (email === staticCredentials.lender.email && password === staticCredentials.lender.password)
    ) {
      // Determine the role based on email
      const role = email === staticCredentials.mentor.email ? 'mentor' : 'lender';
      console.log(`Signing in as ${role}`); // Debugging log
      navigate(`/${role}-dashboard`); // Navigate to the appropriate dashboard
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Card sx={{ width: 400, margin: 'auto', padding: 2 }}>
        <CardContent>
          <Typography variant="h5" align="center">Sign In</Typography>
          {error && <Typography color="error">{error}</Typography>}
          <form onSubmit={handleSubmit}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" variant="contained" fullWidth sx={{ marginTop: 2 }}>
              Sign In
            </Button>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SignIn;
