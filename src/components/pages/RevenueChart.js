import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    }
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov'];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: '',
      data: labels.map(() => faker.datatype.number({ min: 200, max: 1000 })),
      borderColor: '#EA7A9A',
      backgroundColor: '#FAC7B6',
    },
  ],
};

export function RevenueChart() {
  return <Line options={options} data={data} />;
}
