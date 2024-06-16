import React from 'react';
import { FaCirclePlus } from "react-icons/fa6";
import Swal from 'sweetalert2'

const DateHistory = ({setFilter}) => {

    const handleFilter = async () => {
        const { value: date } = await Swal.fire({
            title: "select departure date",
            input: "date",
            didOpen: () => {
                const today = (new Date()).toISOString();
                Swal.getInput().min = today.split("T")[0];
            }
        });
        if (date) {
            setFilter(date);
            // console.log(date);
        }
    }

    return (
        <div className='w-full flex justify-end items-center '>
            <div onClick={handleFilter} className='relative pr-4 sm:pr-8 pb-2 cursor-pointer group/item'>
                <p className='font-popins text-sm flex sm:text-lg lg:text-xl items-center select-none py-2 px-4 rounded-full hover:bg-slate-100 duration-500 '>
                    Filtrar
                    <FaCirclePlus className='text-xl pl-2 sm:text-2xl lg:text-3xl group-hover/item:scale-110 duration-300' />

                </p>
            </div>

        </div>
    );
};

export default DateHistory;