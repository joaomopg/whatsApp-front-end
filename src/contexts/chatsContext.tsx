import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface ChatsStorageProps {
    children: ReactNode;
}

export const ChatsContext = createContext({} as any);

export const ChatsStorage = ({ children }: ChatsStorageProps)=> {

    const [currentRoom, setCurrentRoom] = useState('main');
    const [enterChannelTwo, setEnterChannelTwo] = useState(false);

    return (
        <ChatsContext.Provider value={{currentRoom, setCurrentRoom, enterChannelTwo, setEnterChannelTwo}}>
            {children}
        </ChatsContext.Provider>
    )
}

export const useChatsContext = () => {
    return useContext(ChatsContext)
}