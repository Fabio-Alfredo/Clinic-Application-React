import React from 'react';
import { RiArrowLeftCircleLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

const Navigation = ({ title }) => {

    const nav = useNavigate();

    const handleNavigation = () => {
        nav(-1);
    }

    return (
        <>
            <nav className='flex felx-row items-center justify-center p-4 sm:mb-6 group/item'> {/* query */}
                    <RiArrowLeftCircleLine onClick={handleNavigation} className='hidden text-5xl flex-shrink-0 md:block cursor-pointer group-hover/item:scale-110 duration-500' />

                <h2 className='font-brygada-1918 text-center flex-grow md:mr-12 text-3xl sm:text-5xl select-none'>{title}</h2> {/* query */}
            </nav>
        </>
    );
};

export default Navigation;
