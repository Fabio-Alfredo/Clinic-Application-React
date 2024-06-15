import React, { useState, useEffect } from 'react';
import { FaCirclePlus } from "react-icons/fa6";

const MenuRequest = ({ setfilter }) => {

    const [state, setstate] = useState(false)

    const handleEvent = (e) => {
        e.stopPropagation()
        setstate(!state)
    }

    const handleFilter = (value) => {
        setfilter(value)
        setstate(!state)
    }


    return (
        <div className='w-full flex justify-end items-center '>

            <div onClick={handleEvent} className='relative pr-4 sm:pr-8 pb-2 cursor-pointer group/item'>
                <ul className={`absolute right-7 sm:right-11  top-7 mt-2 p-1 rounded-lg bg-slate-100 shadow-md ${state ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} z-50`}>
                    <li onClick={() => handleFilter(" ")} className='font-popins text-sm flex sm:text-lg lg:text-xl items-center select-none py-2 px-4 hover:bg-white duration-500 rounded-lg'>Todas</li>
                    <li onClick={() => handleFilter("APPROVED")} className='font-popins text-sm flex sm:text-lg lg:text-xl items-center select-none py-2 px-4 hover:bg-white duration-500 rounded-lg'>Aprobada</li>
                    <li onClick={() => handleFilter("FINISHED")} className='font-popins text-sm flex sm:text-lg lg:text-xl items-center select-none py-2 px-4 hover:bg-white  duration-500 rounded-lg'>Finalizada</li>
                    <li onClick={() => handleFilter("PENDING")} className='font-popins text-sm flex sm:text-lg lg:text-xl items-center select-none py-2 px-4 hover:bg-white  duration-500 rounded-lg'>Pendiente</li>
                    <li onClick={() => handleFilter("DENIED")} className='font-popins text-sm flex sm:text-lg lg:text-xl items-center select-none py-2 px-4 hover:bg-white  duration-500 rounded-lg'>Rechazada</li>
                </ul>
                <p className='font-popins text-sm flex sm:text-lg lg:text-xl items-center select-none py-2 px-4 rounded-full hover:bg-slate-100 duration-500 '>
                    Filtrar
                    <FaCirclePlus className='text-xl pl-2 sm:text-2xl lg:text-3xl group-hover/item:scale-110 duration-300' />

                </p>
            </div>
        </div>
    );
};

export default MenuRequest;