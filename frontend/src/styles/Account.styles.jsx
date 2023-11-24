import styled from "styled-components";

export const Container = styled.div`

`

export const Wrapper = styled.div`
    padding: 0;
    box-sizing: border-box;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Title = styled.h2`
    margin: 1rem 0 2rem 0;
    font-size: 30px;
    color: gray;
`

export const FormContainer = styled.div`
    width: 30vw;
    height: 80vh;
    margin: 0px auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 32px 0 lightgray;
    backdrop-filter: blur(8.5px);
    border-radius: 10px;
    color: white;
    letter-spacing: 0.3rem;
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 90%;
    width: 100%;
    color: black;
`

export const Input = styled.input`
    box-shadow: 0 8px 32px 0 lightgray;
    color: black;
    border-radius: 2rem;
    width: 80%;
    height: 3rem;
    padding: 15px;
    border: none;
    outline: none;
    font-weight: 100px;
    font-size: 20px;
`

export const ButtonContainer = styled.div`
    margin: 1rem 0 2rem 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Button = styled.button`
    padding: 8px;
    font-size: 17px;
    background: linear-gradient(to right, #14163c 0%, #03217b 79%);
    cursor: pointer;
    color: white;
    border-radius: 15px;
    height: 3rem;
    width: 65%;
    border: none;

    &:disabled {
        cursor: not-allowed;
        color: #dd7973;
    }
`

export const Line = styled.hr`
    width: 90%;
    height: .3rem;
    border-radius: .8rem;
    border: none;
    margin: 1.5rem 0 1rem 0;
    background: lightgray;
    backdrop-filter: blur(25px);
`