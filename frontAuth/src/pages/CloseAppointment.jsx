import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { IoAlertCircleOutline } from "react-icons/io5";
import { useState, useEffect } from 'react';
import { getApprovedAppointments, closeAppointment } from '../service/service';
import Finished from '../components/appointmentsFinished/Finished';
import Swal from 'sweetalert2'

const CloseAppointment = () => {

    const navigation = useNavigate()
    const [appointments, setAppointments] = useState([])
    const [Appoint, setAppoint] = useState({ id: '', name: '', reason: '' })

    const fetchAppointments = async () => {
        try {
            const res = await getApprovedAppointments()
            setAppointments(res.data)

        } catch (error) {
            Swal.fire({
                title: "Error!",
                text: `${error.response.data.message}`,
                icon: "error",
            })
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await closeAppointment(Appoint.id);
            Swal.fire({
                title: "Exitoso!",
                text: `${res.message}`,
                icon: "success",
                showConfirmButton: false,
                timer: 1500
            }).then(() => {
                navigation('/Home')
            })
        }
        catch (error) {
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
        <div className='flex items-center justify-center w-full bg-blue-400 px-6  h-screen'>
            <div className='p-4 sm:p-8 shadow-2xl rounded-3xl bg-white h-fit w-[60rem]' >
                <Navigation title={"Citas medicas"} />
                <hr className='h-0.5 bg-black mb-6 mx-4' />
                <div className='flex w-full h-full'>
                    <div className='w-full h-full'>
                        {appointments.length > 0 ? (
                            <div className='overflow-y-auto overflow-x-hidden w-24rem h-[35vh] md:h-[40vh] px-4 items-center border-solid border-black border-4'>
                                {
                                    appointments.map(appointment => (
                                        <div key={appointment.id} onClick={() =>
                                            setAppoint({ ...Appoint, id: appointment.id, name: appointment.user, reason: appointment.reason })
                                        }>
                                            <Finished key={appointment.id} name={appointment.user} reason={appointment.reason} />
                                        </div>
                                    ))
                                }
                            </div>
                        ) : (
                            <div className='overflow-y-auto flex border-solid border-2 justify-center items-center h-[35vh] md:h-[50vh] px-4'>
                                <p className='flex gap-2'>No hay citas disponibles. <IoAlertCircleOutline /></p>
                            </div>
                        )}
                    </div>
                    <div className='flex w-[90rem] h-[35vh] md:h-[50vh]'>
                        <form className='flex w-full h-full flex-wrap gap-2 justify-center' onSubmit={handleSubmit}>
                            <span className="w-1/5 text-lg font-bold">Paciente:</span>
                            <p className='w-3/5'>{Appoint.name}</p>
                            <span className="w-1/5 text-lg font-bold">Razón:</span>
                            <p className='w-3/5'>{Appoint.reason}</p>
                            <input type="submit" value="Finalizar" className="w-1/2 p-2 place-self-end bg-black text-white rounded-xl mt-2 hover:bg-slate-100 hover:text-black transition ease-in-out duration-200 hover:ring-2 hover:ring-black" />
                        </form>
                    </div>
                </div>
                <hr className='h-0.5 bg-black my-8 mx-4' />
            </div>
        </div>
    );
};

export default CloseAppointment;