import http from "../utils/http";

interface User {
    id: number;
    email: string;
    password: string;
    first_name: string;
    last_name: string;
    job: string;
    avatar: string;

}
export const AddRegister = async (values: User) => {
    const response = await http.post('/register', {
        email: values.email,
        password: values.password
    });
    return response.data;
};

export const LoginUser = async (values: User) => {
    const response = await http.post('/login', {
        email: values.email,
        password: values.password
    });
    localStorage.setItem('token', response.data.token); // Luu token vao localStorage
    return response.data;

};

// const handleLogin = async (email, password) => {
//         try {
//             const response = await axios.post(`${BASE_URL}/api/login`, {
//                 email,
//                 password,
//             });
//             setToken(response.data.token);
//             localStorage.setItem('token', response.data.token); // Lưu token vào localStorage
//             console.log('Logged in successfully:', response.data);
//         } catch (error) {
//             console.error('Login failed:', error.response.data.error);
//         }
//     };