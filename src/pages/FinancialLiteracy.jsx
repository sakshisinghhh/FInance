import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Cards = [
    {
        id: 1,
        link: "https://www.clevergirlfinance.com/how-to-fi/",
        title: "FINANCIAL INDEPENDENCE",
        details: "Learn how to manage your finances effectively to achieve financial independence. Understand budgeting, saving, and investing to create a stable financial future.",
        image: "https://www.phroogal.com/wp-content/uploads/2020/09/Achieve-Financial-Independence-phroogal-2048x1152.jpg",
    },
    {
        id: 2,
        link: "https://www.shewealth.in/courses",
        title: "BUILDING WEALTH",
        details: "Discover strategies for building wealth over time. Learn about investing in stocks, real estate, and other avenues to grow your assets.",
        image: "https://cdnblog.etmoney.com/wp-content/uploads/2022/02/wealth-building.jpg",
    },
    {
        id: 3,
        link: "https://www.businessinsider.com/",
        title: "LIFESTYLE & MONEY MANAGEMENT",
        details: "Find out how to balance your lifestyle choices with effective money management. Tips on living well while staying financially responsible.",
        image: "https://th.bing.com/th/id/OIP.c8WadXmDezEhhDnV2Cgi8QHaDF?rs=1&pid=ImgDetMain",
    },
    {
        id: 4,
        link: "https://www.investopedia.com/how-to-save-money-4589942",
        title: "SAVING MONEY",
        details: "Explore practical tips and strategies for saving money effectively. Learn about budgeting, cutting expenses, and building an emergency fund.",
        image: "https://www.nj.com/personal-finance/static/a61d5443b3d41606c73a164045a93963/48efe/how-to-save-money.jpg",
    },
    
];

const Notecard = () => {
    const [hovered, setHovered] = useState(null); // To track which card is being hovered

    const cardStyle = {
        width: '250px',
        height: '250px',
        margin: '20px',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '8px',
        overflow: 'hidden', // Ensures image stays within card boundaries during hover
    };

    const cardImageStyle = (isHovered) => ({
        width: '100%',
        height: '100%',
        borderRadius: '4px',
        transition: 'filter 0.3s ease-in-out', // Smooth transition for the blur effect
        filter: isHovered ? 'blur(4px)' : 'none', // Apply blur if hovered
    });

    return (
        <div style={{ padding: '16px', maxWidth: '1400px', margin: '0 auto' }}>
            {Cards.map((card, index) => (
                <div 
                    key={card.id} 
                    style={{ 
                        display: 'flex', 
                        flexDirection: index % 2 === 0 ? 'row' : 'row-reverse', 
                        width: '100%', 
                        marginBottom: '40px',  // Reduced margin bottom to bring cards closer together
                        alignItems: 'center', 
                        justifyContent: 'flex-start',  // Align items closer to the start
                        padding: '0 20px', 
                        flexWrap: 'nowrap',
                    }}
                >
                    {/* Card with clickable Image */}
                    <a 
                        href={card.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        style={{ textDecoration: 'none' }}
                        onMouseEnter={() => setHovered(card.id)} // Set hover state on mouse enter
                        onMouseLeave={() => setHovered(null)} // Remove hover state on mouse leave
                    >
                        <Card elevation={3} style={cardStyle}>
                            <CardMedia
                                component="img"
                                image={card.image}
                                alt={card.title}
                                style={cardImageStyle(hovered === card.id)} // Apply blur on hover
                            />
                        </Card>
                    </a>

                    {/* Text Details (Title, Description) */}
                    <div style={{ maxWidth: '600px', padding: '0 20px' }}>
                        <Typography 
                            variant='h4' 
                            sx={{
                                fontFamily: 'Arial, sans-serif',
                                fontWeight: 'bold',
                                color: '#D63384',
                                fontSize: {
                                    xs: '22px', 
                                    sm: '26px', 
                                    md: '32px', 
                                },
                                marginBottom: '8px',  // Reduced margin to bring text closer
                            }}
                        >
                            {card.title}
                        </Typography>
                        
                        <Typography 
                            variant='body1' 
                            sx={{ 
                                marginBottom: '10px',
                                fontSize: {
                                    xs: '16px', 
                                    sm: '18px', 
                                    md: '20px',
                                } 
                            }}
                        >
                            {card.details}
                        </Typography>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Notecard;
