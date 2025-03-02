import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export const loginUser = async (email, password) => {
    try {
        const response = await axios.post(`${API}/users/login`, { email, password });
        return response.data; // Return API response
    } catch (error) {
        console.error("Login Error:", error.response?.data?.message || error.message);
        return null;
    }
};
