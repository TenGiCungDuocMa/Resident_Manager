import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'
import axios from 'axios'

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false
    }
  }
}

type PropsType = {
  className?: string
}

const Population = ({ className }: PropsType) => {
  const [years, setYears] = useState([]);
  const [populations, setPopulations] = useState([]);

  useEffect(() => {
    // Gửi yêu cầu GET để lấy danh sách các năm từ API
    axios.get('http://localhost:9998/api/population/years')
      .then(response => {
        setYears(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the years data!', error);
      });

    // Gửi yêu cầu GET để lấy danh sách số dân từ API
    axios.get('http://localhost:9998/api/population/numbers')
      .then(response => {
        setPopulations(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the populations data!', error);
      });
  }, []);
// console.log(years)
// console.log(populations)
  const data = {
    labels: years, // Sử dụng years làm labels
    datasets: [
      {
        label: 'Số dân',
        data: populations,
        backgroundColor: 'rgba(255, 99, 132, 0.5)'
      }
    ]
  }

  return <Bar className={className} options={options} data={data} />
}

export default Population
