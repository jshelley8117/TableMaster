import React from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {Button, ButtonContainer, Container, InputContainer, Input, FormContainer, Title, Line} from '../styles/Account.styles'
import { Wrapper } from '../styles/Navbar.styles';
import { updateProfilePicture } from '../redux/apiFetch';

const Account = () => {
    const [profilePic, setPic] = useState("");
    const user = useSelector((state) => state.user.currentUser);
    const dispatch = useDispatch();

    const handleProfilePic = async (e) => {
        try {
            dispatch(updateProfilePicture(user, profilePic));
          } catch (error) {
            console.error('Error updating profile picture:', error);
        }
    }

    return(
        <Container>
            <Navbar/>
            <Wrapper>
                <FormContainer>
                    <Title>Account Detail</Title>
                    <Line></Line>
                    <Title>Upload a Profile Picture</Title>
                    {user && user.profilePic !== null ? (<Avatar style={{height: "200px", width: "200px"}} src={user.profilePic}/>) 
                                : (<Avatar/>)}
                    <InputContainer>
                        <Input placeholder="Profile Picture URL" onChange={(e) => setPic(e.target.value)}/>
                    </InputContainer>
                    <ButtonContainer>
                        <Button onClick={handleProfilePic}>Update Profile Picture</Button>
                    </ButtonContainer>
                </FormContainer>
            </Wrapper>
        </Container>
    )
}


export default Account