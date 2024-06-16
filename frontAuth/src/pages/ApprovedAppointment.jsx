import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import AppointmentBeApproved from '../components/appointmentsApproveComponents/AppointmentBeApproved';
import { appointmentsPending, approvedAppointment, deniedAppointment } from '../service/service';
import Swal from 'sweetalert2'
import { IoAlertCircleOutline } from "react-icons/io5";
import FormApprovedAppointment from '../components/appointmentsApproveComponents/FormApprovedAppointment'



const ApprovedAppointment = () => {

    const [appointments, setAppointments] = useState([]);
    const [selectAppointment, setSelectAppointment] = useState(null);

    const getAppointments = async () => {
        try {
            const res = await appointmentsPending();
            setAppointments(res.data);
        } catch (error) {
            Swal.fire({
                title: "Error!",
                text: `${error.response.data.message}`,
                icon: "error",
            })
        }
    }

    useEffect(() => {
        getAppointments();
    }, [])

    const handleCardClick = (appointment) => {
        setSelectAppointment(appointment);
    };

    const handleModalClose = () => {
        setSelectAppointment(null);
    };

    const handleModalAction = async (data) => {
        const res = await approvedAppointment(data);
        Swal.fire({
            title: "Exitoso!",
            text: `${res.message}`,
            icon: "success",
        })
        getAppointments();
    };

    const handleModalDenied = async (id) => {
        const res = await deniedAppointment(id);
        Swal.fire({
            title: "Exitoso!",
            text: `${res.message}`,
            icon: "success",
        })
        getAppointments();
    }

    return (
        <div className='flex items-center justify-center w-full bg-color-primary px-6  h-screen'>
            <div className='w-full p-4 sm:p-8 shadow-2xl rounded-3xl bg-white h-fit lg:w-2/3  xl:w-1/2' > {/* query */}
                <Navigation title={"Citas medicas"} />
                <hr className='h-0.5 bg-black mb-6 mx-4' />
                {appointments.length > 0 ? (
                    <div className='overflow-y-auto h-[35vh] md:h-[50vh] px-4'>
                        {appointments.map(appointment => (
                            <div key={appointment.id} onClick={() => handleCardClick(appointment)}>
                                <AppointmentBeApproved reason={appointment.reason} phase={appointment.user.name} date={appointment.request} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className='overflow-y-auto flex justify-center items-center h-[35vh] md:h-[50vh] px-4'>
                        <p className='flex gap-2'>No hay citas disponibles. <IoAlertCircleOutline /></p>
                    </div>
                )}

                <hr className='h-0.5 bg-black my-8 mx-4' />
            </div >
            {
                selectAppointment && (
                    <FormApprovedAppointment
                        userId={selectAppointment.user.id}
                        appointmentId={selectAppointment.id}
                        onClose={handleModalClose}
                        onSubmit={handleModalAction}
                        onDenied={handleModalDenied}
                    />
                )
            }
        </div >
    );

};

export default ApprovedAppointment;