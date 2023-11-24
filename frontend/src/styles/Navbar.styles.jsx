import styled from "styled-components"
import { Link } from "react-router-dom";

export const Container = styled.nav`
    position: sticky;
    top: 0;
    z-index: 999;
    height: 10%;
    width: 100%;
    background-color: #3D3B3B;
`

export const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Left = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    padding: 0px 11px;
`

export const Center = styled.div`
    display: flex;
    text-align: center;
`

export const Right = styled.div`
    color: white;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

export const Logo = styled.h1`
    font-weight:bold;
`

export const Menu1 = styled.div`
    font-size: 20px;
    color: white;
    cursor: pointer;
    margin-left: 20px;
    padding: 0px;
    display: flex;
    align-items: center;
`

export const MenuLink = styled(Link)`
    color: white;
    text-decoration: none;

    &:hover, &:focus{
        text-decoration: underline;
    }
`

export const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    margin-left: 10px;
    margin-bottom: 5px;
`

export const Button = styled.button`
    padding: 10px;
    font-size: 12px;
    background-color: transparent;
    cursor: pointer;
`