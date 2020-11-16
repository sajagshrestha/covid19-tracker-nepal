import React, { useState, useEffect } from "react";
import { TotalDataSectionWrapper } from "../Home.styles";
import TotalData from "./TotalData";
const findPercent = (total, current) => {
  return;
};
const TotalDataSection = ({ caseData }) => {
  const [caseDataPercentage, setCaseDataPercentage] = useState({
    active: "0%",
    recovered: "0%",
    deaths: "0%",
  });
  useEffect(() => {
    console.log(((170632 / 208299) * 100).toFixed(2));
  }, []);
  return (
    <TotalDataSectionWrapper>
      <TotalData caseData={caseData} />
      <div>Doughnut chart</div>
    </TotalDataSectionWrapper>
  );
};
export default TotalDataSection;
