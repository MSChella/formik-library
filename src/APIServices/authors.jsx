import axios from 'axios';

const BASE_URL = 'http://localhost:5000'; // Update with your backend URL

const api = axios.create({
    baseURL: `${BASE_URL}/api/author`,
});

export const getAllAuthors = async () => {
    try {
        const response = await api.get('/');
        return response.data;
    } catch (error) {
        console.error('Error fetching authors:', error);
        return [];
    }
};

export const addAuthor = async (authorData) => {
    try {
        const response = await api.post('/', authorData);
        return response.data;
    } catch (error) {
        console.error('Error adding author:', error);
        return null;
    }
};

export const updateAuthor = async (id, authorData) => {
    try {
        const response = await api.put(`/${id}`, authorData);
        return response.data;
    } catch (error) {
        console.error('Error updating author:', error);
        return null;
    }
};

export const deleteAuthor = async (id) => {
    try {
        const response = await api.delete(`/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting author:', error);
        return null;
    }
};
