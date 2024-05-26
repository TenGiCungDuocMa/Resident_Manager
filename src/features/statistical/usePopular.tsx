import { useState, useEffect } from 'react';
import axios from 'axios';

const usePopulationData = () => {
  const [years, setYears] = useState([]);
  const [populations, setPopulations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPopulation = async () => {
      try {
        const response = await axios.get(
          'https://api.worldbank.org/v2/country/VN/indicator/SP.POP.TOTL?format=json'
        );
        console.log('API response:', response.data);
        const data = response.data[1];

        // Sắp xếp dữ liệu theo năm
        const sortedData = data.sort((a: { date: string; }, b: { date: string; }) => parseInt(a.date) - parseInt(b.date));

        // Tạo mảng các năm và mảng số dân
        const yearsArray = sortedData.map((item: { date: any; }) => item.date);
        const populationsArray = sortedData.map((item: { value: any; }) => item.value);

        setYears(yearsArray);
        setPopulations(populationsArray);
      } catch (error) {
        // @ts-ignore
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPopulation();
  }, []);

  return { years, populations };
};

export default usePopulationData;
