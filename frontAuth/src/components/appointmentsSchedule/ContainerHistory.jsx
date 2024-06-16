import React from 'react';

const ContainerHistory = ({ DateHistory, date = "12/12/12", reason = "sfnjkafkjnds" }) => {


    const formatDate = (dateString) => {
        if (dateString === null) return 'No definida';
        const dateObj = new Date(dateString);
        const year = dateObj.getFullYear();
        const month = String(dateObj.getMonth() + 1).padStart(2, '0');
        const day = String(dateObj.getDate()).padStart(2, '0');
        return `${year}/${month}/${day}`;
    };

    return (
        <div className="p-6 border border-gray-300 rounded-lg bg-gray-50">
            <h2 className="text-2xl font-semibold mb-4">Historial Médico del Paciente</h2>
            <table className="min-w-full border-collapse">
                <thead>
                    <tr>
                        <th className="border-b-2 border-gray-200 px-4 py-2 text-left ">Fecha</th>
                        <th className="border-b-2 border-gray-200 px-4 py-2 text-center">Diagnóstico</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        //TODO
                    }
                    <tr className="hover:bg-gray-100">
                        <td className="border-t border-gray-200 px-4 py-2 ">{formatDate(date)}</td>
                        <td className="border-t border-gray-200 px-4 py-2 max-w-32 text-wrap overflow-hidden break-words text-center">{reason}</td>
                    </tr>
                </tbody>
            </table>
            <h2 className="text-2xl font-semibold mb-4">Medicos</h2>
            <table className="min-w-full border-collapse flex flex-col items-center">
                <thead>
                    <tr>
                        <th className="border-b-2 border-gray-200 px-4 py-2 text-left ">Doctores</th>
                        <th className="border-b-2 border-gray-200 px-4 py-2  text-center">Especialidad</th>
                    </tr>
                </thead>
                <tbody>

                    <tr className="hover:bg-gray-100">
                        <td className="border-t border-gray-200 px-4 py-2 ">Pedor</td>
                        <td className="border-t border-gray-200 px-4 py-2 max-w-32 text-wrap overflow-hidden break-words text-center">Ortodoncista</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ContainerHistory;