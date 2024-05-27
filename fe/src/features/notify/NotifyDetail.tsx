import React, { useEffect, useState } from 'react';
import axios from 'axios';

type NotificationDetailProps = {
    match: {
        params: {
            id: string;
        }
    }
}

type Notification = {
    id: number;
    title: string;
    content: string;
    postedTime: string;
}

const NotifyDetail = ({ match }: NotificationDetailProps) => {
    const [notification, setNotification] = useState<Notification | null>(null);

    useEffect(() => {
        const fetchNotification = async () => {
            try {
                const response = await axios.get(`http://localhost:9998/api/v1/user/notify/${match.params.id}`);
                setNotification(response.data[0]);
            } catch (error) {
                console.error('Failed to fetch notification', error);
            }
        };

        fetchNotification();
    }, [match.params.id]);

    return notification ? (
        <div className="notification-detail">
            <h2 className="text-lg font-bold">{notification.title}</h2>
            <p className="text-sm text-gray-500">{notification.postedTime}</p>
            <p className="text-base">{notification.content}</p>
        </div>
    ) : (
        <p>Đang tải...</p>
    );
}

export default NotifyDetail;