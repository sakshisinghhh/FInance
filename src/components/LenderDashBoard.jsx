// src/pages/LenderDashboard.jsx
import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Avatar, Button } from '@mui/material';

// Sample lender profile data
const lenderProfile = {
  name: 'John Doe',
  role: 'Senior Lender',
  email: 'john.doe@example.com',
  institution: 'ABC Bank',
  photo: 'https://via.placeholder.com/150', // Placeholder image
};

const LenderDashboard = () => {
  return (
    <Box sx={{ padding: 4, backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: 'bold', color: '#D63384' }}>
        Lender Dashboard
      </Typography>

      {/* Profile Section */}
      <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 4 }}>
        <Card sx={{ width: 300, borderRadius: 2, boxShadow: 3 }}>
          <CardContent align="center">
            <Avatar alt={lenderProfile.name} src={lenderProfile.photo} sx={{ width: 100, height: 100, marginBottom: 2 }} />
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>{lenderProfile.name}</Typography>
            <Typography variant="body2" color="text.secondary">{lenderProfile.role}</Typography>
            <Typography variant="body2" color="text.secondary">{lenderProfile.email}</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 2 }}>{lenderProfile.institution}</Typography>
            <Button variant="contained" sx={{ backgroundColor: '#D63384', color: '#fff' }}>Edit Profile</Button>
          </CardContent>
        </Card>
      </Box>

      <Typography variant="h6" align="center" sx={{ marginBottom: 4, color: '#333' }}>
        Manage your applications, provide feedback, track progress, and connect with financial institutions.
      </Typography>

      {/* Grid Layout for Management Features */}
      <Grid container spacing={4} justifyContent="center">
        {/* Application Management Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ backgroundColor: '#D63384', height: '100%', borderRadius: 2, boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#fff' }}>
                Application Management
              </Typography>
              <Typography variant="body2" color="text.secondary">
                View and manage your loan applications easily.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Feedback Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ backgroundColor: '#D63384', height: '100%', borderRadius: 2, boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#fff' }}>
                Provide Feedback
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Give feedback on applications to help improve the process.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Tracking Progress Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ backgroundColor: '#D63384', height: '100%', borderRadius: 2, boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#fff' }}>
                Track Progress
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Keep track of application statuses and updates.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LenderDashboard;


