import React from 'react';

const InfoContainer = () => {
    return (
        <div>
            <div className="min-w-screen min-h-[90vh] flex flex-col pt-6 md:pt-0 md:justify-center items-center gap-10 bg-color-primary ">
                <h1 className='w-full font-brygada-1918 text-2xl md:text-4xl xl:text-6xl md:pl-24 xl:pl-36 text-center md:text-start'>Bienvenido</h1>
                <div className='w-[320px] xs:w-[360px] h-80 sm:h-[360px] md:w-[700px] md:h-[360px] p-8 md:p-12 bg-white grid grid-flow-dense grid-rows-8 grid-cols-1 md:grid-rows-3 md:grid-cols-3 justify-center items-center shadow-2xl rounded-xl'>
                    <div className='row-span-5 md:row-span-2 flex justify-center'>
                        <img className='w-32 h-32 md:w-44 md:h-44 rounded-full border-4  border-black' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8MlHRXj6u_CLnoBwz68L2zHsewGO8k-5jyA&s' />
                    </div>
                    <p className='md:col-span-2 text-lg sm:text-xl md:text-4xl  font-popins font-bold text-center self-end'>Nombre Apellido</p>
                    <p className='md:col-span-2 text-sm sm:text-base md:text-xl text-center self-start'>administrador@gmail.com</p>
                    <div className='col-end-4 w-full h-full flex items-start justify-start'>
                        <button type='submit' className='w-36  bg-blue-500 hover:bg-blue-600  text-white font-semibold py-3 px-4 rounded-xl'>Cerrar sesion</button>
                    </div>
                </div>

            </div>
        </div>

    )
};

export default InfoContainer;