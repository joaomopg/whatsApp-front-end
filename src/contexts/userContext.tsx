import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import api from '../api.ts'

export const UserContext = createContext({} as any);

interface UserStorageProps {
  children: ReactNode;
}

export const UserStorage = ({ children }: UserStorageProps)=> {

  const [login, setLogin] = useState(false);
  const [user, setUser] = useState([]);
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'));
  const [name, setName] = useState('');
  
  const handleSignUp = (name: string, password: string, profilePicture: string)=> {
    api.post('/user/sign-up', {name, password, profilePicture}).then(({data})=> {
      console.log(data.message);
      alert(`${data.message}`);
    }).catch(()=> {
      alert('Não foi possível realizar o cadastro.');
    })
  }

  const getUser = (token: string)=> {
    api.get('/user/get-user', {headers: {Authorization: token}}).then(({data})=> {
      setLogin(true);
      setUser(data.user);
      setName(data.user.name)
    }).catch((error)=> {
      console.log('Erro ao tentar buscar as informações do usuário', error);
    })
  }

  
  const handleLogin = (name: string, password: string) => {
    api.post('/user/sign-in', {name, password}).then(({data})=> {
      setLogin(true);
      console.log(data.token)
      localStorage.setItem('token', data.token);
      //getUser(data.token);
      setToken(data.token)
    }).catch((data)=> {
      alert('Usuário ou senha incorretos')
    })
  }
  
  /*useEffect(()=> {
    if(token){
      getUser(token)
    }
  }, [token]);
  */

  return (
    <UserContext.Provider value={{
      handleSignUp,
      login,
      setLogin,
      handleLogin,
      user,
      name,
      setName
    }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = ()=> {
  return useContext(UserContext);
}