import InputField from "./InputFiled";

const LogIn = () => {
    return (
        <>
            <div className="flex justify-center items-center w-screen h-screen bg-gradient-to-l from-stone-950 via-stone-900 to-stone-600 bg-300% animate-gradient">
                <div className="min-w-[25%] h-fit py-20 bg-slate-300 flex flex-col rounded-xl shadow-2xl shadow-slate-400 items-center justify-center gap-6">
                    <p className="font-Bebas text-4xl">
                        Iniciar Sesion
                    </p>
                    <form className="flex flex-col gap-5 w-4/6 items-center">
                        <InputField nameField="Username" type="text"/>
                        <InputField nameField="Password" type="password"/>
                        <input className="bg-black w-3/6 p-4 text-white font-Roboto self-end rounded-xl mt-6" type="submit" value="Iniciar Sesión" />
                    </form>
                </div>
            </div>
        </>
    )
};

export default LogIn;