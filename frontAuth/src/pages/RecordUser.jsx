import { useState } from "react";
import Navigation from "../components/Navigation";
import Dates from "../components/RecordUserComponents/Dates";

const RecordUser = () => {
    const [startDate, setStartDate] = useState({});
    const [endDate, setEndDate] = useState({});

    return (
        <div>
            <div className='flex items-center justify-center w-full bg-color-primary px-6  h-screen'>
                <div className='w-full p-4 sm:p-8 shadow-2xl rounded-3xl bg-white h-fit lg:w-2/3  xl:w-1/2'>
                    <Navigation title={"Historial de Citas"} />
                    <hr className='h-0.5 bg-black mb-6 mx-4' />
                        <Dates dateS={setStartDate} dateF={setEndDate} />
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecordUser;