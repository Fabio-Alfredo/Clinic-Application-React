import React, { useState } from 'react';
import {useForm} from '../../hooks/useForm'


const FormApprovedAppointment = ({ userId, appointmentId, onClose, onSubmit }) => {

    const {realization, duration, doctor,specialists,InputChange } = useForm({
        realization: '',
        duration: '',
        doctor: '',
        specialists: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            realization : realization,
            schedulEndDate : realization,
            duration : duration,
            doctorEmail : doctor.split(',').map(doctor => doctor.trim()),
            specialists: specialists.split(',').map(specialist => specialist.trim()),
            isAccepted: true,
            userId: userId,
            appointmentId: appointmentId,
        }
        onSubmit(formData);
        onClose();
    
    };

    return (
        <div className='fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50'>
            <div className='bg-white p-4 rounded-lg shadow-lg'>
                <h2 className='text-xl mb-4'>Asignar Hora y Doctor</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-4'>
                        <label className='block text-gray-700'>Fecha:</label>
                        <input
                            type='date'
                            value={realization}
                            name='realization'
                            onChange={InputChange}
                            className='border rounded p-2 w-full'
                            required
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700'>Duracion:</label>
                        <input
                            type='number' 
                            name='duration'
                            value={duration}
                            onChange={InputChange}
                            placeholder='Doctor'
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
                            placeholder='Doctor'
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
                            placeholder='Doctor'
                            className='border rounded p-2 w-full'
                            required
                        />
                    </div>
                    <div className='flex justify-end'>
                        <button type='button' onClick={onClose} className='bg-red-500 text-white p-2 rounded mr-2'>
                            Cancelar
                        </button>
                        <button type='submit' className='bg-blue-500 text-white p-2 rounded'>
                            Asignar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FormApprovedAppointment;
