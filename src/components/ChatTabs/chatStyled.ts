import styled from "styled-components"

export const ChatsContainer = styled.div`
    width: 99%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
    &:hover{
        background-color: #f4f4f4;
    }
`

export const ChatContent = styled.div`
    width: 100%;
    height: 68px;
    padding: 10px 14px;
    box-sizing: border-box;
    display: flex;
    align-items: center;

    @media (max-width: 1249px){
        height: 90px;
    }

`

export const PerfilImageContainer = styled.div`
    width: 46px;
    min-width: 46px;
    height: 46px;
    margin-right: 20px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    overflow: hidden;
`

export const PerfilImage = styled.img`
    width: 100%;
    height: 100%;
`

export const PerfilNameContainer = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: column;

    @media (max-width: 1249px){
        height: 90px;
        justify-content: center;
    }
`
export const PerfilName = styled.div`
    margin-top: 10px;
    margin-bottom: 2px;
    font-weight: 600;
    font-size: 17px;
`

export const LastMessage = styled.div`
    font-size: 15px;
`

export const HoursNotificationsContainer = styled.div`
    width: auto;
    height: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Hours = styled.div`
    font-size: 13px;
    margin-bottom: 3px;
`
export const Notifications = styled.div`
    width: 21px;
    height: 21px;
    font-size: 13px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #24d464;
    color: white;
`