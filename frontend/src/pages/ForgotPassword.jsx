import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { forgotPassword } from "../redux/apiFetch.js";
import {Line, LinkContainer, Links, Container, Wrapper, Title, InputContainer, Input, ButtonContainer, Error, Button} from '../styles/ForgotPassword.styles.jsx'
import { useState } from "react";

// Once we create the different components for the employees
// Import the components, include a auth for viewing using role
const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [secPassword, setSecPassword] = useState("");
    const [password, setPassword] = useState("");
    const [passwordMatchError, setPasswordMatchError] = useState(false);
    const {isFetchingForgot, error3} = useSelector((state) => state.user);

    const dispatch = useDispatch();
    const history = useNavigate();
    // Should be changed to handleUpdate
    // To DO add a way to check for the security password
    // Then send the update request
    const handleRegister = (e) => {
        e.preventDefault();
        if (!passwordMatchError) {
            try{
                forgotPassword(dispatch, {email, secPassword, password}, history);
            } catch (error) {
                console.error('Password update failed:', error);
            }
        }
    }

    const handleConfirmPassword = (text) => {
        // handle confirm password
        if (password != text) {
            setPasswordMatchError(true);
        } 
        if (password == text) {
            setPasswordMatchError(false);
        }
    };

    return (
        <Container>
            <Wrapper>
                <Title>Forgot Password</Title>
                <InputContainer>
                <Input placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                <Input placeholder="Security Password" onChange={(e) => setSecPassword(e.target.value)}/>
                <Input placeholder="New Password" type="password" onChange={(e) => setPassword(e.target.value)}/>
                <Input placeholder="Confirm Password" type="password" onChange={(e) => handleConfirmPassword(e.target.value)}/>
                {passwordMatchError && <Error>Passwords do not match</Error>}
                <ButtonContainer>
                    <Button onClick={handleRegister}>Update Password</Button>
                </ButtonContainer>
                {error3 && <Error>Error has occurred</Error>}
                </InputContainer>
                <Line></Line>
                <LinkContainer>
                    <Links to="/account-log-in">Back to Log In</Links>
                </LinkContainer>
            </Wrapper>
        </Container>
    )
}

export default ForgotPassword