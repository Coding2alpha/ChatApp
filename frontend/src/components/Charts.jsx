import { Doughnut, Line } from "react-chartjs-2";
import {
  ArcElement,
  CategoryScale,
  Chart,
  Filler,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
  plugins,
  scales,
} from "chart.js";
import { getLast7Days } from "../lib/features";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  ArcElement,
  Legend,
  Tooltip
);

const LineChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        display: false,
      },
    },
  },
};

const labels = getLast7Days();
// console.log(labels);

const LineChart = ({ value = [] }) => {
  const data = {
    labels: labels,
    datasets: [
      {
        data: value,
        label: "My First dataset",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
        borderColor: "rgb(75,192,192)",
      },
    ],
  };
  return <Line data={data} options={LineChartOptions} />;
};

const DoughnutChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  cutout: 70,
};

const DoughnutChart = ({ labels, value }) => {
  const data = {
    labels: labels,
    datasets: [
      {
        data: value,
        backgroundColor: ["rgba(75, 192, 192, 0.6)", "rgb(199, 25, 25,0.6)"],
        hoverBackgroundColor: [
          "rgba(75, 192, 192, 1)",
          "rgb(199, 25, 25,1)",
        ],
        fill: true,
        borderColor: "rgb(75,192,192)",
        offset: 20,
      },
    ],
  };
  return <Doughnut data={data} options={DoughnutChartOptions} />;
};

export { LineChart, DoughnutChart };
