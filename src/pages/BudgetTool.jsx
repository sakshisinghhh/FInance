// src/pages/BudgetTool.js
import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Financialbar from './Financialbar';
import FinancialInfo from './FinancialInfo';

const resources = [
  {
    id: 1,
    category: "Funding Resources",
    link: "https://ifundwomen.com/",
    title: "IFundWomen",
    description: "IFundWomen is a platform that provides access to capital through crowdfunding and grants, especially for female entrepreneurs.",
    image: "https://ifundwomen.com/assets/images/ifw-og-image.png",
  },
  {
    id: 2,
    category: "Networking Platforms",
    link: "https://www.womenwhocode.com/",
    title: "Women Who Code",
    description: "Join a global network of women in tech. Find opportunities to connect, learn, and grow with like-minded women.",
    image: "https://www.womenwhocode.com/images/wwcode-og-image.png",
  },
  {
    id: 3,
    category: "Skill Development",
    link: "https://www.shecodes.io/",
    title: "SheCodes",
    description: "SheCodes offers hands-on coding workshops designed to teach women tech skills for a variety of career paths.",
    image: "https://www.shecodes.io/social_media_banner.png",
  },
  {
    id: 4,
    category: "Mentorship Programs",
    link: "https://www.foundermentors.org/",
    title: "Founder Mentors",
    description: "Get personalized mentorship from experienced entrepreneurs to guide you through the challenges of starting a business.",
    image: "https://www.foundermentors.org/images/mentorship.png",
  },
  {
    id: 5,
    category: "Legal Assistance",
    link: "https://www.legalzoom.com/",
    title: "LegalZoom",
    description: "Access affordable legal services to help you register your business, protect your intellectual property, and more.",
    image: "https://www.legalzoom.com/images/legalzoom-og-image.png",
  },
];


const BudgetTools = () => {


  return (
<div>
    <Financialbar/>
<FinancialInfo/>

    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Header Section */}
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <Typography variant='h2' sx={{ color: '#D63384', marginBottom: '20px' }}>
          Empowering Women Entrepreneurs
        </Typography>
        <Typography variant='h6' sx={{ color: '#555' }}>
          Access essential tools, resources, and networks to start and grow your business.
        </Typography>
        <Button 
          variant="contained" 
          sx={{ marginTop: '20px', backgroundColor: '#D63384', color: '#fff', fontWeight: 'bold' }}
        >
          Get Started
        </Button>
      </header>

      {/* Main Sections */}
      {['Funding Resources', 'Networking Platforms', 'Skill Development', 'Mentorship Programs', 'Legal Assistance'].map(category => (
        <section key={category} style={{ marginBottom: '60px' }}>
          <Typography variant='h4' sx={{ color: '#333', marginBottom: '20px' }}>
            {category}
          </Typography>
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
            {resources.filter(res => res.category === category).map(res => (
              <a 
                key={res.id} 
                href={res.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ textDecoration: 'none', marginBottom: '20px', flexBasis: '45%' }}
              >
                <Card elevation={3} style={{ height: '100%', borderRadius: '8px', overflow: 'hidden', cursor: 'pointer' }}>
                  <CardMedia
                    component="img"
                    image={res.image}
                    alt={res.title}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div style={{ padding: '16px' }}>
                    <Typography variant='h5' sx={{ color: '#D63384', fontWeight: 'bold', marginBottom: '8px' }}>
                      {res.title}
                    </Typography>
                    <Typography variant='body1' sx={{ color: '#555' }}>
                      {res.description}
                    </Typography>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </section>
      ))}

      {/* Footer Section */}
      <footer style={{ textAlign: 'center', padding: '40px 0', marginTop: '40px', borderTop: '1px solid #ddd' }}>
        <Typography variant='h6' sx={{ color: '#555', marginBottom: '10px' }}>
          Contact Us
        </Typography>
        <Typography variant='body2' sx={{ color: '#777' }}>
          info@womenentrepreneurs.com | © 2024 Women Entrepreneurs
        </Typography>
      </footer>
    </div>
    </div>
  );
};

export default BudgetTools;

