import React from "react";
import { TotalDataWrapper } from "../Home.styles";
import Card from "../Card/Card";
import DeathIcon from "../death.png";
import RecoveredIcon from "../recovered.png";
import NewCasesIcon from "../newCases.png";
import Infected from "../infected.png";
const TotalData = ({ caseData }) => {
  return (
    <TotalDataWrapper>
      <div className="title">
        <div className="main-title">Total data</div>
        <div className="secondary-title">
          From : 2020-01-23 to {caseData.date}
        </div>
      </div>
      <div className="kdr-data-section">
        <div className="kdr-data">
          <Card
            type="totalCases"
            name="Total Cases"
            icon={NewCasesIcon}
            data={caseData.positive}
          />
          <Card
            type="infected"
            name="Infected"
            icon={Infected}
            data={caseData.extra2}
          />
          <Card
            type="death"
            name="Deaths"
            icon={DeathIcon}
            data={caseData.deaths}
          />
          <Card
            type="recovered"
            name="Recovered"
            icon={RecoveredIcon}
            data={caseData.extra1}
          />
        </div>
      </div>
      <div></div>
    </TotalDataWrapper>
  );
};
export default TotalData;
