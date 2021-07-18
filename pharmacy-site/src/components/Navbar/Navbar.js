import React from 'react'
import {AppBar, Toolbar , IconButton, Badge, Box, Typography, Container } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import {Link, useLocation} from 'react-router-dom';
import './styles.scss';

const Navbar = ({showCart, sizeCart}) => {

    const location = useLocation();

    return (
        <AppBar position='fixed' className="appBar" color="primary">
            <Container fixed>
                <Toolbar>
                    <Typography component={Link} to="/" variant="h6" className="title" color="inherit">Aegle</Typography>
                    <div className="grow"/>
                    {(location.pathname === '/' || location.pathname === '/item') && (
                    <Box mr={3}>
                        <IconButton component={Link} to="/cart" onClick={()=> showCart()} color="inherit" aria-label="LocalMallOutlined">
                            <Badge badgeContent={sizeCart} color="secondary">
                                <ShoppingCart/>
                            </Badge>
                        </IconButton>
                    </Box>)}
                </Toolbar>
            </Container> 
        </AppBar>
    )
}

export default Navbar
