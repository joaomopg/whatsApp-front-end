import React, { useState } from "react";
import { ArchivedContainer, 
    ArchivedIcon, 
    ArchivedImage, 
    ArchivedText, 
    ArchivedTextContainer, 
    ButtonContainer, 
    ButtonImage, 
    Categorie, 
    Categories, 
    ChatsContainer, 
    CloseBtn, 
    CloseBtnContainer, 
    Container, 
    IconsContainer, 
    Input, 
    InputContainer, 
    NotificationIcon, 
    NotificationIconContainer, 
    SincronizedDiv, 
    TextContainer, 
    TextIconsContainer, 
    TextNotification, 
    TextNotificationContainer 
} from "./conversationStyled.ts";
import Icon from "../icons/icons.tsx";
import opcoes from '../../assets/images/mais.png'
import lupa from '../../assets/images/lupa.png'
import newConversation from '../../assets/images/comente (1).png'
import notification from '../../assets/images/notificacao-muda.png'
import archived from '../../assets/images/pasta-downloads.png'
import ChatTabOne from "../ChatTabs/chatTabOne.tsx";
import ChatTabTwo from "../ChatTabs/chatTabTwo.tsx";

function Conversations ({messages}) {

    const [search, setSearch] = useState('');

    const [activeIcon, setActiveIcon] = useState('all');
    const [all, setAll] = useState(true);
    const [unread, setUnread] = useState(false);
    const [favorites, setFavorites] = useState(false);
    const [groups, setGroups] = useState(false);
    const [sincronizedStyle, setSincronizedStyle] = useState(true);

    function handleClick(argument: string) {
        setActiveIcon(argument)
        setAll(argument === 'all')
        setUnread(argument === 'unread')
        setFavorites(argument === 'favorites')
        setGroups(argument === 'groups')
    }

    const [selected, setSelected] = useState('One');

    return(

        <Container>
            <TextIconsContainer>
                <TextContainer>Conversas</TextContainer>
                <IconsContainer>
                    <Icon src={newConversation} margin/>
                    <Icon src={opcoes}/>
                </IconsContainer>
            </TextIconsContainer>

            <InputContainer>
                <Input type="text" onChange={(e)=> setSearch(e.target.value)} value={search}/>

                <ButtonContainer>
                    <ButtonImage src={lupa}/>
                </ButtonContainer>        
            </InputContainer>

            <Categories>
                <Categorie onClick={()=> handleClick('all')} isActive={activeIcon === 'all'}>Tudo</Categorie>
                <Categorie width onClick={()=> handleClick('unread')} isActive={activeIcon === 'unread'}>Não lidas</Categorie>
                <Categorie width onClick={()=> handleClick('favorites')} isActive={activeIcon === 'favorites'}>Favoritas</Categorie>
                <Categorie width onClick={()=> handleClick('groups')} isActive={activeIcon === 'groups'}>Grupos</Categorie>
            </Categories>

            <SincronizedDiv sincronizedStyle={sincronizedStyle}>
                <NotificationIconContainer>
                    <NotificationIcon src={notification}/>
                </NotificationIconContainer>

                <TextNotificationContainer>
                    <TextNotification>Ative a sincronização em segundo plano</TextNotification>
                    <TextNotification style={{fontSize: '14px'}}>
                        Para um desempenho mais rápido, sincronize as mensagens em segundo plano.
                    </TextNotification>
                </TextNotificationContainer>

                <CloseBtnContainer>
                    <CloseBtn onClick={()=> setSincronizedStyle(false)}>X</CloseBtn>
                </CloseBtnContainer>

            </SincronizedDiv>

            <ChatsContainer>
                <ArchivedContainer>
                    <ArchivedIcon>
                        <ArchivedImage src={archived}/>
                    </ArchivedIcon>
                    <ArchivedTextContainer>
                        <ArchivedText>Arquivadas</ArchivedText>
                    </ArchivedTextContainer>
                </ArchivedContainer>
                <ChatTabOne messages={messages} selected={selected} onClick={()=> setSelected('One')}/>
                <ChatTabTwo messages={messages} selected={selected} onClick={()=> setSelected('Two')}/>
            </ChatsContainer>
            
            
        </Container>
    )
}

export default Conversations;