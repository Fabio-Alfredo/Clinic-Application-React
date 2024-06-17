import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import RoleBasedComponent from '../protected/RoleBasedComponent'

const Home = () => {

    const navigate = useNavigate();
    const { roles } = useContext(AuthContext);
    console.log(roles);

    const userAppointmets = () => {
        navigate('/appointments')
    }

    return (
        <div>
            <h1>Home</h1>
            <RoleBasedComponent allowedRoles={['DCTR']} userRoles={roles}>
                <p onClick={userAppointmets}>navegar</p>
            </RoleBasedComponent>
        </div>
    );
};

export default Home;