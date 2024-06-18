import axios from 'axios'

const TOKEN = "token";
const BASE_URL = 'http://localhost:8080/api/auth'


// export const saveToken = (tokenLs = "") => localStorage.setItem(TOKEN, JSON.stringify(tokenLs));
export const getToken = () => JSON.parse(localStorage.getItem(TOKEN)).token;

export const register = async (formData) => {
    try {
        const res = await axios.post(`${BASE_URL}/register`, formData, {
            headers: {
                'Content-Type': 'application/json',
            },
        })

        return res.data;
    } catch(error){
        console.error('Error al realizar la petición:', error);
        throw error.response;
    }
}

export const login = async (formData) => {
    try {
        const res = await axios.post(`${BASE_URL}/login`, formData, {
            headers: {
                'Content-Type': 'application/json',
            }
        })

        return res.data;
    } catch(error){
        console.error('Error al realizar la petición:', error);
        throw error.response;
    }
}

export const getAppointments = async (phase) => {
    try {
        const res = await axios.get(`http://localhost:8080/api/appointment/own?phase=${phase}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken()}`
            }
        })
        return res.data;

    } catch(error){
        console.error('Error al realizar la petición:', error);
        throw error.response;
    }
}

export const createAppointment = async (formData) => {
    try {
        const res = await axios.post('http://localhost:8080/api/appointment/request', formData, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken()}`
            }
        })
        return res.data;
    } catch(error){
        console.error('Error al realizar la petición:', error);
        throw error.response;
    }
}

export const appointmentsPending = async () => {
    try {
        const res = await axios.get('http://localhost:8080/api/appointment/pending', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken()}`
            }
        })
        return res.data;
    } catch(error){
        console.error('Error al realizar la petición:', error);
        throw error.response;
    }
}

export const approvedAppointment = async (formData) => {
    try {
        const res = await axios.post('http://localhost:8080/api/appointment/approve', formData, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken()}`
            }
        })
        return res.data;
    } catch(error){
        console.error('Error al realizar la petición:', error);
        throw error.response;
    }
}

export const deniedAppointment = async (id) => {
    try {
        const res = await axios.get(`http://localhost:8080/api/appointment/clinic/denied?id=${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken()}`
            }
        })
        return res.data;
    } catch(error){
        console.error('Error al realizar la petición:', error);
        throw error.response;
    }
}

export const appointmentSchedule = async (date) => {
    try {
        const res = await axios.get(`http://localhost:8080/api/appointment/clinic/schedule?date=${date}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken()}`
            }
        })
        return res.data;
    } catch(error){
        console.error('Error al realizar la petición:', error);
        throw error.response;
    }
}

export const getRolesUser = async () => {
    try {
        const res = await axios.get('http://localhost:8080/api/role/all', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken()}`,
            }
        })
        return res.data;
    }catch(error){
        console.error('Error al realizar la petición:', error);
        throw error.response;
    }
}

export const createHistoric = async (formData) => {
    try{
        const res = await axios.post('http://localhost:8080/api/user/record',formData,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken()}`
            }
        })
        return res.data;
    }catch(error){
        console.error('Error al realizar la petición:', error);
        throw error.response;
    }
}

export const getUser = async ()=>{
    try{
        const res = await axios.get('http://localhost:8080/api/user/data',{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken()}`
            }
        })
        return res.data;
    }catch(error){
        console.error('Error al realizar la petición:', error);
        throw error.response;
    }
}