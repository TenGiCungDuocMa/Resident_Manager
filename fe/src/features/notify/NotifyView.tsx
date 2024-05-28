import { useEffect, useState } from 'react';
import { List } from 'antd';
import NotificationItem from './NotificationItem';
import HomeLayout from "~/components/Layout/HomeLayout";
import SubHeader from "~/components/SubHeader";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Notification {
    id: number;
    title: string;
    content: string;
    detail: string | null;
}

const NotifyComponent = () => {
    const [notifications, setNotifications] = useState<Notification[]>([]);

    useEffect(() => {
        fetch('http://localhost:9998/api/v1/user/notify')
            .then(response => response.json())
            .then(data => setNotifications(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleNotificationClick = (notification: Notification) => {
        if (!notification.detail) {
            toast.warn('Thông báo này không có thông báo chi tiết!');
        }
    };

    return (
        <HomeLayout>
            <SubHeader title="Thông báo" type="create" />
            <div>
                {notifications.length === 0 ? (
                    <p>Hiện tại chưa có thông báo.</p>
                ) : (
                    <List
                        itemLayout="vertical"
                        dataSource={notifications}
                        renderItem={({ id, title, content, detail }) => (
                            <div onClick={() => handleNotificationClick({ id, title, content, detail })}>
                                {detail ? (
                                    <NotificationItem title={title} content={content} to={`/notifications/${id}`} />
                                ) : (
                                    <NotificationItem title={title} content={content} clickable={false} />
                                )}
                            </div>
                        )}
                    />
                )}
            </div>
        </HomeLayout>
    );
};

export default NotifyComponent;
