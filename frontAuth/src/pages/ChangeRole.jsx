import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { useForm } from '../hooks/useForm';
import { updateRole } from '../service/service';
import Swal from 'sweetalert2';

const ChangeRole = () => {

    const navigation = useNavigate()

    const { email, idRole, InputChange, resetForm } = useForm({
        idRole: '',
        email: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formValues = {
            idRole: idRole,
            email: email
        }
        try {
            const res = await updateRole(formValues);
            Swal.fire({
                title: "Exitoso!",
                text: `${res.message}`,
                icon: "success",
                showConfirmButton: false,
                timer: 1500
            }).then(() => {
                resetForm()
                navigation('/Home')
            })
        }
        catch (error) {
            Swal.fire({
                title: "Error!",
                text: `${error.response.data.message}`,
                icon: "error",
            })
        }
    }


    return (
        <div className='flex items-center justify-center w-full bg-blue-400 px-6  h-screen'>
            <div className='p-4 sm:p-8 shadow-2xl rounded-3xl bg-white h-fit w-[60rem]' >
                <Navigation title={"Citas medicas"} />
                <hr className='h-0.5 bg-black mb-6 mx-4' />
                <div className='flex w-full h-full'>
                    <div className='w-full h-full flex justify-center'>
                        <form className='flex flex-col gap-4 w-3/5 h-[25rem] items-center justify-start' onSubmit={handleSubmit}>
                            <div className='flex flex-col w-full'>
                                <span className='text-lg font-semibold'>Correo electronico: </span>
                                <input type='email' id='email' name='email' value={email} onChange={InputChange} className='border-2 rounded-md p-2' />
                            </div>
                            <div className='flex flex-col w-full'>
                                <span className='text-lg font-semibold'>Rol:</span>
                                <select id='rol' name='idRole' value={idRole} onChange={InputChange} className='border-2 border-black rounded-md p-2'>
                                    <option value=''>Seleccione un rol</option>
                                    <option value='ADMN'>ADMINISTRADOR</option>
                                    <option value='DCTR'>DOCTOR</option>
                                    <option value='ASST'>ASSITENTE</option>
                                </select>
                            </div>
                            <button type='submit' className='bg-black text-white rounded-md p-2 w-1/5 mt-4 justify-self-end'>Actualizar</button>
                        </form>
                    </div>
                </div>
                <hr className='h-0.5 bg-black my-8 mx-4' />
            </div>
        </div>
    );
};

export default ChangeRole;