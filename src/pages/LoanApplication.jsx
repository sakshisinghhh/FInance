import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Grid, Paper } from '@mui/material';

function LoanApplication() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        businessName: '',
        loanAmount: '',
        address: '',
        bankAccount: '',
        businessDescription: '',
        loanUsage: '',
        annualRevenue: '',
        yearsInBusiness: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here (e.g., API call)
        setSubmitted(true); // Set submitted to true to display the success message
    };

    if (submitted) {
        return (
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                    backgroundColor: '#f5f5f5',
                }}
            >
                <Typography variant="h4" sx={{ color: 'green' }}>
                    Your loan application has been submitted! We will contact you soon.
                </Typography>
            </Box>
        );
    }

    return (
        <Box
            sx={{
                padding: 4,
                backgroundColor: '#ffeef8', // Light pink background
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Paper elevation={3} sx={{ padding: 3, width: '100%', maxWidth: '600px' }}>
                <Typography variant="h5" align="center" sx={{ fontStyle: 'italic', color: '#D63384', marginBottom: 2 }}>
                    "Empowered women empower women."
                </Typography>

                <Typography variant="h4" gutterBottom align="center">
                    Loan Application
                </Typography>
                <Typography variant="body1" paragraph align="center">
                    We are here to support women entrepreneurs with micro-loans to help you grow your business.
                    Please fill out the form below to apply for a loan.
                </Typography>

                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Full Name"
                                variant="outlined"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleInputChange}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Email Address"
                                variant="outlined"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Phone Number"
                                variant="outlined"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Business Name"
                                variant="outlined"
                                name="businessName"
                                value={formData.businessName}
                                onChange={handleInputChange}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Loan Amount Requested"
                                variant="outlined"
                                type="number"
                                name="loanAmount"
                                value={formData.loanAmount}
                                onChange={handleInputChange}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Address"
                                variant="outlined"
                                name="address"
                                value={formData.address}
                                onChange={handleInputChange}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Bank Account Number"
                                variant="outlined"
                                name="bankAccount"
                                value={formData.bankAccount}
                                onChange={handleInputChange}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Brief Description of Your Business"
                                variant="outlined"
                                multiline
                                rows={2}
                                name="businessDescription"
                                value={formData.businessDescription}
                                onChange={handleInputChange}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="How will you use this loan?"
                                variant="outlined"
                                multiline
                                rows={2}
                                name="loanUsage"
                                value={formData.loanUsage}
                                onChange={handleInputChange}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Annual Revenue (if applicable)"
                                variant="outlined"
                                type="number"
                                name="annualRevenue"
                                value={formData.annualRevenue}
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Years in Business"
                                variant="outlined"
                                type="number"
                                name="yearsInBusiness"
                                value={formData.yearsInBusiness}
                                onChange={handleInputChange}
                            />
                        </Grid>
                    </Grid>
                    <Box sx={{ marginTop: 2 }}>
                        <Button variant="contained" type="submit" fullWidth>
                            Submit Application
                        </Button>
                    </Box>
                </form>
            </Paper>
        </Box>
    );
}

export default LoanApplication;

