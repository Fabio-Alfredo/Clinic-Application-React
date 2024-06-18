import React, { createContext, useState, useEffect } from 'react';
import { getRolesUser } from '../service/service';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(null);
    const [roles, setRole] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const savedToken = localStorage.getItem('token');
        const savedUser = localStorage.getItem('user');
        if (savedToken) {
            saveRole();
            setToken(JSON.parse(savedToken));
            setUser(JSON.parse(savedUser));
        }
    }, []);


    const saveToken = (newToken) => {
        localStorage.setItem('token', JSON.stringify(newToken));
        setToken(newToken.token);
    };

    const saveRole = async () => {
        const res = await getRolesUser();
        setRole(res.data);
    }

    const saveUser = (data)=>{
        const user = {name: data.name, email: data.email}
        localStorage.setItem('user', JSON.stringify(user));
        setUser(user);
    }

    const removeData = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setUser(null);
        setToken(null);
    };

    return (
        <AuthContext.Provider value={{ user, token,roles, saveRole, saveToken, removeData, saveUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
