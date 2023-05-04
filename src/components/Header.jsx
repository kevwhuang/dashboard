import React from 'react';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';

import css from '../css/modules/Header.module.css';

function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar className={css.bar}>
                    <Typography className={css.heading} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        My Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;
