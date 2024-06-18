import { useState } from "react";
import Navigation from "../components/Navigation";
import Dates from "../components/RecordUserComponents/Dates";
import { recordUser } from "../service/service";

const RecordUser = () => {
    const [startDate, setStartDate] = useState({});
    const [endDate, setEndDate] = useState({});
    const [history, setHistory] = useState([]);

    const formatDate = (dateString) => {
        if(dateString === null) return '';
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${day}/${month}/${year}`;
    };

    const formatDateReverse = (dateString) => {
        if(dateString === null) return '';
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}/${month}/${day}`;
    
    };

    const fetchHistory = async () => {
        try {
            const formattedStartDate = formatDateReverse(startDate);
            const formattedEndDate = formatDateReverse(endDate);
            const response = await recordUser(formattedStartDate, formattedEndDate);
            console.log(response.data);
            setHistory(response.data);
        }catch (error) {
            console.error('Error al obtener el historial:', error);
        }
    };

    

    return (
        <div>
            <div className='flex items-center justify-center w-full bg-color-primary px-6  h-screen'>
                <div className='w-full p-4 sm:p-8 shadow-2xl rounded-3xl bg-white h-fit lg:w-2/3  xl:w-1/2'>
                    <Navigation title={"Historial de Citas"} />
                    <hr className='h-0.5 bg-black mb-6 mx-4' />
                    <Dates setDateS={setStartDate} setDateF={setEndDate} />
                    <div className="flex justify-center mt-4">
                        <button className="p-5 text-white font-Roboto bg-blue-500 hover:bg-blue-700 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
                            onClick={fetchHistory}
                        >
                            Filtrar
                        </button>
                    </div>
                    <div className=' m-10'>
                        <ul>
                            {
                                history.map((appointment) => (
                                    <li key={appointment.id} className="flex font-Roboto justify-between">
                                        <p className='mb-5'>{formatDate(appointment.creteAt)}</p>
                                        <p>{appointment.reason}</p>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecordUser;