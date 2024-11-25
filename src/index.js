import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UserStorage } from './contexts/userContext.tsx';
import { ChatsStorage } from './contexts/chatsContext.tsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ChatsStorage>
        <UserStorage>
            <App />
        </UserStorage>
    </ChatsStorage>
);
