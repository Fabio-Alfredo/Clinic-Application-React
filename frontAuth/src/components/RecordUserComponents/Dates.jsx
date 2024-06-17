import React, { useEffect, useState } from 'react';

const Dates = ({ dateS, dateF }) => {
    const [startDate, setStartDate] = useState(dateS || '');
    const [endDate, setEndDate] = useState(dateF || '');

    const handleDateChange = (setter) => (event) => {
        const date = event.target.value;
        const formattedDate = new Date(date).toISOString().split('T')[0];
        setter(formattedDate);
    };

    return (
        <div>
            <div className="flex justify-between">
                <div className="flex w-1/4 items-center">
                    <p className="mr-2">Desde:</p>
                    <input
                        type="date"
                        value={startDate}
                        onChange={handleDateChange(setStartDate)}
                        className="p-2 border-2 border-gray-300 rounded-lg mb-4"
                    />
                </div>

                <div className="flex w-1/4 items-center">
                    <p className="mr-2">Hasta:</p>
                    <input
                        type="date"
                        value={endDate}
                        onChange={handleDateChange(setEndDate)}
                        className="p-2 border-2 border-gray-300 rounded-lg mb-4"
                    />
                </div>
            </div>

            <div className="flex justify-center mt-4">
                <button className="p-5 text-white bg-blue-500 hover:bg-blue-700 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
                    Filtrar
                </button>
            </div>
        </div>
    );
};

export default Dates;
