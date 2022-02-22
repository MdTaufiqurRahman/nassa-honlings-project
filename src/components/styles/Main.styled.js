import styled from "styled-components";
import maskBg from '../assets/maskBg.png';

export const StyledMain = styled.main`
    --bs-gutter-x:0px; 
    overflow: hidden;
    
    img{
        height: 846px;
    }
    
    table{
        width:100%;
        border-collapse: collapse;

        span{
            position: absolute;
            right:0px; 
           }
    }

    .specification-right {
    background-color: rgba(235, 232, 232, 0.1);
    padding: 100px 98px 0px 60px;
    position: relative;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    flex-direction: column;
}

.specification-right h4 {
    color: rgb(93, 78, 77);
    font-size: 14px;
    padding-bottom: 15px;
    border-bottom: 1px solid rgb(93, 78, 77);
    min-width: 200px;
    margin: 0px 0px 30px;
    font-weight: bold;
}

.specification-right table tr td:nth-of-type(1) {
    padding-left: 0px;
    font-weight: bold;
    line-height: 20px;
    color: rgb(93, 78, 77);
    width: 40%;
}

.specification-right table tr td {
    color: rgb(27, 29, 29);
    font-size: 16px;
    line-height: 21px;
    padding-top: 10px;
    padding-bottom: 10px;
    border: none;
    position: relative;
}
.specification-right table tr td:nth-of-type(2) {
    padding-left: 30px;
}

*, :after, :before {
    box-sizing: border-box;
}
    
`
export const TopImg = styled.div`
     --bs-gutter-x:0px; 
`

export const StyledBg = styled.div`
      ::after{
        position: absolute;
        content: "";
        width: 51%;
        height: 843px;
        right: 0px;
        top: 1360px;
        background-image: url(${maskBg});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        overflow: hidden;
    }
    
`
