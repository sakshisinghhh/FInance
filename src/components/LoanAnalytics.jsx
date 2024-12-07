
import React from 'react';
import { Box, Typography } from '@mui/material';
import TimelineComp from '../pages/Timelinecomp';
import Newbutton from '../pages/Newbutton';
import HorizontalBars from '../pages/HorizontalBars';
import TableComp from '../pages/TableComp';

const LoanAnalytics = () => {
  const flexContainerStyle = {
    display: 'flex',
    flexDirection: 'row', // Ensure items are placed side by side
    alignItems: 'flex-start',  // Vertically align items at the top
    justifyContent: 'space-between', // Adjust space between items
    margin: '10px 0', // Adds margin around the container
  };

  const componentStyle = {
    flex: 1, // Allow components to take equal space
    margin: '0 10px', // Add horizontal spacing between components
    padding: '16px', // Add padding inside each component container
    backgroundColor: '#f5f5f5', // Light background for visibility
    borderRadius: '8px', // Rounded corners
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Subtle shadow effect
    minWidth: '250px', // Set a minimum width for responsiveness
  };

  return (
    <div style={{ padding: '0 20px' }}> {/* Add separation from the sides */}
      {/* Heading for Loan Analytics Section */}
      <Typography variant="h4" gutterBottom align="center" sx={{ color: '#D63384', marginBottom: '20px' }}>
        Loan Analytics Dashboard
      </Typography>

      {/* Message for New Users */}
      <Typography variant="h6" gutterBottom align="center" sx={{ marginBottom: '20px', color: '#555' }}>
        Explore and learn to expand your knowledge!
      </Typography>

      <div style={flexContainerStyle}>
        {/* Timeline Component */}
        <Box style={componentStyle}>
          <Typography variant="h6" gutterBottom>
            General Budget about different funds of perticular bank 
          </Typography>
          <TimelineComp />
        </Box>

        {/* New Button Component */}
        <Box style={componentStyle} >
          <Typography variant="h6" gutterBottom>
            New Action: calculate and self evaluate
          </Typography>
          <Newbutton />
        </Box>
      </div>

      {/* Table Component */}
      <Box style={componentStyle}>
        <Typography variant="h6" gutterBottom>
          Loan Data Table
        </Typography>
        <TableComp />
      </Box>

      {/* Horizontal Bars Component */}
      <Box style={componentStyle}>
        <Typography variant="h6" gutterBottom>
          Analytics Overview
        </Typography>
        <HorizontalBars />
      </Box>
    </div>
  );
};

export default LoanAnalytics;


