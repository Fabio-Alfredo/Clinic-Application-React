import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();

    const userAppointmets = () => {
        navigate('/appointments')
    }

    return (
        <div>
            <h1>Home</h1>
            <p onClick={userAppointmets}>navegar</p>
        </div>
    );
};

export default Home;