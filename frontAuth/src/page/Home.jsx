import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate()

    const handleLogout=()=>{
        localStorage.removeItem("isAuthenticated")
        navigate('/')
    }

    return (
        <div>
            <h1 className='text-center font-bold'>WELCOME</h1>
            <button className="bg-black min-w-[50%] p-4 text-white font-Roboto self-end rounded-xl mt-6 hover:bg-slate-100/70 hover:text-black transition ease-in-out duration-200 hover:ring-2 hover:ring-black"  onClick={handleLogout} type="submit" value="Sign In" >Logout</button>
        </div>
    );
};

export default Home;