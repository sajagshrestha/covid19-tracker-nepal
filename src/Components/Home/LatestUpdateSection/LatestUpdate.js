import React,{useState,useEffect} from "react";
import {LatestUpdateWrapper} from '../Home.styles';
import OverallKDR from './OverallKDR/OverallKDR';
import DistrictKDR from './DistrictKDR/DistrictKDR';
import axios from 'axios';
const LatestUpdate = ({caseData}) => {
    const [data,setData] = useState([]);
    useEffect(()=>{
        if(caseData.date){
            const api = `https://portal.edcd.gov.np/rest/api/fetch?filter=casesOfDay&type=dayByDay&eDate=${caseData.date}&disease=COVID-19`;
            axios.get(api)
            .then(res=>{
                setData(res.data);
            });
        }
    },[caseData.date]);
    return (
        <LatestUpdateWrapper>
           <OverallKDR caseData = {caseData}/>
           <DistrictKDR data={data}/>
        </LatestUpdateWrapper>
    
    );
};
export default LatestUpdate;
