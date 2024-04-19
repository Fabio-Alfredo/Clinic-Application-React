import { NavLink } from "react-router-dom";
import InputField from "./InputFiled";

const SignIn = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center w-screen h-screen bg-gradient-to-l from-stone-950 via-stone-900 to-stone-600 bg-300% animate-gradient">
                <NavLink to="/SignUp">
                    <button className="bg-black min-w-32 p-4 text-white font-Roboto absolute top-4 right-4 rounded-xl hover:bg-slate-100/70 hover:text-black transition ease-in-out duration-200 hover:ring-2 hover:ring-white">Sign Up</button>
                </NavLink>
                <div className="min-w-[25%] h-fit py-16 xl:py-20 bg-slate-300 flex flex-col rounded-xl shadow-2xl shadow-slate-400 items-center justify-center gap-6">
                    <p className="font-Bebas text-4xl">
                        Sign In
                    </p>
                    <form className="flex flex-col gap-5 w-4/5 3xl:w-3/4 items-center">
                        <InputField nameField="Username" type="text" />
                        <InputField nameField="Password" type="password" />
                        <input className="bg-black min-w-[50%] p-4 text-white font-Roboto self-end rounded-xl mt-6 hover:bg-slate-100/70 hover:text-black transition ease-in-out duration-200 hover:ring-2 hover:ring-black" type="submit" value="Sign In" />
                    </form>
                </div>
            </div>
        </>
    )
};

export default SignIn;