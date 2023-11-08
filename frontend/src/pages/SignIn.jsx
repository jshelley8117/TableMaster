// File that will have the regristration and sign in
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/apiFetch.js";
import {Links, Container, Title, InputContainer, Input, ButtonContainer, Error, Button, Wrapper, Line, LinkContainer} from "../styles/SignIn.styles.jsx";
import { useState } from "react";

const SignIn = () => {
    // This is for the register account state
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    // Grabs user and sets user
    const dispatch = useDispatch();
    const {isFetching, error} = useSelector((state) => state.user);

    // Sets the login of user to redux
    const handleSignIn = (e) => {
        e.preventDefault();
        login(dispatch, {username, password})
    }


    return (
       <Container>
            <Wrapper>
                    <Title>Account Sign In</Title>
                    <InputContainer>
                        <Input placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
                        <Input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)}/>
                        {error && <Error>Error has occurred</Error>}
                        <ButtonContainer>
                            <Button onClick={handleSignIn} disabled={isFetching}>Sign In</Button>
                        </ButtonContainer>
                    </InputContainer>
                    <Line></Line>
                    <LinkContainer>
                        <Links to="/forgot-password">Forgot Password?</Links>
                        <Links to="/register">New User?</Links>
                    </LinkContainer>
            </Wrapper>
        </Container>
    )
}

export default SignIn