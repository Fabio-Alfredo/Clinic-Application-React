import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import RoleBasedComponent from '../protected/RoleBasedComponent'
import Header from '../components/Header';
import InfoContainer from '../components/HomeComponents/InfoContainer';

const Home = () => {

    // const navigate = useNavigate();
    // const { roles } = useContext(AuthContext);


    // const userAppointmets = () => {
    //     navigate('/appointments')
    // }

    return (
        <div>
            <Header/>
            <InfoContainer/>
        </div>
    );
};

export default Home;

{/* <h1>Home</h1>
            <RoleBasedComponent allowedRoles={['DCTR']} userRoles={roles}>
                <p onClick={userAppointmets}>navegar</p>
            </RoleBasedComponent> */}