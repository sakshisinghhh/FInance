import { IconButton } from '@mui/material';
import React from 'react';
import { IoReorderThreeOutline } from "react-icons/io5";
import img4 from '../assets/img4.jpeg';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const ApplicationManagement = () => {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    }

    const sessions = [
        {
            id: 1,
            title: "Session with Kary : Founder of MindBuzzer ",
            session: "MindBuzzer if Game which which gamefies brainstorming puzzels to engage children and adults.                                          StartUp Category: Mid-Level",
            time: "30-40 mins"
        },
        {
            id: 2,
            title: "Session with Rina Naidu: Founder of Sparkle",
            session: "Sparkle is LifeStyle StartUp which focuses on building cosmetics and skincare products.                                                                 StartUp Category : Lifestyle , Mid-level",
            time: "1 hour",
        },
        {
            id: 3,
            title: "Session with Neela Nanda : Founder of SheCooks  ",
            session: "StartUp which targets students who have migrated their home town ,to provide them with mess services.                                                                           StartUp Category : Scalable.",
            time: "45mins",
        }
    ];

    const users = [
        { id: 1, name: "Sarah", message: "Hi" },
        { id: 2, name: "User2", message: "Good morning" },
    ];

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                {['Messages', 'Calendar', 'Info Session', 'Personal Info', 'Login & Security'].map((text, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div style={{ backgroundColor: '#f4f4f4', minHeight: '100vh', padding: '20px' }}>
            <div style={{ padding: '10px' }}>
                <IconButton aria-label='linesbutton' sx={{ padding: '10px', marginBottom: '20px' }} onClick={toggleDrawer(true)}>
                    <IoReorderThreeOutline />
                </IconButton>
            </div>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                <Card>
                    <CardMedia
                        component="img"
                        height="200"
                        image={img4}
                        alt="Welcome Image"
                    />
                    <CardContent>
                        <Typography variant="h5" align="center" style={{ color: '#bf1f61' }}>
                            Welcome User
                        </Typography>
                    </CardContent>
                </Card>
                <Box display="flex" flexDirection="column" gap="20px" marginTop="20px">
                    {/* Mapping over sessions and displaying them in separate cards */}
                    {sessions.map((session) => (
                        <Card key={session.id} sx={{ maxWidth: '400px', margin: '0 auto', backgroundColor: '#e8f0fe', boxShadow: 2 }}>
                            <CardContent>
                                <Typography variant="h6" gutterBottom sx={{ color: '#bf1f61' }}>{session.title}</Typography>
                                <Typography variant='caption'>{session.time}</Typography>
                                <Typography variant="body2" sx={{ marginTop: 1 }}>{session.session}</Typography>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
                <Box marginTop="20px" style={{ backgroundColor: "#e1f5fe", padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                    <Typography variant="h6" align="center" sx={{ color: '#bf1f61' }}>Users</Typography>
                    {users.map((user) => (
                        <ListItem key={user.id} alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt={user.name} src="/static/images/avatar/2.jpg" />
                            </ListItemAvatar>
                            <ListItemText
                                primary={user.name}
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            sx={{ color: 'text.primary', display: 'inline' }}
                                        >
                                            {user.message}
                                        </Typography>
                                    </React.Fragment>
                                }
                            />
                            <Divider variant="inset" component="li" />
                        </ListItem>
                    ))}
                </Box>
            </div>
        </div>
    );
}

export default ApplicationManagement;
