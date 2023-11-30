import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    margin: 0px;
    padding: 0;
    box-sizing: border-box;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url("https://i.imgur.com/EyPLXku.jpg");
    background-repeat: no-repeat;
    background-size: cover;
`

export const Wrapper = styled.div`
    width: 30vw;
    height: 80vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(8.5px);
    border-radius: 10px;
    color: white;
    letter-spacing: 0.3rem;
`

export const Title = styled.h2`
    margin: 1rem 0 2rem 0;
    font-size: 30px;
    color: black;
    opacity: .75;
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 90%;
    width: 100%;
    color: white;
`

export const Input = styled.input`
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    color: black;
    opacity: .75;
    border-radius: 2rem;
    width: 80%;
    height: 3rem;
    padding: 15px;
    border: none;
    outline: none;
    font-weight: 100px;
    font-size: 20px;
    &:focus {
        display: inline-block;
        box-shadow: 0 0 0 0.2rem white;
        backdrop-filter: blur(12rem)
        border-radius: 2rem;
        transition: 0.5s;
    }
    &::placeholder {
        color: black;
        opacity: .70;
    }
`

export const ButtonContainer = styled.div`
    margin: 1rem 0 2rem 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Error = styled.span`
    color: red;
    display: row;
`

export const Button = styled.button`
    padding: 8px;
    font-size: 20px;
    background: linear-gradient(to right, SaddleBrown 0%, SaddleBrown 79%);
    cursor: pointer;
    color: white;
    border-radius: 15px;
    height: 3rem;
    width: 65%;
    border: none;

    // &:disabled {
    //     cursor: not-allowed;
    //     color: #dd7973;
    // }
`

export const Line = styled.hr`
    width: 90%;
    height: .3rem;
    border-radius: .8rem;
    border: none;
    margin: 1.5rem 0 1rem 0;
    background: line-gradient(to right, #14163c 0%, #03217b 79%);
    backdrop-filter: blur(25px);
`

export const LinkContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 2rem 0 3rem 0;
    width: 80%;
    
`

export const Links = styled(Link)`
    cursor: pointer;
    color: white;
    &:hover, &:focus{
        color:white;
    }
`