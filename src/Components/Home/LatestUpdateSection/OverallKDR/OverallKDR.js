import React from "react";
import Card from "../../Card/Card";
import DeathIcon from "../../death.png";
import RecoveredIcon from "../../recovered.png";
import NewCasesIcon from "../../newCases.png";
import { OverallKDRWrapper } from "../../Home.styles";
const OverallKDR = ({ caseData }) => {
  return (
    <OverallKDRWrapper>
      <div className="title">
        <div className="main-title">Last 24 hours update</div>
        <div className="secondary-title">Updated at : {caseData.date}</div>
      </div>
      <div className="kdr-data-section">
        <div className="kdr-data">
          <Card
            type="newCases"
            icon={NewCasesIcon}
            name="New Cases"
            data={caseData.today_newcase}
          />
          <Card
            type="death"
            justify="center"
            icon={DeathIcon}
            name="Deaths"
            data={caseData.today_death}
          />
          <Card
            type="recovered"
            justify="end"
            icon={RecoveredIcon}
            name="Recovered"
            data={caseData.today_recovered}
          />
        </div>
      </div>
    </OverallKDRWrapper>
  );
};

export default OverallKDR;
