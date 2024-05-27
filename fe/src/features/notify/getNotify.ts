import axios from 'axios';

export async function getNotifications(): Promise<Notification[]> {
    try {
        const response = await axios.get('http://localhost:9998/api/v1/user/notify');
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch notifications');
    }
}
