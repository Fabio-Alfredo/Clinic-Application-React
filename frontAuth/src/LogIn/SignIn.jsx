import InputField from "./InputFiled";

const SignIn = () => {
    return(
        <>
            <div className="flex justify-center items-center w-screen h-screen bg-gradient-to-l from-stone-950 via-stone-900 to-stone-600 bg-300% animate-gradient">
                <div className="min-w-[25%] h-fit py-20 bg-slate-300 flex flex-col rounded-xl shadow-2xl shadow-slate-400 items-center justify-center gap-6">
                    <p className="font-Bebas text-4xl">
                        Registrate
                    </p>
                    <form className="flex flex-col gap-5 w-4/6 items-center">
                        <InputField nameField="Username" type="text"/>
                        <InputField nameField="Email" type="email"/>
                        <InputField nameField="Password" type="password"/>
                        <InputField nameField="Confirm password" type="password"/>
                        <input className="bg-black min-w-[50%] p-4 text-white font-Roboto self-end rounded-xl mt-6" type="submit" value="Registrarse" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default SignIn;