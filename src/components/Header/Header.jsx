import React from 'react'
import { AppBar, Toolbar, Typography, InputBase, Box } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { makeStyles, createStyles } from '@mui/styles'
import { alpha } from '@mui/material';

const theme = createTheme()

const Header = () => {


    return (

        <AppBar position='static'>
            <Toolbar xs={{  display: 'none',
                        [theme.breakpoints.up('sm')]: {
                        display: 'block',
                        },}}>
                <Typography variant='h5' xs={{ display: 'none',
                                        [theme.breakpoints.up('sm')]: {
                                        display: 'block',
                                        },}}>
                    Travel Advisor
                </Typography>
                <Box display="flex">
                <Typography variant='h6' xs={{  display: 'none',
                                        [theme.breakpoints.up('sm')]: {
                                        display: 'block',
                                         },}}>
                    Explore
                </Typography>
                    <div xs={{position: 'relative',
                            borderRadius: theme.shape.borderRadius,
                            backgroundColor: alpha(theme.palette.common.white, 0.15),
                            '&:hover': { backgroundColor: alpha(theme.palette.common.white, 0.25) },
                            marginRight: theme.spacing(2),
                            marginLeft: 0,
                            width: '100%',}}>
                        <div xs={{ padding: theme.spacing(0, 2), height: '100%', position: 'absolute', pointerEvents: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center',}}>
                            <SearchIcon/>
                        </div>
                        <InputBase placeholder='Search...' />
                    </div>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header