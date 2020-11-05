import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from '../Card/Card.js';
import {Wrapper} from '../../App.styles'
import {LatestUpdateWrapper,OverallKDR} from './LatestUpdate.styles'
import DeathIcon from './death.png';
import RecoverdIcon from './recovered.png';
import NewCasesIcon from './newCases.png';

const api = "https://covid19.mohp.gov.np/covid/api/confirmedcases";

const LatestUpdate = () => {
    const [caseData, setCaseData] = useState({});

    useEffect(() => {
        axios
            .get(api)
            .then((res) =>
            {console.log(res.data.nepal); setCaseData(res.data.nepal)})
            .catch((err) => console.log(err));
    }, [caseData.date]);

    return (
        <LatestUpdateWrapper>
            <OverallKDR>
                <div className="title">
                   
                    <div className="latest-update">Latest Update</div>
                    <div className="updated-at">Updated at : {caseData.date}</div>
                </div>
                <div className="kdr-data-section">
                    <Wrapper flexCenter='flex'>
                        <div className="kdr-data">
                            <Card type='newCases' icon = {NewCasesIcon} name = 'New Cases' data={caseData.today_newcase}/>
                            <Card type='death'  justify="center" icon={DeathIcon} name = 'Deaths' data={caseData.today_death} />
                            <Card type='recovered' justify="end" icon={RecoverdIcon} name = 'Recovered' data={caseData.today_recovered}/>
                        </div>  
                    </Wrapper>   
                </div>
            </OverallKDR>
            <div></div>
        </LatestUpdateWrapper>
    
    );
};

export default LatestUpdate;
