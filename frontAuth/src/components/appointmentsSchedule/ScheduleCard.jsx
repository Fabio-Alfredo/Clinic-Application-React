import React from 'react';

const ScheduleCard = ({ reason = "fasfa", user = "Fabio", date = "12/12/12" }) => {

    const formatDate = (dateString) => {
        if (dateString === null) return 'No definida';
        const dateObj = new Date(dateString);
        const year = dateObj.getFullYear();
        const month = String(dateObj.getMonth() + 1).padStart(2, '0');
        const day = String(dateObj.getDate()).padStart(2, '0');
        return `${year}/${month}/${day}`;
    };

    const formatTimeTo12Hour = (dateString) => {
        if (dateString === null) return 'No definida';

        const dateObj = new Date(dateString);

        let hours = dateObj.getHours();
        const minutes = String(dateObj.getMinutes()).padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // El 0 debe ser 12
        const formattedHours = String(hours).padStart(2, '0');

        return `${formattedHours}:${minutes} ${ampm}`;
    };


    return (
        <>
            <div className='font-popins flex items-center group/item flex-wrap justify-between px-5 md:hover:px-3 md:px-6  w-full mt-2 py-2 text-lg list-none rounded-xl hover:bg-slate-100 hover:-translate-y-1 duration-500 cursor-pointer' key={2}>
                <div className='flex flex-col justify-start items-start my-1'>
                    <p className='font-popins font-bold text-sm sm:text-lg lg:text-xl items-center p-0 md:px-2 select-none '>Razon</p>
                    <p className='font-popins overflow-hidden text-ellipsis whitespace-nowrap w-64 text-gray-500  text-sm sm:text-lg lg:text-xl items-center p-0 md:px-2 select-none group/item2'>
                        {reason}
                        <span className='none absolute whitespace-normal break-words left-0 top-full max-w-full bg-white text-black p-2 rounded-md shadow-lg opacity-0 group-hover/item2:opacity-100 group-hover/item2:block text-wrap transition-opacity duration-300 z-10'>
                            {reason}
                        </span>
                    </p>

                </div>
                <div className=' flex-col justify-center items-center my-1  '>
                    <p className='font-popins font-bold text-sm sm:text-lg lg:text-xl items-center p-0 md:px-2 select-none '>Paciente</p>
                    <p className='font-popins text-center text-xs sm:text-lg lg:text-xl  text-gray-500 select-none'>{user}</p>
                </div>
                <div className=' flex-col justify-center items-center my-1  '>
                    <p className='font-popins font-bold text-sm sm:text-lg lg:text-xl items-center p-0 md:px-2 select-none '>Fecha</p>
                    <p className='font-popins text-center group/item3 text-xs sm:text-lg lg:text-xl  text-gray-500 select-none'>
                        {formatDate(date)}
                        <span className='none absolute whitespace-normal break-words left-[85%] top-full max-w-full bg-white text-black p-2 rounded-md shadow-lg opacity-0 group-hover/item3:opacity-100 group-hover/item3:block text-wrap transition-opacity duration-300 z-10'>
                            {formatTimeTo12Hour(date)}
                        </span>
                    </p>
                </div>

            </div>
        </>
    );
};

export default ScheduleCard;