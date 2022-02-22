import styled from "styled-components";
import banner from '../assets/banner.png';

export const StyledHeader = styled.div`
    background-image: url(${banner});
    min-width: 100%;
    background-size: cover;
    height: 500px;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;

    p{
        font-size: 14px;
        font-weight: bold;
        color: rgba(255, 255, 255, 0.8);
        padding-bottom: 10px;
        border-bottom: 1px solid rgb(255, 255, 255);
        text-transform: capitalize;
        position: absolute;
        top: 423px;
        margin: 0px;
        min-width: 250px;
    }
    
    
    h2{
        font-weight: bold;
        font-size: 50px;
        color: #FFFFFF;
        text-transform: capitalize;
        position: absolute;
        top: 471px;
        margin: 0px;
        min-width: 250px;
        opacity: 1;
        z-index: 1;
    }

`
export const NavB = styled.nav`
    padding: 15px 0px;
    position: fixed;
    z-index: 9999;
    background-color: rgba(93, 78, 77, 0.5);
    box-shadow: rgb(0 0 0 / 24%) 0px 0px 30px;
    width: 100%;

`

export const Text = styled.nav`
    color: rgb(255, 255, 255);
    font-size: 15px;
    margin-right: 20px;
    line-height: 20px;
    cursor: pointer;
`


