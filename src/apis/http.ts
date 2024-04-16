import axios from 'axios';
const BASE_URL = import.meta.env.VITE_BASE_URL;

const http = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

http.interceptors.response.use(
    response => response,
    error => {
        let errorMessage = 'Có lỗi xảy ra, vui lòng thử lại sau.';
        if (error.response) {
            switch (error.response.status) {
                case 400:
                    errorMessage = 'Thông tin không hợp lệ';
                    break;
                case 401:
                    errorMessage = 'Chưa xác thực, cần đăng nhập';
                    break;
                case 403:
                    errorMessage = 'Không có quyền truy cập';
                    break;
                case 404:
                    errorMessage = 'Không tìm thấy tài nguyên';
                    break;
                case 500:
                    errorMessage = 'Lỗi server nội bộ';
                    break;
                default:
                    errorMessage = `Lỗi không xác định: ${error.response.status}`;
            }
        } else {
            errorMessage = error.message || 'Kết nối mạng không ổn định';
        }
        return Promise.reject(errorMessage);
    }
);

export default http;
