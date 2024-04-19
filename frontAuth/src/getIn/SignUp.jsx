import { NavLink } from "react-router-dom";
import InputField from "./InputFiled";
import { GiFastBackwardButton } from "react-icons/gi";

const SignUp = () => {
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
                    <form className="flex flex-col gap-5 w-4/6 items-center">
                        <InputField nameField="Username" type="text" />
                        <InputField nameField="Email" type="email" />
                        <InputField nameField="Password" type="password" />
                        <InputField nameField="Confirm password" type="password" />
                        <input className="bg-black min-w-[50%] p-4 text-white font-Roboto self-end rounded-xl mt-6 hover:bg-slate-100/70 hover:text-black transition ease-in-out duration-200 hover:ring-2 hover:ring-white" type="submit" value="Sign Up" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default SignUp;