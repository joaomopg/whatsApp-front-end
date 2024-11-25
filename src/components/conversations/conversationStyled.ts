import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`
export const ChatsContainer = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    overflow-x: hidden;

    &::-webkit-scrollbar{
        width: 6px;
        height: 20px;
    }
    &::-webkit-scrollbar-thumb{
        background-color: #8c8c8c;
        border-radius: 20px;
    }

`
export const TextIconsContainer = styled.div`
    width: 100%;
    height: 60px;
    padding: 0px 20px 0px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
`
export const TextContainer = styled.div`
    width: auto;
    height: 100%;
    font-size: 22px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const IconsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const InputContainer = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`

export const Input = styled.input`
    width: 90%;
    height: 33px;
    padding: 4px 6px 4px 60px;
    box-sizing: border-box;
    border: none;
    outline: none;
    border-radius: 8px;
    font-size: 17px;
    color: black;
    background-color: #f4f4f4;
`

export const ButtonContainer = styled.button`
    width: 50px;
    height: 33px;
    border-radius: 8px 0px 0px 8px;
    border: none;
    position: absolute;
    top: 8px;
    left: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ButtonImage = styled.img`
    width: 50%;
    height: 60%;
    background-color: transparent;
`

export const Categories = styled.div`
    width: auto;
    height: 38px;
    padding-left: 30px;
    display: flex;
    align-items: center;
    column-gap: 8px;
`
interface CategorieProps {
    isActive?: boolean,
    width?: boolean
}
export const Categorie = styled.button<CategorieProps>`
    width: auto;
    height: 32px;
    padding: 0px 10px;
    box-sizing: border-box;
    border: none;
    outline: none;
    border-radius: 16px;
    font-size: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({isActive})=> isActive? '#e3fce3': '#eaebea'} ;
    color: ${({isActive})=> isActive? ' #2c9493': 'black'};
    cursor: pointer;

    @media (max-width: 1449px){
        display: ${({width})=> width? 'none' : 'flex'};
    }
`

export const SincronizedDiv = styled.div<{sincronizedStyle: boolean}>`
    width: 100%;
    height: 100px;
    margin-top: 5px;
    padding: 10px 14px;
    box-sizing: border-box;
    background-color: #53baea;
    display: ${({sincronizedStyle})=> sincronizedStyle? 'flex' : 'none'};
    align-items: center;

    @media (max-width: 1649px){
        display: none;
    }
`

export const NotificationIconContainer = styled.div`
    width: 46px;
    min-width: 46px;
    height: 46px;
    margin-right: 20px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
`

export const NotificationIcon = styled.img`
    width: 50%;
    height: 50%;
`

export const TextNotificationContainer = styled.div`
    height: auto;
    display: flex;
    flex-direction: column;
`
export const TextNotification = styled.div`

`

export const CloseBtnContainer = styled.div`
    width: auto;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const CloseBtn = styled.button`
    width: 25px;
    height: 25px;
    border: none;
    outline: none;
    background-color: #53baea;
    cursor: pointer;
    color: white;
    font-size: 18px;
    font-weight: 550;
`

export const ArchivedContainer = styled.div`
    width: 100%;
    height: 48px;
    padding: 10px 14px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    cursor: pointer;
`

export const ArchivedIcon = styled.div`
    width: 46px;
    min-width: 46px;
    height: 46px;
    margin-right: 20px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`

export const ArchivedImage = styled.img`
    width: 60%;
    height: 60%;
`

export const ArchivedTextContainer = styled.div`
    width: 100%;
    height: 48px;
    display: flex;
    flex-direction: column;
    &:hover{
        border-bottom: #f4f4f4 solid 2px;
    }
`
export const ArchivedText = styled.div`
    margin-top: 10px;
    font-weight: 600;
    font-size: 17px;
`