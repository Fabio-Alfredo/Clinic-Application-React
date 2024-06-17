import React from 'react';
import { FaHandHoldingMedical } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Header = () => {



    return (
        <div className='w-full h-[12vh] flex justify-between items-center pl-12 pr-28 py-6 bg-blue-400 '>
            <h1 className='text-4xl font-bold flex gap-4' >Clinica <FaHandHoldingMedical /></h1>
            <div>
                <ul className='flex gap-10 text-2xl'>
                    <Link to='/appointments'>
                        <li className='hover:scale-110 duration-300 cursor-pointer'  >Ver citas</li>
                    </Link>
                    <Link to='/schedule'>
                        <li className='hover:scale-110 duration-300 cursor-pointer'> Cronograma</li>
                    </Link>
                    <li className='hover:scale-110 duration-300 cursor-pointer'> otra</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;