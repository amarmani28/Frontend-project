import axios from "axios";

export const latestOrder = async () => {
   return await axios.get("https://billing-software-backend-t89w.onrender.com/api/v1.0/orders/latest",{headers: { 'Authorization': `Bearer ${localStorage.getItem("token") }`}})
}
export const createOrder = async (order) => {
    return await axios.post("https://billing-software-backend-t89w.onrender.com/api/v1.0/orders", order,{headers: { 'Authorization': `Bearer ${localStorage.getItem("token") }`}})
}
export const deleteOrder = async (orderId) => {
    return await axios.delete(`https://billing-software-backend-t89w.onrender.com/api/v1.0/orders/${id}` ,{headers: { 'Authorization': `Bearer ${localStorage.getItem("token") }`}})
}