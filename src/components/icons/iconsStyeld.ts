import styled from "styled-components"

export const IconsContainer = styled.div`
    width: auto;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;


`

export const Icons = styled.div`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    &:hover{
        background-color: #f2f2f2;
    }
`

export const IconImage = styled.img`
    width: 65%;
    height: 65%;
`