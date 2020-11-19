import React, { useState, useEffect } from "react";
import { HomeWrapper } from "./Home.styles";
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
      <HomeWrapper>
        <LatestUpdate caseData={caseData} />
        <TotalDataSection caseData={caseData} />
      </HomeWrapper>
    </Wrapper>
  );
};
export default Home;
