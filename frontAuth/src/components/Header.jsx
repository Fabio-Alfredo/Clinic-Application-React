import React from 'react';
import { FaHandHoldingMedical } from "react-icons/fa6";

const Header = () => {
    return (
        <div  className='w-full h-fit flex justify-between items-center pl-12 pr-28 py-6 bg-blue-400 '>
            <h1 className='text-4xl font-bold flex gap-4' >Clinica <FaHandHoldingMedical /></h1>
            <div>
                <ul className='flex gap-10 text-2xl'>
                    <li className='hover:scale-110 hover:translate-y-1 cursor-pointer' >Ver citas</li>
                    <li className='hover:scale-110 hover:translate-y-1 cursor-pointer'> otra</li>
                    <li className='hover:scale-110 hover:translate-y-1 cursor-pointer'> otra</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;