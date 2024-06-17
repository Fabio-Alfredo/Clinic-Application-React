import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import PacientCard from '../components/appoinmentsPacientComponents/AppoinmentCard';
import MenuRequest from '../components/appoinmentsPacientComponents/MenuRequest';
import { getAppointments } from '../service/service';
import { IoAlertCircleOutline } from "react-icons/io5";
import Swal from 'sweetalert2'

const FinishAppointment = () => {
    const [filter, setfilter] = useState('')
    const [appointments, setAppointments] = useState([])

    const fetchAppointments = async () => {
        try {
            const res = await getAppointments(filter)
            console.log(res.data);
            setAppointments(res.data)

        } catch (error) {
            Swal.fire({
                title: "Error!",
                text: `${error.data.message}`,
                icon: "error",
            })
        }

    }

    useEffect(() => {
        setfilter(filter)
        fetchAppointments()
    }, [filter])

    return (
        <div className='flex items-center justify-center w-full bg-color-primary px-6  h-screen'>
            <div className='w-full p-4 sm:p-8 shadow-2xl rounded-3xl bg-white h-fit lg:w-2/3  xl:w-1/2' > {/* query */}
                <Navigation title={"Citas medicas"} />
                <hr className='h-0.5 bg-black mb-6 mx-4' />
                <MenuRequest setfilter={setfilter} />
                {appointments.length > 0 ? (
                    <div className='overflow-y-auto h-[35vh] md:h-[50vh] px-4'>
                        {
                            appointments.map(appointment => (
                                <PacientCard key={appointment.id} reason={appointment.reason} phase={appointment.status} date={appointment.realization} />
                            ))
                        }
                    </div>
                ) : (
                    <div className='overflow-y-auto flex justify-center items-center h-[35vh] md:h-[50vh] px-4'>
                        <p className='flex gap-2'>No hay citas disponibles. <IoAlertCircleOutline /></p>
                    </div>
                )}
                <hr className='h-0.5 bg-black my-8 mx-4' />
            </div>
        </div>
    );
};

export default FinishAppointment;