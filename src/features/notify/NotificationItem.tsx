import { List } from 'antd'

type NotificationItemProps = {
  title: string
  description: string
}

const NotificationItem = ({ title, description }: NotificationItemProps) => {
  return (
    <List.Item className="flex w-full flex-col items-start">
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-base">{description}</p>
    </List.Item>
  )
}

export default NotificationItem
