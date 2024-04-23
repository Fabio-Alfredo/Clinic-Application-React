import { NavLink, useNavigate } from "react-router-dom";
import InputField from "./InputFiled";
import { useState } from "react";
import { login } from "../service/service";
import { userForm } from "../hooks/useForm";

const SignIn = ({setIsAuthenticated}) => {

    const {identifier, password, onInputChange}=userForm({
        identifier:'',
        password:''
    })
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            
            const formData={
                identifier:identifier,
                password:password
            }
    
            const res = await login(formData);
            console.log(res);
            localStorage.setItem("isAuthenticated", "true");
            setIsAuthenticated(true)

            navigate("/home")
        } catch (e) {
            if (e.response.status === 400){
                console.log(e.response.data)
                alert(e.response.data);
            } 
        }
    }

    return (
        <>
            <div className="flex flex-col justify-center items-center w-screen h-screen bg-gradient-to-l from-stone-950 via-stone-900 to-stone-600 bg-300% animate-gradient">
                <div className="min-w-[25%] h-fit py-14 bg-slate-300 flex flex-col rounded-xl shadow-2xl shadow-slate-400 items-center justify-center gap-6">
                    <p className="font-Bebas text-4xl">
                        Sign In
                    </p>
                    <form className="flex flex-col gap-5 w-4/5 3xl:w-3/4 items-center" onSubmit={handleSubmit} >
                        <InputField nameField="Username or Email" inputName={"identifier"} type="text" placeH="e.g. NimbusX" inputValue={identifier} inputOnchage={onInputChange} />
                        <InputField nameField="Password" inputName={"password"} type="password" inputValue={password} inputOnchage={onInputChange} />
                        <input className="bg-black min-w-[50%] p-4 text-white font-Roboto self-end rounded-xl mt-6 hover:bg-slate-100/70 hover:text-black transition ease-in-out duration-200 hover:ring-2 hover:ring-black" type="submit" value="Sign In" />
                        <div className="flex gap-5 font-Roboto mt-2">
                            <p>Don't you have an account yet?</p>
                            <NavLink to="/SignUp" className="text-cyan-900 transition ease-in-out duration-200 hover:text-cyan-400">
                                Sign Up
                            </NavLink>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
};

export default SignIn;