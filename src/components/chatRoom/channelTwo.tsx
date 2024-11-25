import React, { useEffect, useState } from 'react';
import socket from 'socket.io-client'
import { 
  BottomBarContainer, 
  BtnJoin, 
  ChatContainer, 
  ChatContainerTwo, 
  ChatContent, 
  Input, 
  InputContent, 
  JoinChatContainer, 
  JoinChatImage, 
  JoinChatImageContainer, 
  Members, 
  MessageStyle, 
  TopBarContainer, 
  TopBarLeft, 
  TopBarRight 
} from '../../AppStyled.ts';
import { 
  PerfilImage, 
  PerfilImageContainer, 
  PerfilName, 
  PerfilNameContainer 
} from '../ChatTabs/chatStyled.ts';
import Icon from '../icons/icons.tsx';
import mais from '../../assets/images/mais.png'
import lupa from '../../assets/images/lupa.png'
import microfone from '../../assets/images/microfone.png'
import options from '../../assets/images/mais(2).png'
import send from '../../assets/images/send.png'
import emojis from '../../assets/images/smile.png'
import { useChatsContext } from '../../contexts/chatsContext.tsx';

const io = socket('http://localhost:4000');

function ChannelTwo({users, name}) {

    const {currentRoom, enterChannelTwo, setEnterChannelTwo} = useChatsContext();

    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);


    console.log("Sala atual no ChannelTwo:", currentRoom);

    const handleMessage = (msg: string) => {
      if(message){
        io.emit("message", {message: msg, name, currentRoom});
        setMessage("")
        console.log(`Mensagem enviada para a sala ${currentRoom}:`, message);
      }
    }

    const handleJoin = () => {
      setEnterChannelTwo(true)
      console.log(currentRoom);
      io.emit("join", {name, currentRoom: currentRoom});
    }

    const handlekeyPress = (e: React.KeyboardEvent) => {
      if (e.key === 'Enter'){
        handleMessage(message);
      }
    }

    return (
        <>
          <JoinChatContainer display={enterChannelTwo}>
            <JoinChatImageContainer>
              <JoinChatImage/>
            </JoinChatImageContainer>
            <BtnJoin onClick={()=> handleJoin()}>Entrar no chat</BtnJoin>

          </JoinChatContainer>

          <ChatContainerTwo display={enterChannelTwo}>
              <TopBarContainer>
                <TopBarLeft>
                  <PerfilImageContainer>
                    <PerfilImage/>
                  </PerfilImageContainer>
                  <PerfilNameContainer>
                    <PerfilName>Channel 2</PerfilName>
                    <Members></Members>
                  </PerfilNameContainer>
                </TopBarLeft>

                <TopBarRight>
                  <Icon margin src={lupa}/>
                  <Icon src={mais}/>
                </TopBarRight>
              </TopBarContainer>

              <ChatContent>
                {messages.map((message: { name: string; message: string }, index) => {
                  console.log("Mensagem renderizada:", message);
                  return (
                    <MessageStyle
                      key={index}
                      isSender
                      style={{
                        alignSelf: message.name === name ? "flex-end" : "flex-start",
                        backgroundColor: message.name === name ? "#dcfcd4" : "white",
                      }}
                    >
                      {message.name ? `${message.name}: ` : ""}
                      {message.message}
                    </MessageStyle>
                  );
                })}
              </ChatContent>

              <BottomBarContainer>
                <Icon src={emojis} margin/>
                <Icon src={options} margin/>
                <InputContent>
                  <Input 
                  placeholder="Digite uma mensagem" 
                  onChange={(e)=> setMessage(e.target.value)} 
                  onKeyDown={handlekeyPress}
                  value={message}/>
                  <Icon src={send} styles onClick={()=> handleMessage(message)}/>
                </InputContent>
                <Icon src={microfone}/>
              </BottomBarContainer>
          </ChatContainerTwo>
        </>
    )
}

export default ChannelTwo;