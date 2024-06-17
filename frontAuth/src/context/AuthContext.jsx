import React, { createContext, useState, useEffect } from 'react';
import { getRolesUser } from '../service/service';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(null);
    const [roles, setRole] = useState([]);

    useEffect(() => {
        const savedToken = localStorage.getItem('token');
        if (savedToken) {
            console.log('entro');
            saveRole();
            setToken(JSON.parse(savedToken));
        }
    }, []);


    const saveToken = (newToken) => {
        localStorage.setItem('token', JSON.stringify(newToken));
        setToken(newToken.token);
        console.log(token.token);
    };

    const saveRole = async () => {
        const res = await getRolesUser();
        console.log(res.data);
        setRole(res.data);
    }

    const removeToken = () => {
        localStorage.removeItem('token');
        setToken(null);
    };

    return (
        <AuthContext.Provider value={{  token,roles, saveToken, removeToken }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
