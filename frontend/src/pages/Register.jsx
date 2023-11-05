import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/apiFetch.js";
import { useState } from "react";
import { Container, Title, InputContainer, Input, ButtonContainer, Error, Button, Wrapper } from "../styles/Register.styles.jsx";

const Register = () => {
    // This is for the register account state
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    const [passwordMatchError, setPasswordMatchError] = useState(false);
    const [roleError, setRoleError] = useState(false);
    // Grabs user and sets user
    const dispatch = useDispatch();
    const {isFetchingReg, error2} = useSelector((state) => state.user);
    // Registers user to redux state
    const handleRegister = (e) => {
        e.preventDefault();
        if (!passwordMatchError || !roleError) {
            register(dispatch, {username, email, password, role})
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

    const handleRole = (role) => {
        role = role.toLowerCase();
        // validate role - needs to be one of the following roles if not no register
        if ((role != "busser") || (role != "server") || (role != "host")){
            setRoleError(true);
        }

        if ((role == "busser") || (role == "server") || (role == "host")){
            setRoleError(false);
            setRole(role);
        }
    };

    // Border line is just to see where the elements are
    return(
        <Container>
            <Wrapper>
                    <Title>Sign Up</Title>
                    <InputContainer>
                        <Input placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
                        <Input placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                        <Input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)}/>
                        <Input placeholder="Confirm Password" type="password" onChange={(e) => handleConfirmPassword(e.target.value)}/>
                        <Input placeholder="Employee Role" type="role" onChange={(e) => handleRole(e.target.value)}/>
                        {passwordMatchError && <Error>Passwords do not match</Error>}
                        {error2 && <Error>Error has occurred</Error>}
                        <ButtonContainer>
                            <Button onClick={handleRegister} disabled={isFetchingReg}>Create Account</Button>
                        </ButtonContainer>
                    </InputContainer>
            </Wrapper>
        </Container>
    )
}



export default Register;

