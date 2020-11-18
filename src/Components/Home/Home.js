import React, { useState, useEffect } from "react";
import { Wrapper } from "../../App.styles";
import LatestUpdate from "./LatestUpdateSection/LatestUpdate";
import TotalDataSection from "./TotalDataSection/TotalDataSection";
import axios from "axios";
const api = "https://covid19.mohp.gov.np/covid/api/confirmedcases";
const Home = () => {
  const [caseData, setCaseData] = useState({});
  useEffect(() => {
    axios
      .get(api)
      .then((res) => {
        setCaseData(res.data.nepal);
      })
      .catch((err) => console.log(err));
  }, [caseData.Date]);
  return (
    <Wrapper>
      <LatestUpdate caseData={caseData} />
      <TotalDataSection caseData={caseData} />
    </Wrapper>
  );
};
export default Home;
