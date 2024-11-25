import { 
  BottomBarContainer, 
  BtnJoin, 
  ButtonLogin, 
  ButtonsContainer, 
  ChatContainer, 
  ChatContainerTwo, 
  ChatContent, 
  CheckBoxContent, 
  CloseBtn, 
  Container, 
  ContainerAll, 
  ContainerContent, 
  DivGreen, 
  IconContainer, 
  IconImage, 
  IconsContent, 
  IconWhats, 
  Input, 
  InputContent, 
  InputImage, 
  InputName, 
  JoinChatContainer, 
  JoinChatImage, 
  JoinChatImageContainer, 
  LeftMenu, 
  Members, 
  MenuBottom, 
  MenuTop, 
  MessageStyle, 
  Modal, 
  ModalContainer, 
  PerfilName, 
  PerfilNameContainer, 
  TextIcon, 
  TextLogin, 
  Texts, 
  TopBarContainer, 
  TopBarLeft, 
  TopBarRight
} from "./AppStyled.ts";
import chats from '../src/assets/images/bater-papo.png'
import status from '../src/assets/images/status.png'
import comunidades from '../src/assets/images/comunidade.png'
import canais from '../src/assets/images/comente.png'
import configuracoes from '../src/assets/images/configuracoes.png'
import mais from './assets/images/mais.png'
import lupa from './assets/images/lupa.png'
import whats from './assets/images/whatsapp.png'
import microfone from './assets/images/microfone.png'
import options from './assets/images/mais(2).png'
import send from './assets/images/send.png'
import emojis from './assets/images/smile.png'
import imageChatOne from './assets/images/profissao-programador.png'
import imageChatTwo from './assets/images/istockphoto-1226386328-612x612.png'
import Icon from "./components/icons/icons.tsx";
import { useEffect, useState } from "react";
import ChannelsComponent from "./components/channels/channels.tsx";
import CommunitiesComponent from "./components/communities/communities.tsx";
import StatusComponent from "./components/status/status.tsx";
import Conversations from "./components/conversations/conversationContainer.tsx";
import { PerfilImage, PerfilImageContainer } from "./components/ChatTabs/chatStyled.ts"
import socket from "socket.io-client";
import { useUserContext } from "./contexts/userContext.tsx";
import { useChatsContext } from "./contexts/chatsContext.tsx";
import ChannelTwo from "./components/chatRoom/channelTwo.tsx";
import ChannelOne from "./components/chatRoom/channelOne.tsx";

function App() {

  const io = socket('http://localhost:4000'); //inicializa uma conexão com o servidor Socket.IO em execução no endereço http://localhost:4000
  
  const [activeSection, setActiveSection] = useState('chats');
  const [typePassword, setTypePassword] = useState(false);

  const [modal, setModal] = useState(false);
  const {name, setName, handleSignUp, login, user, handleLogin} = useUserContext()
  
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [profilePicture, setProfilePicture] = useState('');

  const {currentRoom, enterChannelTwo, setEnterChannelTwo} = useChatsContext();

  const handleSignIn = async () => {  //Login
    if(name !== '' && password !== ''){
      try {
        await handleLogin(name, password);
        io.emit("join", {name: name, currentRoom: currentRoom});
        
      } catch (error) {
        console.log({message: 'Erro ao tentar fazer requisição'})
      }
    }
  }

  const handleJoin = () => {
    setEnterChannelTwo(true)
    console.log(currentRoom);
  }

  const handleMessage = () => {
    if(message){
      io.emit("message", {message, name: name, currentRoom});
      setMessage("")
      console.log(`Mensagem enviada para a sala ${currentRoom}:`, message);
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
        handleMessage(message);
    }
  };

  useEffect(() => {
    io.emit("join", {name: name, currentRoom: currentRoom});

    io.on("join", (infos)=> {
      setMessages([]);
      if (currentRoom === 'main'){
        io.emit("leave", {currentR: 'secondary'});
        console.log(infos.message)
      }
      if (currentRoom === 'secondary'){
        io.emit("leave", {currentR: 'main'})
        console.log(infos.message)
      } 
    });

    io.on("users", (users)=> setUsers(users));

    // Função para lidar com novas mensagens
    const handleNewMessage = (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    };
  
    // Registra o ouvinte para o evento "message"
    io.on("message", handleNewMessage);

    return () => {
      io.off("message", handleNewMessage);
      io.off("join");
      io.off("users");
    };

  }, [currentRoom]);


  const handleClick = (section) => {
    // Zera todos os estados e ativa apenas o clicado
    setActiveSection(section)
  }

  const signUp = async () => {
    if(name !== '' && password !== ''){
      try {
          await handleSignUp(name, password, profilePicture);
          
      } catch (error) {
          console.log('Erro durante o cadastro:', error);
      }
    }
  }

  if(login === false){
    return (
      <ContainerAll>
        <DivGreen/>
        <Container>
          <ContainerContent>
            <IconContainer>
              <IconWhats>
                <IconImage src={whats}/>
              </IconWhats>
              <TextIcon>WHATSAPP WEB</TextIcon>
            </IconContainer>
            <TextLogin>Para usar o WhatsApp no seu computador:</TextLogin>
            <Texts>1. Insira seu nome:</Texts>
            <InputName 
              value={name} 
              onChange={(e)=> setName(e.target.value)} 
              placeholder='Digite seu nome'
            />
            <Texts>2. Insira sua senha:</Texts>
            <InputName 
              value={password}
              type={typePassword? 'text' : 'password'} 
              onChange={(e)=> setPassword(e.target.value)} 
              placeholder='Digite sua senha'
            />
            <CheckBoxContent>
              <input type="checkbox" onClick={()=> setTypePassword(!typePassword)}/>
              <span style={{fontSize: '14px', fontWeight: '300'}}>Mostrar senha</span>
            </CheckBoxContent>
            <ButtonsContainer>
              <ButtonLogin onClick={()=> handleSignIn()}>Entrar</ButtonLogin>
              <ButtonLogin onClick={()=> setModal(true)}>Cadastrar-se</ButtonLogin>
            </ButtonsContainer>

          </ContainerContent>
        </Container>
        <ModalContainer status={modal}>
          <Modal>
            <CloseBtn onClick={()=> setModal(false)}>X</CloseBtn>
            <TextLogin>Faça o seu cadastro:</TextLogin>
            <Texts>1. Insira seu nome:</Texts>
            <InputName 
            value={name} 
            onChange={(e)=> setName(e.target.value)} 
            placeholder='Digite seu nome'/>
            <Texts>2. Insira sua senha:</Texts>
            <InputName 
            value={password} 
            onChange={(e)=> setPassword(e.target.value)} 
            placeholder='Digite sua senha'/>
            <Texts>3. Insira uma URL de uma foto para o seu Perfil:</Texts>
            <InputName 
            value={profilePicture} 
            onChange={(e)=> setProfilePicture(e.target.value)} 
            placeholder='URL da imagem'/>
            <ButtonsContainer>
              <ButtonLogin onClick={()=> signUp()}>Cadastrar</ButtonLogin>
            </ButtonsContainer>
          </Modal>
        </ModalContainer>
      </ContainerAll>
    )
  }

  return (
    <ContainerAll>
        <DivGreen/>
        <Container>
            <LeftMenu>
                <MenuTop>
                    <Icon src={chats} onClick={() => handleClick('chats')}/>
                    <Icon src={status} onClick={() => handleClick('status')}/>
                    <Icon src={canais} onClick={() => handleClick('canais')}/>
                    <Icon src={comunidades} onClick={() => handleClick('comunidades')}/>
                </MenuTop>

                <MenuBottom>
                    <Icon src={configuracoes}/>
                    <Icon src={user.profile_picture} profile/>
                </MenuBottom>
                
            </LeftMenu>

            <IconsContent>

              {activeSection === 'chats' && <Conversations messages={messages} name={name}/>}
              {activeSection === 'status' && <StatusComponent />}
              {activeSection === 'canais' && <ChannelsComponent />}
              {activeSection === 'comunidades' && <CommunitiesComponent />}

            </IconsContent>

            {currentRoom === 'main' && 
              <ChatContainer>
                <TopBarContainer>
                  <TopBarLeft>
                    <PerfilImageContainer>
                      <PerfilImage src={imageChatOne}/>
                    </PerfilImageContainer>
                    <PerfilNameContainer>
                      <PerfilName>Profissão Programador</PerfilName>
                        <Members>{users
                          .filter((user) => user.name && user.name.trim() !== "") // Filtra usuários sem nome
                          .map((user, index, filteredUsers) => (
                            <div style={{display: 'flex'}}>
                              <span key={user.id}>
                                {user.name}
                                {index + 1 < filteredUsers.length ? ', ' : ''}
                              </span>
                            </div>
                          ))
                        }</Members>
                    </PerfilNameContainer>
                  </TopBarLeft>

                  <TopBarRight>
                    <Icon margin src={lupa}/>
                    <Icon src={mais}/>
                  </TopBarRight>
                </TopBarContainer>

                <ChatContent>
                {messages.map((message, index) => {
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
                    onKeyDown={handleKeyPress}
                    value={message}/>
                    <Icon src={send} styles onClick={()=> handleMessage(message)}/>
                  </InputContent>
                  <Icon src={microfone}/>
                </BottomBarContainer>
              </ChatContainer>
            }

            {currentRoom === 'secondary' && 
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
                          <PerfilImage src={imageChatTwo}/>
                        </PerfilImageContainer>
                        <PerfilNameContainer>
                          <PerfilName>Channel 2</PerfilName>
                          <Members>{users
                            .filter((user) => user.name && user.name.trim() !== "") // Filtra usuários sem nome
                            .map((user, index, filteredUsers) => (
                              <div style={{display: 'flex'}}>
                                <span key={user.id}>
                                  {user.name}
                                  {index + 1 < filteredUsers.length ? ', ' : ''}
                                </span>
                              </div>
                            ))
                          }</Members>
                        </PerfilNameContainer>
                      </TopBarLeft>

                      <TopBarRight>
                        <Icon margin src={lupa}/>
                        <Icon src={mais}/>
                      </TopBarRight>
                    </TopBarContainer>

                    <ChatContent>
                      {messages.map((message, index) => {
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
                        onKeyDown={handleKeyPress}
                        value={message}/>
                        <Icon src={send} styles onClick={()=> handleMessage(message)}/>
                      </InputContent>
                      <Icon src={microfone}/>
                    </BottomBarContainer>
                </ChatContainerTwo>
              </>
            }
        </Container>
    </ContainerAll>
  );
}

export default App;
