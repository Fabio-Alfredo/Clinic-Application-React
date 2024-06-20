import React, { useContext } from 'react';
import { FaHandHoldingMedical } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import RoleBasedComponent from '../protected/RoleBasedComponent';

const Header = () => {

    const { roles } = useContext(AuthContext);

    return (
        <div className='w-full h-[12vh] flex justify-between items-center pl-12 pr-28 py-6 bg-blue-400 '>
            <h1 className='text-4xl font-bold flex gap-4' >Clinica <FaHandHoldingMedical /></h1>
            <div>
                <ul className='flex gap-10 text-2xl'>

                    <RoleBasedComponent allowedRoles={['DCTR']} userRoles={roles}>
                        <Link to='/finish/appointment'>
                            <li className='hover:scale-110 duration-300 cursor-pointer'> Finalizar Cita</li>
                        </Link>
                    </RoleBasedComponent>

                    <RoleBasedComponent allowedRoles={['PCTE']} userRoles={roles}>
                        <Link to='/appointments'>
                            <li className='hover:scale-110 duration-300 cursor-pointer'  >Ver citas</li>
                        </Link>
                    </RoleBasedComponent>

                    <RoleBasedComponent allowedRoles={['PCTE']} userRoles={roles}>
                        <Link to='/schedule'>
                            <li className='hover:scale-110 duration-300 cursor-pointer'> Cronograma</li>
                        </Link>
                    </RoleBasedComponent>

                    <RoleBasedComponent allowedRoles={['DCTR']} userRoles={roles}>
                        <Link to='/prescriptions'>
                            <li className='hover:scale-110 duration-300 cursor-pointer'> Prescripciones</li>
                        </Link>
                    </RoleBasedComponent>

                    <RoleBasedComponent allowedRoles={['ADMN']} userRoles={roles}>
                        <Link to='/changerol'>
                            <li className='hover:scale-110 duration-300 cursor-pointer'> Cambiar rol</li>
                        </Link>
                    </RoleBasedComponent>
                </ul>
            </div>
        </div>
    );
};

export default Header;