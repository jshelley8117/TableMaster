import { ExitToApp } from '@material-ui/icons';
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../redux/userSlice.js';
import { Title, MenuLink, Container, Wrapper, Left, Center, Right, Logo, Menu  } from "../styles/Navbar.styles.jsx"

// Creating navigation bar
const Navbar = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.currentUser);

    // When users logout their cart should be set to nothing
    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout())
    };

    return (
        <Container>
            <Wrapper>
                <Left>
                <MenuLink to="/">
                    <Logo>TBD</Logo>
                </MenuLink>
                </Left>
                <Center>
                </Center>
                <Right>
                    {user ? (<Menu><Title style={{cursor: "default"}}>Hello {user.username}</Title><ExitToApp onClick={handleLogout}/></Menu>) : (<MenuLink to="/account-log-in-sign-up">
                        <Menu>Employee Login</Menu>
                    </MenuLink>)}
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar