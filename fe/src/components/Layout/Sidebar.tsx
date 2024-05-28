import {
  CaretUpOutlined,
  GiftFilled,
  GiftOutlined,
  InfoCircleFilled,
  InfoCircleOutlined,
  MacCommandFilled,
  MacCommandOutlined,
  SolutionOutlined,
  TeamOutlined,
  UserAddOutlined,
  UserOutlined
} from '@ant-design/icons'
import { Avatar, Divider } from 'antd'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Logo from '~/assets/Logo_HCMUAF.svg'
import ButtonLogout from '../ButtonLogout'

type SideButtonProps = {
  icon: React.ReactNode
  activedIcon: React.ReactNode
  text: string
  href: string
}

const SideButton = ({ icon, activedIcon, text, href }: SideButtonProps) => {
  const navigate = useNavigate()
  const currentPath = useLocation().pathname
  const isActive =
    currentPath.slice(1).split('/').includes(href.slice(1)) ||
    (currentPath === '/' && href === '/') ||
    (currentPath === '/tam-vang/them' && href === '/tam-tru') ||
    (currentPath === '/items' && href === '/su-kien')

  return (
    <button
      className={
        isActive
          ? 'flex w-full items-center justify-start gap-4 rounded-md bg-btnActive py-2 ps-3 text-textPrimary transition-colors hover:bg-btnDefault'
          : 'flex w-full items-center justify-start gap-4 rounded-md py-2 ps-3 transition-colors hover:bg-btnDefault'
      }
      onClick={() => navigate(href)}
    >
      {isActive ? activedIcon : icon}
      <p className={`${isActive ? 'font-semibold' : 'font-medium'}`}>{text}</p>
    </button>
  )
}

const Sidebar = () => {
  return (
    <div className="flex h-full min-w-[13rem] max-w-[13rem] flex-col items-center justify-start gap-8 px-3 pt-8">
      <div className="ml-[-8px] flex items-start justify-center gap-2">
        <img className="left-0 top-0 w-20" src={Logo} alt="rem-img" />
      </div>
      <div className="flex w-full grow flex-col items-center justify-start gap-1">
      
        <SideButton
          icon={<UserOutlined />}
          activedIcon={<UserOutlined />}
          text="Hồ sơ"
          href="/ho-so"
        />
        <Divider className="m-0" />
      </div>
      <div className="w-full">
        <Divider className="m-0" />
        <div className="flex w-full items-center justify-between py-3">
          Đăng xuất
          <ButtonLogout />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
