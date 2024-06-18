import React, { useState } from 'react';
import { useForm } from '../../hooks/useForm'


const FormApprovedAppointment = ({ userId, appointmentId, onClose, onSubmit, onDenied }) => {

    const { realization, duration, doctor, specialists, InputChange } = useForm({
        realization: '',
        duration: '',
        doctor: '',
        specialists: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        const schedulEndDate = reformatDate(duration, realization);
        const formData = {
            realization: realization,
            schedulEndDate: schedulEndDate,
            doctorEmail: doctor.split(',').map(doctor => doctor.trim()),
            specialists: specialists.split(',').map(specialist => specialist.trim()),
            isAccepted: true,
            userId: userId,
            appointmentId: appointmentId,
        }
        onSubmit(formData);
        onClose();
    };

    const reformatDate = (dateStr, realization) => {
        const [hors, mins] = dateStr.split(':');
        const end = new Date(realization);
        end.setHours(hors)
        end.setMinutes(mins)

        const year = end.getFullYear();
        const month = (end.getMonth() + 1).toString().padStart(2, '0'); 
        const day = end.getDate().toString().padStart(2, '0'); 
        const formattedHours = end.getHours().toString().padStart(2, '0'); 
        const formattedMinutes = end.getMinutes().toString().padStart(2, '0'); 

        const formattedDate = `${year}-${month}-${day}T${formattedHours}:${formattedMinutes}`;
        console.log("Fecha formateada: " + formattedDate);
        return formattedDate;
    }

    const handleDenied = () => {
        onDenied(appointmentId);
        onClose();
    }



    return (
        <div className='fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50'>
            <div className='bg-white p-4 rounded-lg shadow-lg'>
                <h2 className='text-xl mb-4'>Asignar Hora y Doctor</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-4'>
                        <label className='block text-gray-700'>Fecha:</label>
                        <input
                            type='datetime-local'
                            value={realization}
                            name='realization'
                            min={new Date().toISOString().split('T')[0]}
                            onChange={InputChange}
                            className='border rounded p-2 w-full'
                            required
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700'>Finalizacion:</label>
                        <input
                            type='time'
                            name='duration'
                            value={duration}
                            onChange={InputChange}
                            placeholder=''
                            className='border rounded p-2 w-full'
                            required
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700'>Email doctores:</label>
                        <input
                            type='email'
                            name='doctor'
                            value={doctor}
                            onChange={InputChange}
                            placeholder='doctro@gmail.com'
                            className='border rounded p-2 w-full'
                            required
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700'>Especialidades:</label>
                        <input
                            type='text'
                            name='specialists'
                            value={specialists}
                            onChange={InputChange}
                            placeholder='Dermatologo'
                            className='border rounded p-2 w-full'
                            required
                        />
                    </div>
                    <div className='flex justify-end gap-2'>
                        <button type='submit' className='bg-green-500 text-white p-2 rounded'>
                            Asignar
                        </button>
                        <button type='button' onClick={handleDenied} className='bg-blue-500 text-white p-2 rounded'>
                            Denegar
                        </button>
                        <button type='button' onClick={onClose} className='bg-red-500 text-white p-2 rounded mr-2'>
                            Cancelar
                        </button>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default FormApprovedAppointment;
