import { List } from 'antd'

type NotificationItemProps = {
    title: string
    content: string
}

const NotificationItem = ({ title, content }: NotificationItemProps) => {
    return (
        <List.Item className="flex w-full flex-col items-start">
            <h2 className="text-lg font-bold">{title}</h2>
            <p className="text-base">{content}</p>
        </List.Item>
    )
}
export default NotificationItem