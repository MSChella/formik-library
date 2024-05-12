import axiosInstance from '../config/axios-config';


export const getAllBooks = async () => {
    try {
        const response = await axiosInstance.get('/api/books/');
        return response.data;
    } catch (error) {
        console.error('Error fetching books:', error);
        return [];
    }
};

export const addBook = async (bookData) => {
    try {
        const response = await axiosInstance.post('/api/books/', bookData);
        return response.data;
    } catch (error) {
        console.error('Error adding book:', error);
        return null;
    }
};

export const getBookById = async (bookId) => {
    try {
        const response = await axiosInstance.get(`/api/books/${bookId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching book by ID:', error);
        return null;
    }
};

export const updateBook = async (id, bookData) => {
    try {
        const response = await axiosInstance.put(`/api/books/${id}`, bookData);
        return response.data;
    } catch (error) {
        console.error('Error updating book:', error);
        return null;
    }
};

export const deleteBook = async (id, bookData) => {
    try {
        const response = await axiosInstance.delete(`/api/books/${id}`, bookData);
        return response.data;
    } catch (error) {
        console.error('Error deleting book:', error);
        return null;
    }
};

export default axiosInstance;