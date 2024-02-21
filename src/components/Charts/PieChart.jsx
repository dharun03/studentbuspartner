import { Pie } from "react-chartjs-2";
import React from "react";
import { Chart as ChartJS, scales } from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

export function PieChart({ chartData }) {
  return <Pie data={chartData} />;
}
