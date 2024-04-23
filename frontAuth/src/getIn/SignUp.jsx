import { NavLink, useNavigate } from "react-router-dom";
import InputField from "./InputFiled";
import { GiFastBackwardButton } from "react-icons/gi";
import { useState } from "react";
import { register } from "../service/service";
import { userForm } from "../hooks/useForm";

const SignUp = () => {

    const { userName, email, password, passwordConf, onInputChange } = userForm({
        userName: '',
        email: '',
        password: '',
        passwordConf: ''
    })

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== passwordConf) {
            alert("confirmation password")
            return
        }

        try {
            const formData = {
                userName: userName,
                email: email,
                password: password
            }
            const res = await register(formData)
            console.log(res);
            navigate('/')
        } catch (e) {
            alert(e.response.data);
        }

    }

    return (
        <>
            <div className="flex justify-center items-center w-screen h-screen bg-gradient-to-r from-stone-950 via-stone-900 to-stone-600 bg-300% animate-gradient">
                <div className="flex flex-col min-w-[25%] h-fit py-14 bg-slate-300 rounded-xl shadow-2xl shadow-slate-400 items-center justify-center gap-6">
                    <NavLink to="/" className="place-self-start ml-14">
                        <GiFastBackwardButton className="text-4xl hover:text-slate-900/70 transition ease-in-out duration-200" />
                    </NavLink>
                    <p className="font-Bebas text-4xl">
                        Sign Up
                    </p>
                    <form className="flex flex-col gap-5 w-4/6 items-center" onSubmit={handleSubmit}>
                        <InputField nameField="Username" inputName={"userName"} type="text" placeH="e.g. NimbusX" inputValue={userName} inputOnchage={onInputChange} />
                        <InputField nameField="Email" inputName={"email"} type="email" placeH="e.g. example@gmail.com" inputValue={email} inputOnchage={onInputChange} />
                        <InputField nameField="Password" inputName={"password"} type="password" inputValue={password} inputOnchage={onInputChange} min={8} max={20}  >
                            <span className="font-Nunito font-medium text-xs self-start text-white">Debe contener al menos 8 caracteres, debe incluir al menos un símbolo entre ! _ # $. </span>
                        </InputField>
                        <InputField nameField="Confirm password" inputName={"passwordConf"} type="password" inputValue={passwordConf} inputOnchage={onInputChange} min={8} max={20} >
                            <span className="font-Nunito font-medium text-xs self-start text-white">Debe contener al menos 8 caracteres, debe incluir al menos un símbolo entre ! _ # $. </span>

                        </InputField>
                        <input className="bg-black min-w-[50%] p-4 text-white font-Roboto self-end rounded-xl mt-6 hover:bg-slate-100/70 hover:text-black transition ease-in-out duration-200 hover:ring-2 hover:ring-white" type="submit" value="Sign Up" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default SignUp;