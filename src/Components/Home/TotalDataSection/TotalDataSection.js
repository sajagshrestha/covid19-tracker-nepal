import React from "react";
import { TotalDataSectionWrapper } from "../Home.styles";
import DoughnutChart from "./DoughnutChart";
import BarChart from "./BarChart";
import TotalData from "./TotalData";

const TotalDataSection = ({ caseData }) => {
  return (
    <TotalDataSectionWrapper>
      <TotalData caseData={caseData} />
      <DoughnutChart caseData={caseData} />
      <BarChart caseData={caseData} />
    </TotalDataSectionWrapper>
  );
};
export default TotalDataSection;
