import React from 'react';
import { IoIosClose } from "react-icons/io";

const ContainerHistory = ({ DateHistory = [], doctors = [], onClose }) => {


    const formatDate = (dateString) => {
        if (dateString === null) return 'No definida';
        const dateObj = new Date(dateString);
        const year = dateObj.getFullYear();
        const month = String(dateObj.getMonth() + 1).padStart(2, '0');
        const day = String(dateObj.getDate()).padStart(2, '0');
        return `${year}/${month}/${day}`;
    };

    return (
        <div className="p-6 border border-gray-300 rounded-lg relative bg-gray-50">
            <IoIosClose onClick={onClose} className='font-bold text-2xl absolute left-[90%] top-3 cursor-pointer' />
            <h2 className="text-2xl font-semibold m-4">Historial Médico del Paciente</h2>
            <table className="min-w-full border-collapse">
                <thead>
                    <tr>
                        <th className="border-b-2 border-black border-solid border-2 px-4 py-2 text-left ">Fecha</th>
                        <th className="border-b-2 border-black border-solid border-2 px-4 py-2 text-center">Diagnóstico</th>
                    </tr>
                </thead>
                <tbody className='border-black border-solid border-2'>
                    {
                        DateHistory.map((historic) => (
                            <tr key={historic.id} className="hover:bg-gray-100">
                                <td className="border-t border-gray-200 px-4 py-2 ">{formatDate(historic.creteAt)}</td>
                                <td className="border-t border-gray-200 px-4 py-2 max-w-32 text-wrap overflow-hidden break-words text-center">{historic.reason}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <h2 className="text-2xl font-semibold m-4">Medicos de la cita</h2>
            <table className="min-w-full border-collapse ">
                <thead className=''>
                    <tr className=''>
                        <th className="border-b-2 border-black border-solid border-2 px-4 py-2 text-center  ">Doctores</th>
                        <th className="border-b-2 border-black border-solid border-2 px-4 py-2  text-center">Especialidad</th>
                    </tr>
                </thead>
                <tbody className='border-black border-solid border-2'>
                    {
                        doctors.map((doctor, index) => (
                            <tr key={index} className="hover:bg-gray-100">
                                <td className="border-t  px-4 py-2 ">{doctor.doctor.name}</td>
                                <td className="border-t  px-4 py-2 max-w-32 text-wrap overflow-hidden break-words text-center">{doctor.speciality.name}</td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>
    );
};

export default ContainerHistory;