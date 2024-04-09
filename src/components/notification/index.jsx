// useNotificationService.js
import { notification } from 'antd';

const useNotificationService = () => {
    const [api, contextHolder] = notification.useNotification();

    const openNotification = (message, description, duration = 1) => {
        notification[message]({
            message,
            description,
            duration,
        });
    };

    return { openNotification, contextHolder };
};

export default useNotificationService;
