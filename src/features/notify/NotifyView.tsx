import React from 'react'
import { List, notification } from 'antd'
import HomeLayout from '~/components/Layout/HomeLayout'
import NotificationItem from './NotificationItem'

const NotifyView = () => {
  const notifications = [
    {
      title: 'Thông báo về sự kiện',
      description: 'Sự kiện ...'
    },
    {
      title: 'Thông báo về nguy cơ lây lan dịch bệnh',
      description: 'Dịch bệch xx có thể lây lan ...'
    }
  ]

  return (
    <HomeLayout>
      <div className="h-max rounded bg-bgPrimary px-4 py-2 shadow-sm">
        <div className="w-full mb-2 flex items-center justify-between">
          <List
            itemLayout="horizontal"
            dataSource={notifications}
            renderItem={item => (
              <NotificationItem title={item.title} description={item.description} />
            )}
          />
        </div>
      </div>
    </HomeLayout>
  )
}

export default NotifyView
