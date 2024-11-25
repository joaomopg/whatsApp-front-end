import styled from "styled-components";
import zapImage from './assets/images/zap.png';
import zap from './assets/images/whatsapp.png';

export const ContainerAll = styled.div `
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: #e4e3dc;
    overflow: hidden;
`

export const DivGreen = styled.div`
    width: 100%;
    height: 125px;
    position: absolute;
    top: 0;
    background-color: #04ab84;
`

export const Container = styled.div`
    width: 84%;
    height: 95%;
    z-index: 3;
    display: flex;
    align-items: center;

    @media (max-width: 1099px){
        width: 100%;
        height: 100%;
    }
`

export const ContainerContent = styled.div`
    width: 100%;
    height: 90%;
    border-radius: 20px;
    background-color: white;
    padding: 30px 50px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
`

export const TextLogin = styled.div<{signUp: boolean}>`
    width: auto;
    height: auto;
    font-size: 40px;
    padding: ${({signUp})=> signUp? '6px 12px' : '0px'};
    box-sizing: ${({signUp})=> signUp? 'border-box' : ''};
    border-radius: ${({signUp})=> signUp? '12px' : '0px'};
    color: ${({signUp})=> signUp? 'white' : ''};
    background-color: ${({signUp})=> signUp? '#04ab84' : ''};
    margin: 14px 0px 80px 0px;
    font-weight: 300;
    display: ${({signUp})=> signUp? 'flex' : 'block'};
    align-items: ${({signUp})=> signUp? 'center' : ''};

`

export const CheckBoxContent = styled.div`
    width: auto;
    height: 25px;
    display: flex;
    align-items: center;
`

export const Texts = styled.div`
    font-size: 19px;
    margin-bottom: 8px;
    font-weight: 300;
`

export const InputName = styled.input`
    min-width: 120px;
    width: 30%;
    min-height: 28px;
    border-radius: 12px;
    padding: 4px 10px;
    margin-bottom: 8px;
    outline: none;
    box-sizing: border-box;
    border: none;
    background-color: aliceblue;
`

export const InputImage = styled.input`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`

export const ButtonsContainer = styled.div`
    width: 20%;
    margin-top: 12px;
    height: auto;
    display: flex;
    justify-content: space-between;
`

export const ButtonLogin = styled.button`
    width: auto;
    height: 40px;
    border-radius: 24px;
    border: none;
    padding: 6px 12px;
    box-sizing: border-box;
    background-color: #04ab84;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.6s;

    &:hover {
        transform: scale(1.03);
    }
` 

export const ModalContainer = styled.div<{status: boolean}>`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    background-color: rgba(0,0,0,0.5);
    visibility: ${({status})=> status? 'visibility' : 'hidden'};
    z-index: 5;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Modal = styled.div`
    position: relative;
    width: 30%;
    height: 70%;
    border-radius: 16px;
    padding: 16px 20px;
    box-sizing: border-box;
    background-color: white;
    z-index: 7;
`

export const CloseBtn = styled.div`
    position: absolute;
    top: -10px;
    right: -10px;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 2px solid #04ab84;
    background-color: aliceblue;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

export const IconContainer = styled.div`
    width: auto;
    height: 75px;
    border-radius: 12px;
    padding: 0px 14px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    background-color: #04ab84;
`

export const TextIcon = styled.div`
    margin-left: 12px;
    font-size: 22px;
    font-weight: 500;
    color: white;
`

export const IconWhats = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const IconImage = styled.img`
    width: 100%;
    height: 100%;
`

export const LeftMenu = styled.div`
    width: 4%;
    min-width: 64px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #ececec;
`
export const MenuTop = styled.div`
    width: 100%;
    height: auto;
    margin-top: 8px;
    display: flex;
    flex-direction: column;
`

export const MenuBottom = styled.div`
    width: 100%;
    margin-bottom: 8px;
    height: auto;
    display: flex;
    flex-direction: column;
`

export const IconsContent = styled.div`
    width: 30%;
    height: 100%;
    background-color: white;
`

export const ChatContainer = styled.div`
    width: 66%;
    height: 100%;
    background-color: beige;
    display: flex;
    flex-direction: column;
`
export const ChatContainerTwo = styled.div<{display: boolean}>`
    width: 66%;
    height: 100%;
    background-color: beige;
    display: ${({display})=> display? 'flex' : 'none'};
    flex-direction: column;
`
export const JoinChatContainer = styled.div<{display: boolean}>`
    width: 66%;
    height: 100%;
    background-color: #ececec;
    display: ${({display})=> display? 'none' : 'flex'};
    flex-direction: column;
    align-items: center;
    background-image: url(${zapImage});
    border: 1px solid #ececec;
    box-sizing: border-box;
`
export const JoinChatImageContainer = styled.div`
    width: 100%;
    height: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const JoinChatImage = styled.div`
    width: 200px;
    height: 200px;
    background-image: url(${zap});
    background-size: contain;
`

export const BtnJoin = styled.button`
    width: 180px;
    height: 44px;
    padding: 8px 20px;
    border-radius: 12px;
    border: 2px solid white;
    color: white;
    box-sizing: border-box;
    outline: none;
    background-color: #04ab84;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.6s;
    cursor: pointer;

    &:hover{
        transform: scale(1.02);
    }
`

export const TopBarContainer = styled.div`
    width: 100%;
    height: 60px;
    background-color: #f4f4f4;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
`

export const TopBarLeft = styled.div`
    width: auto;
    height: 60px;
    display: flex;
    align-items: center;
    margin-left: 18px;
`

export const TopBarRight = styled.div`
    width: auto;
    height: 60px;
    display: flex;
    align-items: center;
    margin-right: 18px;
`

export const PerfilNameContainer = styled.div`
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;

`

export const PerfilName = styled.div`
    width: auto;
    height: auto;
    display: flex;
    align-items: center;
`

export const Members = styled.div`
    width: auto;
    height: auto;
    display: flex;
    align-items: center;
    font-size: 14px;
`

export const ChatContent = styled.div`
    width: auto;
    height: calc(100% - 120px);
    padding: 0px 40px 12px 40px;
    box-sizing: border-box;
    background-image: url(${zapImage});
    display: flex;
    flex-direction: column;
    overflow-y: scroll;

    &::-webkit-scrollbar{
        width: 6px;
        height: 20px;
    }
    &::-webkit-scrollbar-thumb{
        background-color: #8c8c8c;
        border-radius: 20px;
    }
`
interface MessageProps {
    isSender: boolean
}

export const MessageStyle = styled.span<MessageProps>`
    background-color: ${({ isSender }) => (isSender ? '#dcfcd4' : 'white')};
    display: inline-block;
    padding: 8px 12px;          /* Espaço interno da mensagem */
    border-radius: 12px;        /* Bordas arredondadas */
    margin-bottom: 8px;         /* Espaço entre mensagens */          /* Limita a largura da mensagem */
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);  /* Sombra sutil */
    align-self: ${({ isSender }) => (isSender ? 'flex-end' : 'flex-start')};  /* Alinha mensagens do usuário à direita */
    
`
export const BottomBarContainer = styled.div`
    width: 100%;
    height: 60px;
    padding: 0px 18px;
    display: flex;
    align-items: center;
    background-color: #f4f4f4;
    box-sizing: border-box;
`
export const InputContent = styled.div`
    width: calc(100% - 145px);
    margin-right: 10px;
    position: relative;
`
export const Input = styled.input`
    width: 100%;
    height: 42px;
    padding: 4px 18px;
    box-sizing: border-box;
    background-color: white;
    border-radius: 12px;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
`