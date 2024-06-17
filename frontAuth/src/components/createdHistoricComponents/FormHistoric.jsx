import React from 'react';
import Navigation from '../Navigation'
import TexTarea from '../creationAppoinmetComponentts/TextTarea'
import Input from './Input'
import { useForm } from '../../hooks/useForm';
import { createHistoric } from '../../service/service';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'


const FormHistoric = () => {

    const nav = useNavigate();

    const { email, reason, InputChange } = useForm({
        email: '',
        reason: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const formValues = {
                email: email,
                reason: reason
            }
            const res = await createHistoric(formValues);

            Swal.fire({
                title: 'Historial creado',
                text: `${res.message}`,
                icon: 'success',
                confirmButtonText: 'Aceptar'
            }).then(() => {
                nav('/Home')
            })
        } catch (error) {
            console.log(error.data.message)
            Swal.fire({
                title: 'Error',
                text: `${error.data.message}`,
                icon: 'error',
                confirmButtonText: 'Aceptar'
            })

        }
    }

    return (

        <div className='flex h-screen items-center justify-center w-full   bg-color-primary px-6 sm:px-10 '>

            <form onSubmit={handleSubmit} className='w-full p-10 shadow-2xl rounded-3xl bg-white h-fit lg:p-6 xl:px-20 xl:py-10 lg:w-2/3 2xl:w-1/2' > {/* query */}
                <Navigation title={"Agendar cita"} />
                <Input name={"email"} label={"Correo:"} type={"email"} inputValue={email} inputOnchange={InputChange} />
                <TexTarea name={"reason"} rows={5} cols={20} label={"Motivo:"} inputValue={reason} inputOnchange={InputChange} />
                <div className='w-full flex items-center justify-end pr-12'>
                    <button type='submit' className='w-36  bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl'>Enviar</button>
                </div>
                <hr className='h-0.5 bg-black my-8 mx-4' />

            </form>
        </div>

    );
};

export default FormHistoric;