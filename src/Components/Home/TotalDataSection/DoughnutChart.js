import React from "react";
import { Doughnut } from "react-chartjs-2";
import { DoughnutChartWrapper } from "../Home.styles";
const DoughnutChart = ({ caseData }) => {
  const data = {
    labels: ["Active Cases", "Recovered", "deaths"],
    datasets: [
      {
        label: "Total data",
        data: [caseData.extra2, caseData.extra1, caseData.deaths],
        backgroundColor: ["#DA8F54", "#519872", "#ca3e47"],
        borderWidth: 0,
      },
    ],
  };
  const options = {
    cutoutPercentage: 70,
    maintainAspectRatio: false,
    legend: {
      position: "left",
    },
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          var dataset = data.datasets[tooltipItem.datasetIndex];
          var meta = dataset._meta[Object.keys(dataset._meta)[0]];
          var total = meta.total;
          var currentValue = dataset.data[tooltipItem.index];
          var percentage = parseFloat(
            ((currentValue / total) * 100).toFixed(2)
          );
          return currentValue + " (" + percentage + "%)";
        },
        title: function (tooltipItem, data) {
          return data.labels[tooltipItem[0].index];
        },
      },
    },
  };

  return (
    <DoughnutChartWrapper>
      <div className="chart">
        <Doughnut
          data={data}
          options={options}
          styles={{ height: "100%", width: "100%" }}
        />
      </div>
    </DoughnutChartWrapper>
  );
};
export default DoughnutChart;
