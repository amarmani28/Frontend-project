import axios from "axios";

export const login = async (data) => {
    return await axios.post( "https://billing-software-backend-t89w.onrender.com/api/v1.0/login", data);
};