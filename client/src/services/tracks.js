import axios from 'axios';

export const tracksService = {
    getTracksOfUser
};

function getTracksOfUser(page, size, userID) {

    const config = {
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json',
        },
    };

    return new Promise((resolve, reject) => {
        axios.get(`/api/driver/get-user-tracks/${userID}?page=${page}&size=${size}`, config)
            .then(response => {
                console.log('Success getTracksOfUser', response);
                resolve(response.data);
            })
            .catch(error => {
                console.error('Error getTracksOfUser', error);
                reject(error);
            });
    })
}