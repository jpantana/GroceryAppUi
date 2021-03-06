import axios from 'axios';
import keys from '../keys/apiKeys.json';

const { baseUrl } = keys.connectionString;

const getAllUsers = () => new Promise((resolve, reject) => {
    axios.get(`${baseUrl}/user`).then(result => resolve(result.data))
    .catch(reject);
});

const getSingleUser = uid => new Promise((resolve, reject) => {
    axios.get(`${baseUrl}/user/${uid}`)
        .then(res => resolve(res.data))
        .catch(reject);
});

const getSingleUserById = id => new Promise((resolve, reject) => {
    axios.get(`${baseUrl}/user/invite/${id}`)
        .then(res => resolve(res.data))
        .catch(reject);
});

const getSingleUserByEmailLookup = email => new Promise((resolve, reject) => {
    axios.get(`${baseUrl}/user/lookup/${email}`)
        .then(res => resolve(res.data))
        .catch(reject);
});

const addNewUser = newUser => axios.post(`${baseUrl}/user`, newUser);

const updateUser = (uid, updatedUser) => axios.put(`${baseUrl}/user/${uid}`, updatedUser);

const deleteUser = uid => axios.delete(`${baseUrl}/user/${uid}`);

const changeFamily = (toId, famId) => axios.put(`${baseUrl}/user/${toId}/${famId}`);

const updateProfileImage = (uid, imgUrl) => axios.put(`${baseUrl}/user/uploadimage/${uid}`, imgUrl);

export default {
    getAllUsers,
    getSingleUser,
    getSingleUserByEmailLookup,
    addNewUser,
    updateUser,
    deleteUser,
    getSingleUserById,
    changeFamily,
    updateProfileImage,
};
