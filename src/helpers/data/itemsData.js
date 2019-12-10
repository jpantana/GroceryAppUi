import axios from 'axios';

const baseUrl = "https://localhost:44349";

const getAllItems = () => new Promise((resolve, reject) => {
    axios.get(`${baseUrl}/item`)
        .then(res => {
            resolve(res.data);
        })
        .catch(reject);
});

const getUsersItems = userId => new Promise((resolve, reject) => {
    axios.get(`${baseUrl}/item/${userId}`)
        .then(res => {
            resolve(res.data);
        })
        .catch(reject);
});

const addItem = newItem => axios.post(`${baseUrl}/item`, newItem);


export default { getUsersItems, getAllItems, addItem }
