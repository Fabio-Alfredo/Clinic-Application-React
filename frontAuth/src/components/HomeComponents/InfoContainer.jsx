import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { CiMedicalClipboard, CiMedicalCross } from "react-icons/ci";
import { SiReacthookform } from "react-icons/si";
import RoleBasedComponent from '../../protected/RoleBasedComponent';

const InfoContainer = ({ name = 'name', email = 'email@gmail.com' }) => {

    const { removeData, roles } = useContext(AuthContext);
    const nav = useNavigate();

    const handleLogout = () => {
        removeData();
        nav('/');
    }

    return (
        <div>
            <div className="min-w-screen min-h-[88vh] bg-slate-400 flex flex-col pt-6 md:pt-0 md:justify-center items-center gap-10 bg-color-primary ">
                <h1 className='w-full font-brygada-1918 text-2xl md:text-4xl xl:text-6xl md:pl-24 xl:pl-36 text-center md:text-start'>Bienvenido</h1>
                <div className='w-[320px] xs:w-[360px] h-fit  md:w-[700px] p-8 md:p-12 bg-white grid grid-flow-dense grid-rows-8 grid-cols-1 md:grid-rows-3 md:grid-cols-3 justify-center items-center shadow-2xl rounded-xl'>
                    <div className='row-span-5 md:row-span-2 flex justify-center'>
                        <img className='w-32 h-32 md:w-44 md:h-44 rounded-full border-4  border-black' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8MlHRXj6u_CLnoBwz68L2zHsewGO8k-5jyA&s' />
                    </div>
                    <p className='md:col-span-2 text-lg sm:text-xl md:text-4xl  font-popins font-bold text-center self-end'>{name}</p>
                    <p className='md:col-span-2 text-sm sm:text-base md:text-xl text-center self-start'> {email} </p>
                    <div className='col-end-4 w-full h-full flex items-start justify-start'>
                        <button type='submit' onClick={handleLogout} className='w-36  bg-blue-500 hover:bg-blue-600  text-white font-semibold py-3 px-4 rounded-xl'>Cerrar sesion</button>
                    </div>
                </div>
                <div className='w-[320px] xs:w-[360px] h-fit md:w-[700px] flex  justify-center items-center p-x8 md:px-12'>
                    <ul className='flex gap-6 justify-center group-item:' >
                        <Link to='/create/appointment'>
                            <li className='h-fit w-44 p-4 flex flex-col justify-center items-center border border-solid border-blue-500 bg-blue-400 rounded-xl text-2xl hover:scale-110 duration-300 cursor-pointer' >
                                Crear cita  <CiMedicalClipboard className='font-bold text-3xl' />
                            </li>
                        </Link>
                        <RoleBasedComponent allowedRoles={['ASST']} userRoles={roles}>
                        <Link to='/approved/appointent'>
                            <li className='h-fit w-44 p-4 flex flex-col justify-center items-center border border-solid border-blue-500  bg-blue-400 rounded-xl text-2xl hover:scale-110 duration-300 cursor-pointer'>
                                Aprobar cita <CiMedicalCross className='font-bold text-3xl' />
                            </li>
                        </Link>
                        </RoleBasedComponent>
                        <RoleBasedComponent allowedRoles={['DCTR']} userRoles={roles}>
                            <Link to='/create/historic'>
                                <li className='h-fit w-44 p-4 flex flex-col justify-center items-center border border-solid border-blue-500 bg-blue-400 rounded-xl text-2xl hover:scale-110 duration-300 cursor-pointer'>
                                    Crear historial <SiReacthookform className='font-extrabold text-3xl' />
                                </li>

                            </Link>
                        </RoleBasedComponent>
                    </ul>

                </div>

            </div>
        </div >

    )
};

export default InfoContainer;