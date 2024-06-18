import React from 'react';

const Finished = ({ name = "", reason = "" }) => {

    return (

        <>
            <div className='font-popins group/item flex items-center flex-wrap justify-between md:hover:px-6 px-6  w-full mt-2 py-2 text-lg list-none rounded-xl hover:bg-slate-100 hover:-translate-y-1 duration-500 ' key={2}>
                <div className='flex flex-col w-full justify-start items-start py-1'>
                    <p className='font-popins font-bold text-sm sm:text-lg lg:text-xl items-center p-0 md:px-2 select-none '>{name}</p>
                    <p className='font-popins overflow-hidden text-ellipsis whitespace-nowrap min-w-full text-gray-500 text-sm sm:text-lg lg:text-xl items-center p-0 md:px-2 select-none group/item2 cursor-pointer'>
                        {reason}
                        {/* <span className='none absolute whitespace-normal break-words left-0 top-full max-w-full bg-white text-black p-2 rounded-md shadow-lg opacity-0 group-hover/item2:opacity-100 group-hover/item2:block text-wrap transition-opacity duration-300 z-10'>
                            {reason}
                        </span> */}
                    </p>
                </div>
            </div>
        </>
    );
};

export default Finished;