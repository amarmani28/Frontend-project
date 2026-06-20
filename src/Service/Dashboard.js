import axios from "axios";
export const fetchDashboardData = () => {
    return axios.get("https://billing-software-backend-t89w.onrender.com/api/v1.0/dashboard",{headers: {'Authorization': `Bearer ${localStorage.getItem("token")}`}});
}