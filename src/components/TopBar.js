import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function TopBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color='secondary'>
                <Toolbar className='TopBar'>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Ethan's Music App
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}