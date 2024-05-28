import { List } from 'antd';
import { Link } from 'react-router-dom';

type NotificationItemProps = {
    title: string;
    content: string;
    clickable?: boolean;
    to?: string; // Optional prop for link destination
};

const NotificationItem = ({ title, content, clickable = true, to }: NotificationItemProps) => {
    if (clickable) {
        return (
            <List.Item className="w-full rounded-lg bg-bgPrimary px-4 py-2 shadow-md mb-3">
                <Link to={to || '/'} className="block">
                    <h2 className="text-lg font-bold">{title}</h2>
                    <p className="text-base">{content}</p>
                </Link>
            </List.Item>
        );
    } else {
        return (
            <List.Item className="w-full rounded-lg bg-bgPrimary px-4 py-2 shadow-md mb-3">
                <div>
                    <h2 className="text-lg font-bold">{title}</h2>
                    <p className="text-base">{content}</p>
                </div>
            </List.Item>
        );
    }
};

export default NotificationItem;
