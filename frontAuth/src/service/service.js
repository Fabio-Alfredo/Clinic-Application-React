import axios from 'axios'

const TOKEN = "token";
const BASE_URL = 'http://localhost:8080/api/auth'


export const saveToken = (tokenLs = "") => localStorage.setItem(TOKEN, JSON.stringify(tokenLs));
export const getToken = () => JSON.parse(localStorage.getItem(TOKEN)).token;

export const register = async (formData) => {
    try {
        const res = await axios.post(`${BASE_URL}/register`, formData, {
            headers: {
                'Content-Type': 'application/json',
            },
        })

        return res.data;
    } catch (error) {

        console.error('Error al realizar la petición:', error);
        throw error
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
    } catch (error) {
        console.error('Error al realizar la petición:', error);
        throw error;
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

    } catch (error) {
        console.error('Error al realizar la petición:', error);
        throw error;
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
    } catch (error) {
        console.error('Error al realizar la petición:', error.response.data);
        throw error;
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
    } catch (error) {
        console.error('Error al realizar la petición:', error);
        throw error;
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
    } catch (error) {
        console.error('Error al realizar la petición:', error);
        throw error;
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
    }catch (error) {
        console.error('Error al realizar la petición:', error);
        throw error;
    }
}

export const prescriptionByUser = async (id) => {
    try {
        const res = await axios.get(`http://localhost:8080/api/prescription/clinic/prescriptions?id=${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken()}`
            }
        })
        return res.data;
    }catch (error) {
        console.error('Error al realizar la petición:', error);
        throw error;
    }
}

export const getAllUsers = async () => {
    try {
        const res = await axios.get(`http://localhost:8080/api/user/all`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken()}`
            }
        })
        return res.data;
    }catch (error) {
        console.error('Error al realizar la petición:', error.message);
        throw error;
    }
}