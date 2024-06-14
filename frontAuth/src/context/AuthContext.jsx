import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(null);

    return (
        <div>

        </div>
    );
};

export default { AuthContext, AuthProvider };