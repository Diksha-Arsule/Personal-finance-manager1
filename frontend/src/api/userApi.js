import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export const getUsers = async () => {
    try {
        const response = await axios.get(`${API}/users`);
        return response.data;
    } catch (error) {
        console.error("Error fetching users:", error);
        return null;
    }
};
