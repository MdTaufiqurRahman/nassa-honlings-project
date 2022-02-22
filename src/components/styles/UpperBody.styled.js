import styled from "styled-components";
import back from '../assets/back.png';

export const StyledUpperBody = styled.div`
    background-color: #5D4E4D;
    height:856px;

    p{
        color: #FFFFFF;
        font-size: 16px;
        line-height: 20px;
        padding-top: 80px;
    }


`
export const Text = styled.div`
    color:#FFFFFF;
    font-size: 20px;
    line-height: 20px;
    font-weight: bold;
    padding-top: 170px;

`
export const Text2 = styled.div`
    color:#FFFFFF;
    font-size: 16px;
    line-height: 20px;
    padding: 5px 0;
    text-transform: capitalize;
    position: absolute;
    top: 550px;
    margin: 0px;
    min-width: 250px;

`
export const NewStyled = styled.div`
      ::after{
        position: absolute;
        content: "";
        width: 100%;
        height: 856px;
        right: 0px;
        top: 500px;
        background-image: url(${back});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
    }
    
`