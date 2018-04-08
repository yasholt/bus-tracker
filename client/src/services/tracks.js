import axios from 'axios';
import {requestConfig} from './config';

const getTracksByDriver = async (page, size, userID) => {
    return new Promise((resolve, reject) =>{
        axios.get(`/api/driver/get-user-tracks/${userID}?page=${page}&size=${size}`, requestConfig)
            .then(response => {
                console.log('Successfully getTracksByDriver', response.data);
                resolve(response.data);
            })
            .catch(error => {
                console.error('Error to getTracksByDriver', error);
                reject(error);
            });
    });
};

const getTracksByAdmin = async (page, size) => {
    return new Promise((resolve, reject) =>{
        axios.get(`/api/admin/get-all-tracks/?page=${page}&size=${size}`, requestConfig)
            .then(response => {
                console.log('Successfully getTracksByAdmin', response.data);
                resolve(response.data);
            })
            .catch(error => {
                console.error('Error to getTracksByAdmin', error);
                reject(error);
            });
    });
};

const deleteTrackByDriver = async (trackID) => {
    return new Promise((resolve, reject) =>{
        axios.delete(`/api/driver/delete-track/${trackID}`, requestConfig)
            .then(response => {
                console.log('Successfully deleteTrackByDriver', response.data);
                resolve(response.data);
            })
            .catch(error => {
                console.error('Error to deleteTrackByDriver', error);
                reject(error);
            });
    });
};

const deleteTrackByAdmin = async (trackID) => {
    return new Promise((resolve, reject) =>{
        axios.delete(`/api/driver/delete-track/${trackID}`, requestConfig)
            .then(response => {
                console.log('Successfully deleteTrackByAdmin', response.data);
                resolve(response.data);
            })
            .catch(error => {
                console.error('Error to deleteTrackByAdmin', error);
                reject(error);
            });
    });
};

export const tracksService = {
    getTracksByDriver,
    getTracksByAdmin,
    deleteTrackByDriver,
    deleteTrackByAdmin
};