import { Bar } from "react-chartjs-2";
import React from "react";
import { Chart as ChartJS, scales } from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

export function BarChart({ chartData }) {
  return (
    <Bar
      data={chartData}
      options={{
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              display: false,
            },
          },
          x: {
            grid: {
              display: false,
            },
          },
        },
        plugins: {
          legend: {
            labels: {
              boxWidth: 0,
            },
          },
        },
      }}
    />
  );
}
