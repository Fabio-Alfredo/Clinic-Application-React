import React from 'react';

const InputDate = ({ name, label, type, inputValue, inputOnchange }) => {

    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); 
    const day = String(now.getDate()).padStart(2, '0');
    const hour = String(now.getHours()).padStart(2, '0');
    const minute = String(now.getMinutes()).padStart(2, '0');

    const currentDateTime = `${year}-${month}-${day}T${hour}:${minute}`;


    return (
        <>
            <div className='grid grid-cols-3 sm:mx-12 items-center m-4 lg:m-4 xl:m-8 '>
                <label htmlFor={name} className='col-span-1 font-popins text-sm sm:text-2xl'> {label} </label> {/* query */}
                <input required type={type} name={name} value={inputValue} onChange={inputOnchange} min={currentDateTime}
                    className='col-span-2 pl-3 sm:ml-11 shadow-md font-popins bg-input-color rounded-md text-xs  sm:text-xl h-6 sm:h-10 ' />
            </div>
        </>
    );
};

export default InputDate;