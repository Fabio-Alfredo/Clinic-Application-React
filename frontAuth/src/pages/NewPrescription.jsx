import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import PacientCard from '../components/appoinmentsPacientComponents/AppoinmentCard';
import { getfinishedAppointments } from '../service/service';
import { IoAlertCircleOutline } from "react-icons/io5";
import Swal from 'sweetalert2'



const NewPrescription = () => {

    const [appointments, setAppointments] = useState([])

    const fetchAppointments = async () => {
        try {
            const res = await getfinishedAppointments()
            console.log(res.data);
            setAppointments(res.data)

        } catch (error) {
            Swal.fire({
                title: "Error!",
                text: `${error.response.data.message}`,
                icon: "error",
            })
        }

    }

    useEffect(() => {
        fetchAppointments()
    }, [])

    return (
        <div className='flex items-center justify-center w-full bg-color-primary px-6  h-screen'>
            <div className='w-full p-4 sm:p-8 shadow-2xl rounded-3xl bg-white h-fit lg:w-2/3  xl:w-1/2' > {/* query */}
                <Navigation title={"Citas medicas"} />
                <hr className='h-0.5 bg-black mb-6 mx-4' />
                <div className='flex'>
                    <div className='w-full'>
                        {appointments.length > 0 ? (
                            <div className='overflow-y-auto h-[35vh] md:h-[40vh] px-4 items-center border-solid border-black'>
                                {
                                    appointments.map(appointment => (
                                        <PacientCard key={appointment.id} reason={appointment.reason} phase={appointment.status} date={appointment.realization} />
                                    ))
                                }
                            </div>
                        ) : (
                            <div className='overflow-y-auto flex border-solid border-2 justify-center items-center h-[35vh] md:h-[50vh] px-4'>
                                <p className='flex gap-2'>No hay citas disponibles. <IoAlertCircleOutline /></p>
                            </div>
                        )}
                    </div>
                    <div className='flex flex-col w-full items-center'>
                        <form>
                            <input type="text" placeholder="Buscar cita" className="w-full p-2 border-2 border-black rounded-xl" name="search" id="search" />
                            <input type="submit" value="Buscar" className="w-full p-2 bg-black text-white rounded-xl mt-2 hover:bg-slate-100 hover:text-black transition ease-in-out duration-200 hover:ring-2 hover:ring-black" />
                        </form>
                    </div>
                </div>
                <hr className='h-0.5 bg-black my-8 mx-4' />
            </div>
        </div>
    );
};

export default NewPrescription;