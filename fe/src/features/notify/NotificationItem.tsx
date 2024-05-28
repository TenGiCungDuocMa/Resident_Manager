import { List } from 'antd'

type NotificationItemProps = {
    title: string
    content: string
}

const NotificationItem = ({ title, content }: NotificationItemProps) => {
    return (
        <List.Item className="w-full rounded-lg bg-bgPrimary px-4 py-2 shadow-md mb-3">
            <h2 className="text-lg font-bold">{title}</h2>
            <p className="text-base">{content}</p>
        </List.Item>
    )
}
export default NotificationItem