import React, { useState, useEffect } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import { BarChartWrapper, Loader } from "../Home.styles";
import ReactLoading from "react-loading";
const BarChart = ({ caseData }) => {
  const [isLoading, setLoading] = useState(true);
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
      axios
        .get(api)
        .then((res) => {
          const data = res.data;
          let province1Sum = 0;
          let province2Sum = 0;
          let bagmatiSum = 0;
          let gandakiSum = 0;
          let province5Sum = 0;
          let karnaliSum = 0;
          let sudarpaschimSum = 0;
          data.forEach((e) => {
            if (e.Province === "Province 1") {
              province1Sum += parseInt(e.Value, 10);
            }
            if (e.Province === "Province 2") {
              province2Sum += parseInt(e.Value, 10);
            }
            if (e.Province === "Bagmati") {
              bagmatiSum += parseInt(e.Value, 10);
            }
            if (e.Province === "Gandaki") {
              gandakiSum += parseInt(e.Value, 10);
            }
            if (e.Province === "Province 5") {
              province5Sum += parseInt(e.Value, 10);
            }

            if (e.Province === "Karnali") {
              karnaliSum += parseInt(e.Value, 10);
            }
            if (e.Province === "Sudurpaschim") {
              sudarpaschimSum += parseInt(e.Value, 10);
            }
          });
          setProvinceData({
            "Province 1": province1Sum,
            "Province 2": province2Sum,
            Bagmati: bagmatiSum,
            Gandaki: gandakiSum,
            "Province 5": province5Sum,
            Karnali: karnaliSum,
            Sudurpaschim: sudarpaschimSum,
          });
          setLoading(false);
        })
        .catch((error) => console.log(error));
    }
  }, [caseData.date]);
  const barData = {
    labels: [
      "Province 1",
      "Province 2",
      "Bagmati",
      "Gandaki",
      "Province 5",
      "Karnali",
      "Sudarpaschim",
    ],
    datasets: [
      {
        label: "Total Cases",
        data: [
          ProvinceData["Province 1"],
          ProvinceData["Province 2"],
          ProvinceData.Bagmati,
          ProvinceData.Gandaki,
          ProvinceData["Province 5"],
          ProvinceData.Gandaki,
          ProvinceData.Sudurpaschim,
        ],
        backgroundColor: "#226b80",
      },
    ],
  };

  return (
    <BarChartWrapper>
      <div className="title">Total Cases By Province</div>
      <div className="chart">
        {isLoading ? (
          <Loader>
            <ReactLoading
              type={"bars"}
              color={"#FE4F60"}
              height={"100px"}
              width={"100px"}
            />
          </Loader>
        ) : (
          <Bar
            data={barData}
            options={{
              maintainAspectRatio: false,
              legend: {
                position: "bottom",
              },
            }}
          />
        )}
      </div>
    </BarChartWrapper>
  );
};

export default BarChart;
