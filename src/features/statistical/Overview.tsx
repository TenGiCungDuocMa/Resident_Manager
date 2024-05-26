import React from 'react'
import HomeLayout from '~/components/Layout/HomeLayout'
import Population from './Population'
import { Carousel } from 'antd'
import Weather from './Weather';

type ChartWrapperPropsType = {
  className?: string
  title: string
  chart: React.ReactNode
}

const ChartWrapper = ({ className, title, chart }: ChartWrapperPropsType) => {
  return (
    <div className={`h-min rounded-md bg-bgPrimary p-3 shadow-sm ${className}`}>
      <p className="text-xl font-medium">{title}</p>
      {chart}
    </div>
  )
}

const Overview = () => {
  return (
    <HomeLayout>
      <div className="grid auto-rows-max grid-cols-4 gap-3">
        <div className="col-span-4 rounded-md bg-bgPrimary p-3 shadow-sm">
          <div className="grid grid-cols-2 gap-3">
            <div className="p-2">
              <p className="text-xl">
                Chào mừng đến với, <span className="text-2xl font-semibold">Thu4_Ca1_Nhom8</span>
              </p>
              <div>
                <p className="text-medium mt-4 text-base font-medium">🏫 Địa điểm: </p>
                <p className={`text-base`}>
                  <span>Ban quản lý dân cư TP.HCM.</span>
                </p>
              </div>
              <div>
                <p className="text-medium mt-2 text-base font-medium">🖥 Mô tả: </p>
                <p className={`text-base`}>
                  <span>
                    Ban quản lý dân cư TP.HCM có hơn 103.092 hộ gia đình với 453.317 nhân khẩu,
                    cùng với hàng trăm sinh
                    viên thuê trọ và hàng chục gia đình nơi khác đến thuê nhà làm kinh doanh dịch vụ.
                  </span>
                </p>
              </div>
            </div>
            <Carousel
              className="col-start-2 max-h-[18rem] min-h-[18rem] shadow-sm"
              effect="fade"
              autoplay
            >
              <div>
                <img
                  className="max-h-[18rem] min-h-[18rem] w-full rounded-md object-cover"
                  src="https://firebasestorage.googleapis.com/v0/b/resident-management-6208c.appspot.com/o/images%2Fbanner-1.jpg?alt=media&token=56ffea9e-de0b-4763-8361-1f09cf155136"
                />
              </div>
              <div>
                <img
                  className="max-h-[18rem] min-h-[18rem] w-full rounded-md object-cover"
                  src="https://rentapartment.vn/wp-content/uploads/2021/04/dan-so-dian-tich-ho-chi-minh.jpg"
                />
              </div>
            </Carousel>
          </div>
        </div>

        <div className="h-min rounded-md bg-bgPrimary p-3 shadow-sm col-span-2">
          <h2 className="weather-title">Thông tin thời tiết hiện tại: </h2>
          <p className="weather-info"><Weather /></p>
          <h3 className="area">Tổng diện tích TP.HCM: 2.095 km²</h3>
        </div>

        <ChartWrapper className="col-span-2" title="Thống kê dân số qua các năm:" chart={<Population />} />

        {/*<ChartWrapper title="Giới tính: " chart={<Gender />} />*/}
        {/*<ChartWrapper title="Trình độ học vấn: " chart={<Level />} />*/}
      </div>
    </HomeLayout>
  )
}

export default Overview
