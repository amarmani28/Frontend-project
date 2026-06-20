import axios from "axios";

export const createRazorpayOrder = async () => {
    return await axios.post("https://billing-software-backend-t89w.onrender.com/api/v1.0/payments/create-order",data, {headers: { 'Authorization': `Bearer ${localStorage.getItem("token") }`}})
}
export const verifyPayment = async () =>{
    return await axios.post("https://billing-software-backend-t89w.onrender.com/api/v1.0/payments/verify",paymentData,{headers: { 'Authorization': `Bearer ${localStorage.getItem("token") }`}})
}