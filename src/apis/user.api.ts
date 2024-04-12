import http from '../utils/http';

interface User {
    id: number;
    email: string;
    password: string;
    first_name: string;
    last_name: string;
    name: string;
    job: string;
    avatar: string;
}
export const getUser = async () => {
    const response = await http.get(`/users`);
    return response.data;
}

export const getUserById = async (userId: User) => {
    const response = await http.get(`/users/${userId}`);
    return response.data;

}

export const addUser = async (value: User) => {
    const response = await http.post('/users', {
        name: value.name,
        job: value.job
    });
    return response.data;
}

export const removeUser = async (id: number) => {
    const response = await http.delete(`/users/${id}`);
    return response.data;
}
