import React, { useState } from 'react'
import DefaultLayout from '~/components/Layout/DefaultLayout'
import { LoadingOutlined, LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Checkbox, Form, Input } from 'antd'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

interface LoginData {
  id: string
  password: string
}

const Login = () => {
  const navigate = useNavigate()
  const [form] = Form.useForm()

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const onFinish = (values: LoginData) => {
    setIsLoading(true)
    console.log(values)
    axios
      .post('http://localhost:9998/api/v1/auth/login', {
        id: values.id,
        password: values.password
      })
      .then(response => {
        console.log(response.data)
        localStorage.setItem('token', response.data.token)
        navigate('/trang-chu')
      })
      .catch(error => {
        alert('Tên đăng nhập hoặc mật khẩu không đúng.')
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <DefaultLayout>
      <div className="bg-slate-600 w-[25vw] rounded-md p-4">
        <h6 className="text-center text-3xl font-bold">Ứng dụng quản lý dân cư</h6>
        <Form
          form={form}
          name="login"
          onFinish={onFinish}
          autoComplete="off"
          className="mt-12 w-full"
        >
          <Form.Item
            name="id"
            rules={[{ required: true, message: 'Tên đăng nhập không thể bỏ trống.' }]}
          >
            <Input
              size="large"
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Tên đăng nhập"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Mật khẩu không thể bỏ trống.' }]}
          >
            <Input
              size="large"
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Mật khẩu"
            />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Ghi nhớ đăng nhập</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button size="large" type="primary" ghost htmlType="submit" className="mt-4" block>
              {isLoading ? <LoadingOutlined /> : 'Đăng nhập'}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </DefaultLayout>
  )
}
export default Login
