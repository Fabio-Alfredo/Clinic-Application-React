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
                    <Navigation title={"Prescripciones"} />
                    <hr className='h-0.5 bg-black mb-6 mx-4' />
                    <MenuUsers setUsuario={setUser}/>
                    <div>
                        {
                            prescriptions.map((prescription) => (
                                <div key={prescription.id} className='flex flex-col items-center justify-center'>
                                    <p className='text-lg font-popins font-bold'>{prescription.medicine}</p>
                                    <p className='text-lg font-popins'>{prescription.dosage}</p>
                                    <p className='text-lg font-popins'>{prescription.d_finalization}</p>
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
