import axios from 'axios';

export const usersData = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users/',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const usersAlbum = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/albums/',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const usersPost = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/posts/',
    headers: {
        'Content-Type': 'application/json',
    },
});
