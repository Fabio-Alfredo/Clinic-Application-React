import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import ScheduleCard from '../components/appointmentsSchedule/ScheduleCard';
import ContainerHistory from '../components/appointmentsSchedule/ContainerHistory'
import DateHistory from '../components/appointmentsSchedule/DateHistory';
import { appointmentSchedule } from '../service/service';
import { IoAlertCircleOutline } from "react-icons/io5";
import Swal from 'sweetalert2'


const ListScheduleAppointmets = () => {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    const [filter, setfilter] = useState(today.toISOString().split('T')[0])
    const [appointments, setAppointments] = useState([])
    const [selectAppointment, setSelectAppointment] = useState(null)

    const fetchAppointments = async () => {
        try {
            const formatDate = filter.split('-').join('/');
            const res = await appointmentSchedule(formatDate)
            setAppointments(res.data)

        } catch (error) {
            Swal.fire({
                title: "Error!",
                text: `${error.data.message}`,
                icon: "error",
            })
        }
    }

    const handleCardClick = (appointment) => {
        setSelectAppointment(appointment);

    }

    const handleModalClose = () => {
        setSelectAppointment(null)
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
                <DateHistory setFilter={setfilter} />
                {appointments.length > 0 ?

                    appointments.map((a) => (
                        <div key={a.appointments.appointment.id} onClick={() => handleCardClick(a)}>
                            <ScheduleCard reason={a.appointments.appointment.reason} date={a.appointments.appointment.realization} user={a.appointments.appointment.user.name} />
                        </div>
                    )) : (
                        <div className='overflow-y-auto flex justify-center items-center h-[30vh]  px-4'>
                            <p className='flex gap-2'>No hay citas disponibles para ahora. <IoAlertCircleOutline /></p>
                        </div>
                    )
                }

                <hr className='h-0.5 bg-black my-8 mx-4' />
            </div>
            {
                selectAppointment && (
                    <ContainerHistory
                        DateHistory={selectAppointment.appointments.historics}
                        doctors={selectAppointment.appointments.doctors}
                        onClose={handleModalClose}
                    />
                )
            }
        </div>
    );
};

export default ListScheduleAppointmets;