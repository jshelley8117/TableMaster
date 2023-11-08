import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/apiFetch.js";
import {Line, LinkContainer, Links, Container, Wrapper, Title, InputContainer, Input, ButtonContainer, Error, Button} from '../styles/ForgotPassword.styles.jsx'
import { useState } from "react";

// Once we create the different components for the employees
// Import the components, include a auth for viewing using role
const ForgotPassword = () => {
    const [username, setUsername] = useState("");
    const [secPassword, setSecPassword] = useState("");
    const [password, setPassword] = useState("");
    const [passwordMatchError, setPasswordMatchError] = useState(false);

    const dispatch = useDispatch();
    const {isFetchingReg, error2} = useSelector((state) => state.user);

    // Should be changed to handleUpdate
    // To DO add a way to check for the security password
    // Then send the update request
    const handleRegister = (e) => {
        e.preventDefault();
        if (!passwordMatchError) {
            // Add functionality for updating
        }
    }

    const handleConfirmPassword = (text) => {
        // handle confirmpassword
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
                <Input placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
                <Input placeholder="Security Password" onChange={(e) => setSecPassword(e.target.value)}/>
                <Input placeholder="New Password" type="password" onChange={(e) => setPassword(e.target.value)}/>
                <Input placeholder="Confirm Password" type="password" onChange={(e) => handleConfirmPassword(e.target.value)}/>
                {passwordMatchError && <Error>Passwords do not match</Error>}
                <ButtonContainer>
                    <Button onClick={handleRegister} disabled={isFetchingReg}>Update Password</Button>
                </ButtonContainer>
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