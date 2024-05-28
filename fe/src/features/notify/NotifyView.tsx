import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {List} from 'antd';
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
            <div className="w-full rounded-lg bg-bgPrimary px-4 py-2 shadow-md">
                {notifications.length === 0 ? (
                    <p>Hiện tại chưa có thông báo.</p>
                ) : (
                    <List
                        itemLayout="vertical"
                        dataSource={notifications}
                        renderItem={({id, title, content}) => (
                            <Link to={`/notify/${id}`} key={id}>
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