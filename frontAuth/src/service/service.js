import axios from 'axios'

const BASE_URL = 'http://localhost:8080/api/auth'

export const register = async (formData) => {
    try {
        const res = await axios.post(`${BASE_URL}/register`, formData, {
            headers: {
                'Content-Type': 'application/json',
            },
        })

        return res;
    } catch (error) {
        console.error('Error al realizar la petición:', error);
        throw new Error("Error occurred while creating the movie. Please try again.");
    }
}