import { useEffect, useState } from "react";
import { getAllUsers } from "../../service/service";


const MenuUsers = ({setUsuario}) => {
    const [state, setState] = useState(false);
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState('usuario');

    const handleEvent = () => {
        setState(!state);
    }

    const fetchUsers = async () => {
        try {
            const response = await getAllUsers();
            setUsers(response.data);
        } catch (error) {
            console.error('Error al obtener los usuarios:', error);
        }
    }

    const selectUser = (user) => {
        setSelectedUser(user.name);
        setUsuario(user.id);
        setState(false);
    }

    useEffect(() => {
        // console.log('useEffect');
        fetchUsers();
    }, []);

    return(
        <>
            <div onClick={handleEvent} className='relative pr-4 sm:pr-8 pb-2 cursor-pointer group/item'>
                        <p className='font-popins text-sm flex sm:text-lg lg:text-xl items-center select-none py-2 px-4 rounded-full hover:bg-slate-100 duration-500 '>
                            {selectedUser}
                        </p>
                        <ul className={`absolute right-7 sm:right-11  top-7 mt-2 p-1 rounded-lg bg-slate-100 shadow-md ${state ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} z-50`}>
                            {users.map((user) => (
                                <li
                                    key={user.id}
                                    className='font-popins text-sm flex sm:text-lg lg:text-xl items-center select-none py-2 px-4 rounded-full hover:bg-slate-100 duration-500 '
                                    onClick={() => selectUser(user)}>
                                    {user.name}
                                </li>
                            ))}
                        </ul>
                    </div>
        </>
    )

}

export default MenuUsers;