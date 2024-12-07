import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';

const CommunityForums = () => {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px',
        backgroundColor: '#f9f9f9',
        borderRadius: '16px',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        maxWidth: '800px',
        margin: '0 auto',
        marginTop: '40px',
        textAlign: 'center',
    };

    const headingStyle = {
        fontFamily: 'Arial, sans-serif',
        color: '#333',
        fontWeight: 'bold',
        fontSize: '36px',
        marginBottom: '20px',
    };

    const textStyle = {
        fontFamily: 'Arial, sans-serif',
        color: '#666',
        fontSize: '18px',
        marginBottom: '30px',
        lineHeight: '1.5',
    };

    const inputStyle = {
        width: '100%',
        marginBottom: '20px',
    };

    const buttonStyle = {
        backgroundColor: '#D63384',
        color: '#fff',
        padding: '12px 24px',
        borderRadius: '8px',
        fontWeight: 'bold',
        textTransform: 'none',
        fontSize: '16px',
        marginTop: '20px',
    };

    const feedbackContainerStyle = {
        marginTop: '50px',
        width: '100%',
        textAlign: 'left',
    };

    const feedbackItemStyle = {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px',
        padding: '10px 0',
        borderBottom: '1px solid #e0e0e0',
    };

    const avatarStyle = {
        marginRight: '20px',
    };

    const userNameStyle = {
        fontWeight: 'bold',
        color: '#333',
    };

    const feedbackTextStyle = {
        color: '#666',
    };

    return (
        <div style={containerStyle}>
            <Typography variant="h2" style={headingStyle}>
                Community Forums
            </Typography>
            <Typography variant="body1" style={textStyle}>
                Share your advice, experiences, and challenges with our community.
                Whether you have a question or a story, your voice matters. Let’s help each other grow!
            </Typography>
            
            {/* Input Fields for Sharing */}
            <TextField
                variant="outlined"
                label="Share Your Advice or Experience"
                multiline
                rows={4}
                style={inputStyle}
            />
            
            {/* Submit Button */}
            <Button variant="contained" style={buttonStyle}>
                Share with Community
            </Button>

            {/* User Experiences Section */}
            <div style={feedbackContainerStyle}>
                <Typography variant="h5" style={{ fontWeight: 'bold', marginBottom: '20px', color: '#333' }}>
                    User Experiences
                </Typography>

                {/* User Experience 1 */}
                <div style={feedbackItemStyle}>
                    <Avatar alt="Sarah K" src="https://randomuser.me/api/portraits/women/75.jpg" style={avatarStyle} />
                    <div>
                        <Typography style={userNameStyle}>Sarah K.</Typography>
                        <Typography variant="body2" style={feedbackTextStyle}>
                            "I learned so much about budgeting and financial independence from this community. It’s been a game changer!"
                        </Typography>
                    </div>
                </div>

                {/* User Experience 2 */}
                <div style={feedbackItemStyle}>
                    <Avatar alt="Michael J" src="https://randomuser.me/api/portraits/men/44.jpg" style={avatarStyle} />
                    <div>
                        <Typography style={userNameStyle}>Michael J.</Typography>
                        <Typography variant="body2" style={feedbackTextStyle}>
                            "The advice on investing has really helped me build my confidence in managing my finances."
                        </Typography>
                    </div>
                </div>

                {/* User Experience 3 */}
                <div style={feedbackItemStyle}>
                    <Avatar alt="Aisha P" src="https://randomuser.me/api/portraits/women/50.jpg" style={avatarStyle} />
                    <div>
                        <Typography style={userNameStyle}>Aisha P.</Typography>
                        <Typography variant="body2" style={feedbackTextStyle}>
                            "This forum has been a wonderful place to share experiences and learn from others going through the same challenges."
                        </Typography>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CommunityForums;

