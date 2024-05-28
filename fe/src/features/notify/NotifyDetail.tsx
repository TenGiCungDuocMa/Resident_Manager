import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams, useNavigate} from 'react-router-dom';
import SubHeader from "~/components/SubHeader";
import HomeLayout from "~/components/Layout/HomeLayout";
import { format, parseISO } from 'date-fns';
type Notification = {
    id: number;
    title: string;
    content: string;
    postedTime: string;
}

const NotifyDetail = () => {
    const {id} = useParams<{ id: string }>();
    const [notification, setNotification] = useState<Notification | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchNotification = async () => {
            try {
                const response = await axios.get(`http://localhost:9998/api/v1/user/notify/${id}`);
                setNotification(response.data[0]);
                // console.log('Notification:>>>>>>> ', response.data[0])
            } catch (error) {
                console.error('Failed to fetch notification', error);
            }
        };

        fetchNotification();
    }, [id]);
    const handleBackClick = () => {
        navigate('/notifications');
    };

    const formatPostedTime = (postedTime: string) => {
        const date = parseISO(postedTime);
        return format(date, 'MMMM dd, yyyy h:mm a'); // Format as May 28, 2024 7:22 AM
    };

    return (
        <HomeLayout>
            <SubHeader title="Chi tiết thông báo" type="create"/>
            <div>
                {notification == null ? (
                    <p>Hiện tại chưa có thông báo.</p>
                ) : (
                    <>
                        <button
                            onClick={handleBackClick}
                            className="mb-3 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                        >
                            Quay lại
                        </button>
                        <div className="w-full rounded-lg bg-bgPrimary px-4 py-2 shadow-md">
                            <h2 className="text-lg font-bold">{notification.title}</h2>
                            <p className="ml-1 my-2 text-sm text-gray-500 opacity-50">{formatPostedTime(notification.postedTime)}</p>
                            <p className="text-base">{notification.content}</p>
                        </div>
                    </>
                )}
            </div>

        </HomeLayout>
    )
}

export default NotifyDetail;
