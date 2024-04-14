import { UserInput } from "../type/users.type";
import http from "../utils/http";

export const AddRegister = async (values: UserInput) => {
    const response = await http.post('/register', {
        email: values.email,
        password: values.password
    });
    return response.data;
};

export const LoginUser = async (values: UserInput) => {
    const response = await http.post('/login', {
        email: values.email,
        password: values.password
    });
    localStorage.setItem('token', response.data.token);
    return response.data;

};

