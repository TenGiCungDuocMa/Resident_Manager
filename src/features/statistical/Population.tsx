import React from 'react'
import usePopular from './usePopular';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

type PropsType = {
  className?: string
}
// const { years, populations } = usePopular();
const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false
    }
  }
}

const labels = ['2015', '2016', '2017', '2018', '2019', '2020', '2021']

const data = {
  labels,
  // years,
  datasets: [
    {
      label: 'Số dân',
      data: [8307, 8479, 8649, 8843, 9038, 9227, 9116],
      // data: populations,
      backgroundColor: 'rgba(255, 99, 132, 0.5)'
    }
  ]
}

const Population = ({ className }: PropsType) => {
  return <Bar className={className} options={options} data={data} />
}

export default Population
