import React from 'react';

const TexTarea = ({ name, label, rows, cols, inputValue, inputOnchange }) => {
    return (
        <>
            <div className='grid grid-cols-3 sm:mx-12 items-center m-2 lg:m-4 xl:m-8'>
                <label htmlFor={name} className='col-span-1 font-popins self-start text-sm sm:text-2xl'> {label} </label> {/* query */}
                <textarea required  rows={rows} cols={cols} name={name} value={inputValue} onChange={inputOnchange}
                    className='col-span-2 py-2 px-4 resize-none sm:ml-11 shadow-md font-popins bg-input-color rounded-md  text-xs sm:text-xl ' />
            </div>
        </>
    );
};

export default TexTarea;