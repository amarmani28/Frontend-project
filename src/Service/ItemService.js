import axios from "axios";

export const addItems = async (item) => {
    return await axios.post('https://billing-software-backend-t89w.onrender.com/api/v1.0/admin/items', item, {headers: { 'Authorization': `Bearer ${localStorage.getItem("token")}` }
    });
}

export const deleteItem = async (itemId) => {
    return await axios.delete(`https://billing-software-backend-t89w.onrender.com/api/v1.0/admin/items/${itemId}`, {headers: { 'Authorization': `Bearer ${localStorage.getItem("token") }`}
    });
}

export const fetchItems= async () => {
    return await axios.get('https://billing-software-backend-t89w.onrender.com/api/v1.0/items', {headers: { 'Authorization': `Bearer ${localStorage.getItem("token") }`}
    });
}