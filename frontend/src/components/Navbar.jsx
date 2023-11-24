import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import { logout } from '../redux/userSlice.js';
import { useNavigate } from "react-router-dom";
import logo from '../res/TableMaster.png';
import { useState } from 'react';
import { Title, MenuLink, Container, Wrapper, Left, Center, Right, Logo, Menu1  } from "../styles/Navbar.styles.jsx"
import { IconButton } from '@material-ui/core';

// Creating navigation bar
const Navbar = () => {
    const dispatch = useDispatch();
    const [container, setContainer] = useState("");
    const user = useSelector((state) => state.user.currentUser);
    const history = useNavigate();

    // Handles account container
    const handleOpenUserMenu = (e) => {
        setContainer(e.currentTarget);
    };

      const handleCloseUserMenu = () => {
        setContainer(null);
    };

    // When users logout their cart should be set to nothing
    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout())
    };

    const handleAccountDetails = (e) => {
        e.preventDefault();
        history("/account-details");
    };

    return (
        <Container>
            <Wrapper>
                <Left>
                <Tooltip title="Home Page">
                    <MenuLink to="/">
                        <img src={logo}  alt="Logo" style={{height: 50, width: 150, borderRadius: 15}}/>
                    </MenuLink>
                </Tooltip>
                </Left>
                <Center>
                </Center>
                <Right>
                    {user ? (<Menu1>
                                <Title style={{cursor: "default"}}>{user.email}</Title>
                                <Tooltip title="Open Settings">
                                {user.profilePic !== null ? (<IconButton onClick={(e)=> handleOpenUserMenu(e)}>
                                    <Avatar src={user.profilePic}/>
                                    </IconButton>) 
                                : 
                                (<IconButton onClick={(e)=> handleOpenUserMenu(e)} sx={{ p: 0 }}>
                                    <Avatar onLoad={() => console.log('Default image loaded successfully')}
                                    onError={() => console.log('Error loading default image')}/>
                                </IconButton>)}
                                </Tooltip>
                                <Menu sx={{ mt: '45px' }}
                                    id="menu-appbar"
                                    anchorEl={container}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(container)}
                                    onClose={handleCloseUserMenu}>
                                    <MenuItem style={{padding: "10px"}} onClick={(e) => handleAccountDetails(e)}>
                                        <Typography textAlign="center">Update Profile</Typography>
                                    </MenuItem>
                                    <br/>
                                    <MenuItem style={{padding: "10px"}} onClick={(e) => handleLogout(e)}>
                                        <Typography textAlign="center">Logout</Typography>
                                    </MenuItem>
                                </Menu>
                            </Menu1>) 
                            : (<MenuLink to="/account-log-in">
                                    <Menu1>Employee Portal</Menu1>
                                </MenuLink>)}
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar