import React, { useEffect, useState } from 'react';

const Dates = ({ setDateS, setDateF }) => {
    const [startDate, setStartDate] = useState( '');
    const [endDate, setEndDate] = useState('');

    const handleDateChange = (setter, setDateProp) => (event) => {
        const date = event.target.value;
        setter(date); // Mantén el formato `yyyy-MM-dd` para el `input`
        setDateProp(date); // Actualiza el estado en el componente padre
    };

    return (
        <div>
            <div className="flex justify-between font-Roboto">
                <div className="flex w-1/3 items-center">
                    <p className="mr-2">Desde:</p>
                    <input
                        type="date"
                        value={startDate}
                        onChange={handleDateChange(setStartDate, setDateS)}
                        className="p-2 border-2 border-gray-300 rounded-lg mb-4"
                    />
                </div>

                <div className="flex w-1/3 items-center">
                    <p className="mr-2">Hasta:</p>
                    <input
                        type="date"
                        value={endDate}
                        onChange={handleDateChange(setEndDate, setDateF)}
                        className="p-2 border-2 border-gray-300 rounded-lg mb-4"
                    />
                </div>
            </div>
        </div>
    );
};

export default Dates;
