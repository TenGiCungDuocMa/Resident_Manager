import React, { useEffect, useState } from 'react'
import { Button, DatePicker, Form, Input, Modal, Space, Select, Radio, Checkbox } from 'antd';
import { showDeleteConfirm } from '~/components/ConfirmModal';
import { ExclamationCircleFilled, LoadingOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { createTamTru, getCites, getDistricts, getWards } from '~/lib/temporary'
import { toast } from 'react-toastify';

const { Option } = Select;

type PropType = {
  currentResident: IResident;
};

const TamTruCreate = ({ currentResident }: PropType) => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [cities, setCities] = useState<[]>([]);
  const [districts, setDistricts] = useState<[]>([]);
  const [wards, setWards] = useState<[]>([]);

  const fetchCities = async () => {
    const cityData = await getCites();

    setCities(cityData.map((item: { id: any; name: any; }) => {
      return {
        value: item.id,
        label: item.name,
      }
    }));
  };

  useEffect(() => {
    form.resetFields();
    fetchCities();
  }, []);
  /**
   * 9.Nhận thông báo kết quả
   * @param values
   */
  const onFinish = (values: any) => {
    let isError = false;
    setIsLoading(true);
    createTamTru({
      ...values,
      birthDate: values.birthDate.format('YYYY-MM-DD')
    })
      .then(() => {
        toast.success('Đăng ký tạm trú thành công');
      })
      .catch((err) => {
        toast.error('Đăng ký tạm trú thất bại');
        isError = true;
        console.log('Đăng ký tạm trú thất bại', err.message);
      })
      .finally(() => {
        setIsLoading(false);
        if (!isError) setIsOpen(false);
      });
  };
  /**
   *  5.Lấy Api tỉnh thành
   * @param value
   */
  const onChangeCity = async (value: any) => {
    if (value) {
      const data = await getDistricts(value);
      setDistricts(data.map((item: { id: any; name: any; }) => {
        return {
          value: item.id,
          label: item.name,
        }
      }));
      form.resetFields(['district', 'ward']);
    }
  }

  const onChangeDistrict = async (value: any) => {
    if (value) {
      const data = await getWards(value);
      setWards(data.map((item: { id: any; name: any; }) => {
        return {
          value: item.id,
          label: item.name,
        }
      }));
      form.resetFields(['ward']);
    }
  }
  /**
   * Kết thức phần lấy API
   */

  return (
    /**
     * Nút đăng kí tạm trú
     */
    <>
      <Button type="primary" ghost onClick={() => setIsOpen(true)}>
        Đăng ký tạm trú
      </Button>

      {/*6. Form đăng kí tạm trú*/}
      <Modal
        title="Đăng ký tạm trú"
        open={isOpen}
        onOk={() => setIsOpen(false)}
        onCancel={() => setIsOpen(false)}
        width={1000}
      >
        <Form
          form={form}
          name="dangKyTamTru"
          autoComplete="off"
          onFinish={onFinish}
          labelCol={{ span: 8 }}
        >
          <Form.Item
            label="Tỉnh/Thành Phố"
            name="city"
            rules={[{ required: true, message: 'Tỉnh/Thành Phố không được để trống' }]}
          >
            <Select placeholder="Chọn Tỉnh/Thành Phố" onChange={onChangeCity} options={cities} />
          </Form.Item>

          <Form.Item
            label="Quận/Huyện"
            name="district"
            rules={[{ required: true, message: 'Quận/Huyện không được để trống' }]}
          >
            <Select placeholder="Chọn Quận/Huyện" onChange={onChangeDistrict} options={districts}>
            </Select>
          </Form.Item>

          <Form.Item
            label="Phường/Xã"
            name="ward"
            rules={[{ required: true, message: 'Phường/Xã không được để trống' }]}
          >
            <Select placeholder="Chọn Phường/Xã" options={wards}>
            </Select>
          </Form.Item>

          <Form.Item
            label="Cơ quan thực hiện"
            name="implementingAgency"
            rules={[{ required: true, message: 'Cơ quan thực hiện không được để trống' }]}
          >
            <Input placeholder="Công An + Tên phường" />
          </Form.Item>

          <Form.Item
            label="Số điện thoại"
            name="phoneOfAgency"
            rules={[{ required: false }]}
          >
            <Input placeholder="Số điện thoại" />
          </Form.Item>

          <Form.Item
            label="Địa chỉ"
            name="address"
            rules={[{ required: true, message: 'Địa chỉ không được để trống' }]}
          >
            <Input placeholder="Số nhà, đường phố, thôn, xóm, làng, ấp,.." />
          </Form.Item>

          <Form.Item
            label="Họ tên chủ hộ"
            name="nameOfFullHousehold"
            rules={[{ required: true, message: 'Họ tên chủ hộ không được để trống' }]}
          >
            <Input placeholder="Họ tên chủ hộ" />
          </Form.Item>

          <Form.Item
            label="Quan hệ với chủ hộ"
            name="relationshipHouseholder"
            rules={[{ required: true, message: 'Quan hệ với chủ hộ không được để trống' }]}
          >
            <Input placeholder="Quan hệ với chủ hộ" />
          </Form.Item>

          <Form.Item
            label="Số định danh cá nhân chủ hộ"
            name="identificationOfHouseholder"
            rules={[{ required: true, message: 'Số định danh cá nhân chủ hộ không được để trống' }]}
          >
            <Input placeholder="Số định danh cá nhân chủ hộ" />
          </Form.Item>

          <Form.Item
            label="Họ và tên"
            name="fullName"
            rules={[{ required: true, message: 'Họ và tên không được để trống' }]}
          >
            <Input placeholder="Họ và tên" />
          </Form.Item>

          <Form.Item
            label="Số định danh cá nhân"
            name="identification"
            rules={[{ required: true, message: 'Số định danh cá nhân không được để trống' }]}
          >
            <Input placeholder="Số định danh cá nhân" />
          </Form.Item>

          <Form.Item
            label="Giới tính"
            name="gender"
            rules={[{ required: true, message: 'Giới tính không được để trống' }]}
          >
            <Select placeholder="Chọn Giới tính">
              <Option value="Nam">Nam</Option>
              <Option value="Nữ">Nữ</Option>
              {/* Add other options as needed */}
            </Select>
          </Form.Item>

          <Form.Item
            label="Ngày tháng năm sinh"
            name="birthDate"
            rules={[{ required: true, message: 'Ngày tháng năm sinh không được để trống' }]}
          >
            <DatePicker className="w-full" placeholder="Ngày tháng năm sinh" format={'YYYY-MM-DD'} />
          </Form.Item>

          <Form.Item
            label="Số điện thoại liên hệ"
            name="phone"
            // rules={[{ required: true, message: 'Số điện thoại không được để trống' }]}
          >
            <Input placeholder="Số điện thoại liên hệ" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            // rules={[{ required: true, message: 'Email không được để trống' }]}
          >
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item
            label="Nơi thường trú"
            name="placeOfResidence"
            rules={[{ required: true, message: 'Nơi thường trú không được để trống' }]}
          >
            <Input placeholder="Địa chỉ nơi thường trú" />
          </Form.Item>

          <Form.Item
            label="Nơi ở hiện tại"
            name="currentAddress"
            rules={[{ required: true, message: 'Nơi ở hiện tại không được để trống' }]}
          >
            <Input placeholder="Địa chỉ nơi ở hiện tại" />
          </Form.Item>

          <Form.Item
            label="Nội dung đề nghị"
            name="recommendedContent"
            rules={[{ required: true, message: 'Nội dung đề nghị không được để trống' }]}
          >
            <Input.TextArea placeholder="Đăng ký tạm trú tại + địa chỉ  " />
          </Form.Item>


          <Form.Item
            label="Hình thức nhận kết quả"
            name="receivingResults"
            rules={[{ required: true, message: 'Hình thức nhận kết quả không được để trống' }]}
          >
            <Select placeholder="Chọn hình thức nhận kết quả">
              <Option value="NhanTrucTiep">Nhận trực tiếp</Option>
              {/* Add other options as needed */}
            </Select>
          </Form.Item>

          <Form.Item
            name="confirm"
            valuePropName="checked"
            rules={[{ validator: (_, value) => value ? Promise.resolve() : Promise.reject('Bạn phải xác nhận thông tin') }]}
          >
            <Checkbox>Tôi xin chịu trách nhiệm trước pháp luật về lời khai trên</Checkbox>
          </Form.Item>

          <Form.Item className="flex items-center justify-end">
            <Space>
              <Button
                type="primary"
                htmlType="button"
                ghost
                danger
                onClick={() =>
                  showDeleteConfirm({
                    title: 'Bạn có chắc chắn muốn hủy quá trình?',
                    icon: <ExclamationCircleFilled />,
                    onOk() {
                      setIsOpen(false);
                      form.resetFields();
                    },
                  })
                }
              >
                Hủy
              </Button>
              {/*7.Button đăng kí*/}
              <Button disabled={isLoading} type="primary" htmlType="submit" ghost>
                {isLoading ? <LoadingOutlined /> : 'Đăng ký'}
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default TamTruCreate;