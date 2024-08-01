import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import PeopleIcon from '@mui/icons-material/People';
// import { Link } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminAppBar() {
const navigate = useNavigate();

const handleUserClick = () => {
    navigate('/AllUsers')
};

const handleWordClick = () => {
    navigate('/AllWords')
};

const handleSettingClick = () => {
    navigate('/Setting')
};

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}

                    <Typography onClick={handleUserClick} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                       Users
                    </Typography>
                    <Typography onClick={handleWordClick} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Words
                    </Typography>
                    <Typography onClick={handleSettingClick}variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Setting
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
