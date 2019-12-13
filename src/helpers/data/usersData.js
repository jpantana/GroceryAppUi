import axios from 'axios';

const baseUrl = "https://localhost:44349";

const getAllUsers = () => new Promise((resolve, reject) => {
    axios.get(`${baseUrl}/user`).then(result => resolve(result.data))
    .catch(reject);
});

const getSingleUser = uid => new Promise((resolve, reject) => {
    axios.get(`${baseUrl}/user/${uid}`)
        .then(res => resolve(res.data))
        .catch(reject);
});

const addNewUser = newUser => axios.post(`${baseUrl}/user`, newUser);

const updateUser = (uid, updatedUser) => axios.put(`${baseUrl}/user/${uid}`, updatedUser);

const deleteUser = uid => axios.delete(`${baseUrl}/user/${uid}`);


export default {
    getAllUsers,
    getSingleUser,
    addNewUser,
    updateUser,
    deleteUser,
};
