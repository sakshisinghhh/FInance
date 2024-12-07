import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import { useNavigate, Outlet } from 'react-router-dom';
import MentorImage from '../assets/mentoring.jpg';
import LenderImage from '../assets/lender.jpg';
import CommunityImage from '../assets/Community.jpg';
import AnalyticsImage from '../assets/R.jpg';
import BackgroundVideo from '../assets/background.mp4';

function Home() {
  const navigate = useNavigate();

  const handleCardClick = (role) => {
    switch (role) {
      case 'mentor':
        navigate('/sign-in');
        break;
      case 'lender':
        navigate('/sign-in');
        break;
      case 'community':
        navigate('/community-forums');
        break;
      case 'analytics':
        navigate('/loan-analytics');
        break;
      default:
        break;
    }
  };

  return (
    <Box sx={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
          opacity: 0.5,
        }}
      >
        <source src={BackgroundVideo} type="video/mp4" />
      </video>

      {/* Content Overlay */}
      <Box sx={{ padding: 4, position: 'relative', zIndex: 1 }}>
        <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: 'bold', color: '#FFFFFF' }}>
          Welcome to Women Empowerment Platform
        </Typography>

        <Box
          sx={{
            marginBottom: 8,
            padding: 4,
            backgroundColor: 'rgba(255, 235, 238, 0.8)',
            borderRadius: 3,
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s, box-shadow 0.3s',
            '&:hover': {
              transform: 'scale(1.02)',
              boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.2)',
            },
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            align="center"
            sx={{ fontWeight: 'bold', color: '#D63384', textTransform: 'uppercase' }}
          >
            Financial Literacy for Women
          </Typography>
          <Typography
            variant="h6"
            align="center"
            sx={{
              marginBottom: 2,
              color: '#333',
              lineHeight: 1.6,
            }}
          >
            Financial literacy is a crucial skill for women in India, enabling them to make informed financial decisions. 
            Despite progress, many women still face challenges in accessing financial resources and understanding financial management.
            Empowering women through financial education can lead to improved economic outcomes and greater independence.
          </Typography>
        </Box>

        {/* Grid Layout for Dashboard Options */}
        <Grid container spacing={4} justifyContent="center" sx={{ marginBottom: 8 }}>
          {[
            { role: 'mentor', label: 'Mentor Dashboard', image: MentorImage },
            { role: 'lender', label: 'Lender Dashboard', image: LenderImage },
            { role: 'community', label: 'Community Forums', image: CommunityImage },
            { role: 'analytics', label: 'Loan Analytics', image: AnalyticsImage },
          ].map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item.role}>
              <Card
                sx={{ backgroundColor: '#D63384', height: '100%', borderRadius: 2 }}
                onClick={() => handleCardClick(item.role)}
              >
                <img
                  src={item.image}
                  alt={item.label}
                  style={{ width: '100%', height: 'auto', borderTopLeftRadius: '2px', borderTopRightRadius: '2px' }}
                />
                <CardContent>
                  <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#fff' }}>
                    {item.label}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Fully Transparent User Experiences Section without Scroll */}
        <Box
          sx={{
            marginTop: 4,
            marginBottom: 8,
            padding: 2,
            backgroundColor: 'transparent',
            borderRadius: 3,
          }}
        >
          <Typography variant="h5" gutterBottom align="center" sx={{ fontWeight: 'bold', color: '#4a148c' }}>
            User Experiences
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {[
              {
                name: 'Anita Sharma',
                experience: 'This platform has greatly helped me understand financial literacy and improved my confidence in managing finances.',
              },
              {
                name: 'Priya Kapoor',
                experience: 'I learned so much about budgeting and saving, and now I feel empowered to take control of my financial future.',
              },
              {
                name: 'Kavita Joshi',
                experience: 'The community forums have connected me with like-minded women. We support each other in our financial goals.',
              },
              {
                name: 'Anita Sharma',
                experience: 'This platform has greatly helped me understand financial literacy and improved my confidence in managing finances.',
              },
              {
                name: 'Priya Kapoor',
                experience: 'I learned so much about budgeting and saving, and now I feel empowered to take control of my financial future.',
              },
              {
                name: 'Kavita Joshi',
                experience: 'The community forums have connected me with like-minded women. We support each other in our financial goals.',
              },
              // Add more experiences here
            ].map((user, index) => (
              <Grid item xs={12} key={index}>
                <Card sx={{ padding: 2, backgroundColor: 'rgba(255, 255, 255, 0.3)' }}>
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#4a148c' }}>
                      {user.name}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#333', lineHeight: 1.5 }}>
                      {user.experience}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Outlet for nested routes */}
        <Outlet />
      </Box>
    </Box>
  );
}

export default Home;
