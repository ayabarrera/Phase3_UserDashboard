'use client';

import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, CategoryScale, Tooltip, Legend);

export default function BlogStatsChart({ posts }) {
  const hasViews = posts.some((post) => post.views > 0);

  const defaultData = {
    labels: ['You Currently Have No Views!'],
    datasets: [
      {
        label: 'No Views',
        data: [1], // Fake data just to show the chart
        backgroundColor: ['#e0e0e0'],
        borderColor: ['#ccc'],
        borderWidth: 1,
      },
    ],
  };

  const actualData = {
    labels: posts.map((post) => post.title),
    datasets: [
      {
        label: 'Post Views',
        data: posts.map((post) => post.views),
        backgroundColor: posts.map(
          (_, index) =>
            `rgba(${(index * 100) % 255}, ${(index * 150) % 255}, ${(index * 200) % 255}, 0.5)`
        ),
        borderColor: posts.map(
          (_, index) =>
            `rgba(${(index * 100) % 255}, ${(index * 150) % 255}, ${(index * 200) % 255}, 1)`
        ),
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) =>
            hasViews
              ? `${tooltipItem.label}: ${tooltipItem.raw} views`
              : 'No view data',
        },
      },
    },
  };

  return <Pie data={hasViews ? actualData : defaultData} options={options} />;
}
