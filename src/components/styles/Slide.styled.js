import styled from "styled-components";

export const StyledSlide = styled.div`
    background-color: #5D4E4D;
    padding: 180px 0;
    
    img{
        height: 644px;
    
    }

    h2 {
    font-size: 50px;
    margin: 50px 0px 40px;
    text-transform: capitalize;
    color: rgb(255, 255, 255);
    font-weight: bold;
}

h3 {
    font-size: 100px;
    line-height: 50px;
    font-weight: bold;
    color: rgb(255, 255, 255);
    position: absolute;
    bottom: 100px;
    right: 90px;
    margin: 0px;
}

    .left-content ul{
        padding-left: 16px;
        padding-bottom: 100px;
    }

    ul{
        margin: 0;
        padding-right:180px;
    }

    .left-content ul li {
    list-style: disc;
    font-size: 16px;
    line-height: 20px;
    color: rgb(255, 255, 255);
    margin-bottom: 5px;
}
    
`

export const Features = styled.div`
        font-size: 14px;
        font-weight: bold;
        color: #FFFFFF;
        padding-bottom: 10px;
        border-bottom: 1px solid white;
        text-transform: capitalize;
        position: absolute;
        padding-top: -20px;
        margin: 0px;
        min-width: 250px;

`

export const StyledButton = styled.button`
        background-color: #FFFFFF;
        color: rgb(197, 162, 162);
        border: 1px solid #bddbe6;
        text-align: center;
        font-size: 16px;
        height: 50px;
        width: 50px;
        margin: 0px 5px;
        transition-duration: 0.4s;
        cursor: pointer;
        border-radius: 50%;

        &:hover {
            background-color: #A65E58;
            border-color: #A65E58;
            color: white;
           
        }
`