import React from "react";
import { ChatContent, 
    ChatsContainer, 
    HoursNotificationsContainer, 
    LastMessage, 
    PerfilImage, 
    PerfilImageContainer, 
    PerfilName, 
    PerfilNameContainer, 
    Hours, 
    Notifications} 
from "./chatStyled.ts";
import { useChatsContext } from "../../contexts/chatsContext.tsx";
import chatImage from '../../assets/images/istockphoto-1226386328-612x612.png'

function ChatTabTwo ({messages, selected, onClick}) {


    const {currentRoom, setCurrentRoom} = useChatsContext();

    const handleChat = (chatValue: string) => {

        setCurrentRoom(chatValue); // Atualiza o estado

    };

    const messagesChatTwo = messages.filter((msg)=> msg.currentRoom === 'secondary');
    const lastMessageChatTwo = messagesChatTwo.at(-1);

    const formatTimestamp = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
    }

    const formatedTime = lastMessageChatTwo? formatTimestamp(lastMessageChatTwo.timestamp) : null

    return (

        <ChatsContainer onClick={onClick} style={{
            backgroundColor: selected === 'Two'? '#f4f4f4' : 'white'
        }}>
            <ChatContent>
                <PerfilImageContainer>
                    <PerfilImage src={chatImage}/>
                </PerfilImageContainer>
                <PerfilNameContainer onClick={()=> handleChat('secondary')}>
                    <PerfilName>Channel 2</PerfilName>
                    <LastMessage>
                    {lastMessageChatTwo?<>
                    <span>{lastMessageChatTwo.name}: </span><span>{lastMessageChatTwo.message}</span>
                    </> : ''}
                    </LastMessage>
                </PerfilNameContainer>

                <HoursNotificationsContainer>
                    <Hours>{formatedTime}</Hours>
                    {currentRoom === 'secondary' && <Notifications>{messages.length}</Notifications>}
                </HoursNotificationsContainer>
            </ChatContent>
                
        </ChatsContainer>
    )
}

export default ChatTabTwo;