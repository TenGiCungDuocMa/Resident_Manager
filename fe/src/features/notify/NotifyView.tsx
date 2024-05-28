import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { List, Divider } from 'antd';
import NotificationItem from './NotificationItem';
import HomeLayout from "~/components/Layout/HomeLayout";
import SubHeader from "~/components/SubHeader";

interface Notification {
    id: number;
    title: string;
    content: string;
}

const NotifyComponent = () => {
    const [notifications, setNotifications] = useState<Notification[]>([]);

    useEffect(() => {
        fetch('http://localhost:9998/api/v1/user/notify')
            .then(response => response.json())
            .then(data => setNotifications(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);


    return (
        <HomeLayout>
            <SubHeader title="Thông báo" type="create"/>
            <div>
                {notifications.length === 0 ? (
                    <p>Hiện tại chưa có thông báo.</p>
                ) : (
                    <List
                        itemLayout="vertical"
                        dataSource={notifications}
                        renderItem={({id, title, content}) => (
                            <Link to={`/notifications/${id}`} key={id}>
                                <NotificationItem title={title} content={content}/>
                            </Link>

                        )}
                    />
                )}
            </div>
        </HomeLayout>

    );
};

export default NotifyComponent;
