import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import RoleBasedComponent from '../protected/RoleBasedComponent'
import Header from '../components/Header';
import InfoContainer from '../components/HomeComponents/InfoContainer';
import { GridLoader } from 'react-spinners';


const Home = () => {

    // const navigate = useNavigate();
    const { roles, user } = useContext(AuthContext);
    console.log(user)

    // const userAppointmets = () => {
    //     navigate('/appointments')
    // }

    if(user == null){
        return(
            <div className='h-screen w-full flex justify-center items-center'>
                <GridLoader color="#36d7b7" />
            </div>
        )
    }

    return (

        <div>
            <Header/>
            <InfoContainer name={user.name} email={user.email} />
        </div>
    );
};

export default Home;

{/* <h1>Home</h1>
            <RoleBasedComponent allowedRoles={['DCTR']} userRoles={roles}>
                <p onClick={userAppointmets}>navegar</p>
            </RoleBasedComponent> */}