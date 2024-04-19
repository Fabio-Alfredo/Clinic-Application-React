const InputField = ({nameField = "", type = ""}) => {

    return (
        <>
            <label className="w-full">
                <span className="font-Nunito font-medium text-lg self-start">{nameField}:</span>
                <input className="p-3 min-w-full bg-slate-200/55 text-white font-Nunito ring-2 ring-white rounded-lg focus:bg-slate-950/70 focus:outline-slate-950 focus:shadow-2xl focus:shadow-slate-200 " type={type} />
            </label>
        </>
    );
};

export default InputField;