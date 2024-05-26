import React from 'react'
import { List, notification } from 'antd'
import HomeLayout from '~/components/Layout/HomeLayout'
import NotificationItem from './NotificationItem'

const NotifyView = () => {
    return (
        <HomeLayout>
            <div className="h-max rounded bg-bgPrimary px-4 py-2 shadow-sm">
                <div className="w-full mb-2 flex items-center justify-between">
                    <List
                        itemLayout="horizontal"
                        // dataSource={}
                        // renderItem={item => (
                        //     <NotificationItem title={item.title} content={item.content} />
                        // )}
                    />
                </div>
            </div>
        </HomeLayout>
    )
}

export default NotifyView