import { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import MenuUsers from '../components/listPrescriptionComponents/MenuUsers';
import { prescriptionByUser } from '../service/service';


const ListPrescription = () => {
    const [prescriptions, setPrescriptions] = useState([]);
    const [user, setUser] = useState({});

    const fetchPrescriptions = async (id) => {
        try {
            const response = await prescriptionByUser(id);
            setPrescriptions(response.data);
        } catch (error) {
            console.error('Error al obtener las prescripciones:', error);
        }
    }

    const formatDate = (dateString) => {
        if(dateString === null) return '';
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${day}/${month}/${year}`;
    };

    useEffect(() => {
        //console.log('useEffect');
        if (user) {
            fetchPrescriptions(user);
        }
    }, [user]);

    return (
        <div>
            <div className='flex items-center justify-center w-full bg-color-primary px-6  h-screen'>
                <div className='w-full p-4 sm:p-8 shadow-2xl rounded-3xl bg-white h-fit lg:w-2/3  xl:w-1/2'>
                    <Navigation title={"Prescripciones vigentes"} />
                    <hr className='h-0.5 bg-black mb-6 mx-4' />
                    <MenuUsers setUsuario={setUser} />
                    <div>
                        {
                            prescriptions.map((prescription) => (
                                <div key={prescription.id} className='flex font-Roboto justify-between'>
                                    <div  className='flex flex-col items-center justify-center'>
                                        <p className='text-lg font-popins font-bold'>{prescription.medicine}</p>
                                        <p className='text-lg font-popins justify-items-start-start'>{prescription.dosage}</p>
                                    </div>
                                    <p className='text-lg font-popins'>{formatDate(prescription.d_finalization)}</p>
                                </div>
                                    
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListPrescription;
