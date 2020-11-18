import React, { useState, useEffect } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import { BarChartWrapper } from "../Home.styles";
const CalculateProvinceSum = (data, provinceName) => {
  let sum = 0;
  data.forEach((e) => {
    if (e.Province === provinceName) {
      sum += parseInt(e.Value, 10);
    }
  });
  return sum;
};
const BarChart = ({ caseData }) => {
  const [ProvinceData, setProvinceData] = useState({
    "Province 1": 0,
    "Province 2": 0,
    Bagmati: 0,
    Gandaki: 0,
    "Province 5": 0,
    Karnali: 0,
    Sudurpaschim: 0,
  });
  useEffect(() => {
    if (caseData.date) {
      const api = `https://portal.edcd.gov.np/rest/api/fetch?filter=casesBetween&type=dayByDay&sDate=2020-01-01&eDate=${caseData.date}&disease=COVID-19`;
      axios.get(api).then((res) => {
        const data = res.data;
        let province1Sum = CalculateProvinceSum(data, "Province 1");
        let province2Sum = CalculateProvinceSum(data, "Province 2");
        let bagmatiSum = CalculateProvinceSum(data, "Bagmati");
        let gandakiSum = CalculateProvinceSum(data, "Gandaki");
        let province5Sum = CalculateProvinceSum(data, "Province 5");
        let karnaliSum = CalculateProvinceSum(data, "Karnali");
        let sudarpaschimSum = CalculateProvinceSum(data, "Sudarpaschim");

        setProvinceData({
          "Province 1": province1Sum,
          "Province 2": province2Sum,
          Bagmati: bagmatiSum,
          Gandaki: gandakiSum,
          "Province 5": province5Sum,
          Karnali: karnaliSum,
          Sudurpaschim: sudarpaschimSum,
        });
      });
    }
  }, [caseData.date]);
  const barData = {
    labels: ["Active Cases", "Recovered", "deaths"],
    datasets: [
      {
        label: "Total data",
        data: [ProvinceData.Bagmati, ProvinceData.Gandaki, 500],
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
    <BarChartWrapper>
      <Bar data={barData} options={options} />
    </BarChartWrapper>
  );
};

export default BarChart;
