import axios from "axios";
const BASE_URL = "http://localhost:8080/api/auth";

export const login = async (fromData) => {
    try{
        const res = await axios.post(`${BASE_URL}/login`, fromData, {
            headers:{
                'Content-Type': 'application/json',
            },
        });
        return res.data;
    }catch(error){
        console.error('Error al realizar la petición:', error.response.data);
        throw new Error("Error occurred while creating the movie. Please try again.");
    }
}