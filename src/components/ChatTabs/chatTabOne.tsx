import React, { useEffect, useState } from "react";
import { 
    ChatContent, 
    ChatsContainer, 
    HoursNotificationsContainer, 
    LastMessage, 
    PerfilImage, 
    PerfilImageContainer, 
    PerfilName, 
    PerfilNameContainer, 
    Hours, 
    Notifications
} 
from "./chatStyled.ts";
import { useChatsContext } from "../../contexts/chatsContext.tsx";
import chatImage from '../../assets/images/profissao-programador.png'

function ChatTabOne ({messages, selected, onClick}) {
    
    const {currentRoom, setCurrentRoom} = useChatsContext();

    const handleChat = (chatValue: string) => {

        setCurrentRoom(chatValue); // Atualiza o estado

    };
    
    const messagesChatOne = messages.filter((msg)=> msg.currentRoom === 'main');
    const lastMessageChatOne = messagesChatOne.at(-1);
    console.log(lastMessageChatOne)

    const formatTimestamp = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      };

    const formattedTime = lastMessageChatOne ? formatTimestamp(lastMessageChatOne.timestamp) : null;


    return (

        <ChatsContainer onClick={onClick} style={{
            backgroundColor: selected === 'One'? '#f4f4f4' : 'white'
        }}>
            <ChatContent>
                <PerfilImageContainer>
                    <PerfilImage src={chatImage}/>
                </PerfilImageContainer>
                <PerfilNameContainer onClick={()=> handleChat('main')}>
                    <PerfilName>Profissão Programador</PerfilName>
                    <LastMessage>{lastMessageChatOne? <span>{lastMessageChatOne.name}: {lastMessageChatOne.message}</span> : ''}
                    </LastMessage>
                </PerfilNameContainer>

                <HoursNotificationsContainer>
                    <Hours>{formattedTime}</Hours>
                    {currentRoom === 'main' && <Notifications>{messages.length}</Notifications>}
                </HoursNotificationsContainer>
            </ChatContent>
                
        </ChatsContainer>
    )
}

export default ChatTabOne;