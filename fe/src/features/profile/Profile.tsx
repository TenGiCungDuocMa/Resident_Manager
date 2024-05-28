import { useNavigate } from 'react-router-dom'
import HomeLayout from '~/components/Layout/HomeLayout'
import React, { useEffect, useState } from 'react'
import { Button, Checkbox, DatePicker, Divider, Form, Input, Radio, Select, Space } from 'antd'
import SubHeader from '~/components/SubHeader'
import { showDeleteConfirm } from '~/components/ConfirmModal'
import { ExclamationCircleFilled, LoadingOutlined } from '@ant-design/icons'
import UploadImage, { UploadFile } from '~/components/UploadImage'
import { toast } from 'react-toastify'
import dayjs, { Dayjs } from 'dayjs'
import uploadFile from '~/firebase/uploadFile'
import { academicLevel, householdRelationship } from '~/app/config'
import axios from 'axios'

interface Profile {
  name: string
  dob: string
  idNumber: string
  address: string
  family: any[]
  household: object
  properties: any[]
}

interface MyData {
  id: string
  name: string | null
  anotherName: string | null
  dob: Dayjs | null
  gender: string | null
  dateCreatedId: Dayjs | null
  placeCreatedId: string | null
  placeOfBirth: string | null
  homeTown: string | null
  resident: string | null
  currentAddress: string | null
  academicLevel: string | null
  work: string | null
  workPlace: string | null
  nation: string | null
  religion: string | null
  nationality: string | null
  passport: string | null
  password: string | null
}

const Profile = () => {
  const navigate = useNavigate()
  const [form] = Form.useForm()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<MyData>(`http://localhost:9998/api/v1/auth/current`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
        const personData = response.data
        // Convert the date string to a dayjs object
        if (personData.dob) {
          personData.dob = dayjs(personData.dob)
        }
        if (personData.dateCreatedId) {
          personData.dateCreatedId = dayjs(personData.dateCreatedId)
        }
        console.log(personData)
        // Set form fields with the fetched data
        form.setFieldsValue(personData)

        console.log(personData.dob)
      } catch (error) {
        console.error('Failed to fetch data:', error)
      }
    }

    fetchData()
  }, [])

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [image, setImage] = useState<UploadFile | null>(null)

  const onFinish = async (values: MyData) => {
    setIsLoading(true)
    console.log(values)
    axios
      .put('http://localhost:9998/api/v1/user', { ...values })
      .then(response => {
        toast.success('Update Profile thành công', {
          toastId: 'create-resident-success',
          icon: '👏'
        })
        setTimeout(() => {
          window.location.reload()
        }, 2000)
      })
      .catch(error => {
        toast.error('Update Profile thất bại', {
          toastId: 'create-resident-error',
          icon: '😢'
        })
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <HomeLayout>
      <div className="w-full rounded-lg bg-bgPrimary px-4 py-2 shadow-md">
        <SubHeader title="Thông tin cá nhân" type="create" />

        <Form
          form={form}
          name="createResident"
          autoComplete="off"
          onFinish={onFinish}
          className="grid auto-rows-max grid-cols-8 items-center justify-center"
        >
          <div className="col-span-3 col-start-3">
            <Form.Item
              label="Họ và tên"
              name="name"
              labelCol={{ span: 8 }}
            >
              <Input placeholder="Nhập họ và tên" readOnly className="readonly-input"/>
            </Form.Item>

            <Form.Item label="Tên riêng" name="anotherName" labelCol={{ span: 8 }}>
              <Input placeholder="Tên thường gọi" />
            </Form.Item>

            <Form.Item label="Tên riêng" name="password" labelCol={{ span: 8 }} hidden>
              <Input placeholder="Tên thường gọi" hidden/>
            </Form.Item>
          </div>

          <Form.Item className="ms-4">
            <UploadImage image={image} setImage={setImage} />
          </Form.Item>

          <Form.Item
            label="Ngày sinh"
            name="dob"
            labelCol={{ span: 8 }}
            className="col-span-3 col-start-3"
            rules={[{ required: true, message: 'Ngày sinh không được để trống' }]}
          >
            <DatePicker
              placeholder="Ngày sinh"
              format={'YYYY-MM-DD'}
              disabledDate={current => {
                return current && current > dayjs().endOf('day')
              }}
              style={{ width: '90%' }}
            />
          </Form.Item>

          <Form.Item
            label="Giới tính"
            name="gender"
            className="col-span-4"
            rules={[{ required: true, message: 'Giới tính không được để trống' }]}
          >
            <Radio.Group>
              <Radio value={1}>Nam</Radio>
              <Radio value={2}>Nữ</Radio>
            </Radio.Group>
          </Form.Item>

          <Divider className="col-span-4 col-start-3 m-0 pb-4">Thông tin căn cước công dân</Divider>

          <Form.Item
            label="Số CCCD"
            name="id"
            labelCol={{ span: 6 }}
            className="col-span-4 col-start-3"
          >
            <Input placeholder="Nhập số CCCD" readOnly className="readonly-input"/>
          </Form.Item>

          <Form.Item
            label="Ngày cấp"
            name="dateCreatedId"
            labelCol={{ span: 6 }}
            className="col-span-4 col-start-3"
          >
            <DatePicker
              placeholder="Ngày cấp"
              format={'YYYY-MM-DD'}
              disabledDate={current => {
                return current && current > dayjs().endOf('day')
              }}
              className="w-full"
            />
          </Form.Item>

          <Form.Item
            label="Nơi cấp"
            name="placeCreatedId"
            labelCol={{ span: 6 }}
            className="col-span-4 col-start-3"
            rules={[{ message: 'Nơi cấp không được để trống' }]}
          >
            <Input placeholder="Nhập nơi cấp" />
          </Form.Item>

          <Divider className="col-span-4 col-start-3 m-0 pb-4">Thông tin nơi ở</Divider>

          <Form.Item
            label="Nơi sinh"
            name="placeOfBirth"
            labelCol={{ span: 6 }}
            className="col-span-4 col-start-3"
            rules={[{ required: true, message: 'Nơi sinh không được để trống' }]}
          >
            <Input.TextArea placeholder="Nhập nơi sinh" />
          </Form.Item>

          <Form.Item
            label="Nguyên quán"
            name="homeTown"
            labelCol={{ span: 6 }}
            className="col-span-4 col-start-3"
            rules={[{ required: true, message: 'Nguyên quán không được để trống' }]}
          >
            <Input.TextArea placeholder="Nhập nguyên quán" />
          </Form.Item>

          <Form.Item
            label="Địa chỉ thường trú"
            name="resident"
            labelCol={{ span: 6 }}
            className="col-span-4 col-start-3"
            rules={[{ required: true, message: 'Địa chỉ thường chú không được để trống' }]}
          >
            <Input.TextArea placeholder="Nhập địa chỉ thường chú" />
          </Form.Item>

          <Form.Item
            label="Địa chỉ hiện tại"
            name="currentAddress"
            labelCol={{ span: 6 }}
            className="col-span-4 col-start-3"
            rules={[{ required: true, message: 'Địa chỉ hiện tại không được để trống' }]}
          >
            <Input.TextArea placeholder="Nhập địa chỉ hiện tại" />
          </Form.Item>

          <Divider className="col-span-4 col-start-3 m-0 pb-4">Thông tin công việc</Divider>

          <Form.Item
            label="Trình độ học vấn"
            name="academicLevel"
            labelCol={{ span: 12 }}
            className="col-span-2 col-start-3"
          >
            <Select
              showSearch
              placeholder="Trình độ học vấn"
              optionFilterProp="children"
              options={Object.values(academicLevel).map(each => ({
                value: each,
                label: each
              }))}
            />
          </Form.Item>

          <Form.Item label="Nghề nghiệp" name="work" className="col-span-2 ms-2">
            <Input placeholder="Nhập nghề nghiệp" />
          </Form.Item>

          <Form.Item
            label="Nơi làm việc"
            name="workPlace"
            labelCol={{ span: 6 }}
            className="col-span-4 col-start-3"
          >
            <Input.TextArea placeholder="Nhập nơi làm việc" />
          </Form.Item>

          <Divider className="col-span-4 col-start-3 m-0 pb-4">Thông tin khác</Divider>

          <Form.Item
            label="Dân tộc"
            name="nation"
            labelCol={{ span: 12 }}
            className="col-span-2 col-start-3"
          >
            <Select
              showSearch
              placeholder="Dân tộc"
              optionFilterProp="children"
              options={[
                {
                  value: 'kinh',
                  label: 'Kinh'
                },
                {
                  value: 'tay',
                  label: 'Tay'
                },
                {
                  value: 'giao',
                  label: 'Giao'
                }
              ]}
            />
          </Form.Item>

          <Form.Item label="Tôn giáo" name="religion" className="col-span-2 ms-2">
            <Select
              showSearch
              placeholder="Tôn giáo"
              optionFilterProp="children"
              options={[
                {
                  value: 'Không',
                  label: 'Không'
                },
                {
                  value: 'Đạo phật',
                  label: 'Đạo phật'
                },
                {
                  value: 'Thiên chúa giáo',
                  label: 'Thiên chúa giáo'
                }
              ]}
            />
          </Form.Item>

          <Form.Item
            label="Quốc tịch"
            name="nationality"
            labelCol={{ span: 12 }}
            className="col-span-2 col-start-3"
          >
            <Select
              showSearch
              placeholder="Quốc tịch"
              optionFilterProp="children"
              options={[
                {
                  value: 'Việt Nam',
                  label: 'Việt Nam'
                },
                {
                  value: 'Nhật Bản',
                  label: 'Nhật Bản'
                },
                {
                  value: 'Mỹ',
                  label: 'Mỹ'
                }
              ]}
            />
          </Form.Item>

          <Form.Item label="Số hộ chiếu" name="passport" className="col-span-2 ms-2">
            <Input placeholder="Nhập số hộ chiếu" />
          </Form.Item>

          <Form.Item className="col-span-8 col-start-6 ms-32 ">
            <Space>
              <Button disabled={isLoading} type="primary" htmlType="submit" ghost>
                {isLoading ? <LoadingOutlined /> : 'Cập nhật'}
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </HomeLayout>
  )
}

export default Profile
