import styled from 'styled-components'
export const LatestUpdateWrapper = styled.div`
    margin-top:50px;
    width :100%;
    border-radius:20px;
    height :280px;
    border :${props=>props.theme.border};
    display :grid;
    grid-template-columns: 1fr 1fr;
    @media screen and (max-width: 1120px){
        grid-template-columns: 1fr;
        grid-template-rows:1fr 1fr;
        height:560px;
    }
    @media screen and (max-width: 720px){
        min-height:1200px;
        margin-top:20px;
    }
`;

export const OverallKDRWrapper =styled.div`
    height:100%;
    border :${props=>props.theme.border};
    border-style: none dashed none none;
    display:grid;
    grid-template-rows:1fr 3fr;
    grid-row-gap:60px;
    .title{
        margin:0 30px;
        display:grid;
        grid-template-columns:5fr 4fr;
        
        align-items:center;
        color:${props=>props.theme.text};
        .main-title{
            font-size:1.2rem;
            font-weight:bold;
        }
        .secondary-title{
            justify-self:end;
        }
    }
    .kdr-data-section{
        align-self:start;
        margin:0 30px;
        .kdr-data{
            width:100%;
            display:grid;
            grid-template-columns:1fr 1fr 1fr;
            grid-column-gap:30px;
            
        }
    }
    @media screen and (max-width: 1120px){
        border-style:none;

    }
    @media screen and (max-width: 720px){
        grid-row-gap:0;
        grid-template-rows:2fr 9fr;
        .title{
            align-self:end;
            grid-template-columns:1fr;
            grid-template-rows:1fr 1fr;
            grid-row-gap:10px;
            justify-items:center;
            .secondary-title{
                font-size:1rem;
                justify-self:center;
            }
        }
        .kdr-data-section{
            align-self:center;
            .kdr-data{
                grid-template-columns: 1fr;
                grid-template-rows:1fr 1fr 1fr;
                justify-items:center;
                grid-row-gap:30px;
            }
        }
    }
`;
export const DistrictKDRWrapper = styled(OverallKDRWrapper)`
    border:none;
    .kdr-data-section-single{
        display: grid;
        grid-template-columns: 1fr;
        align-items:start;
        justify-items:center;
    }
    @media screen and (max-width:720px){
        .kdr-data-section-single{
            align-items:center;
        }
       
    }
`;
export const TotalDataSectionWrapper = styled(LatestUpdateWrapper)`
    display:grid;
    grid-template-columns:2fr 1fr;
    margin-top:50px;
    border:none;
    @media screen and (max-width: 1120px){
        grid-template-columns: 1fr;
        grid-template-rows:1fr 1fr;
        height:560px;
    }
    @media screen and (max-width: 720px){
        min-height:1200px;
        margin-top:20px;
    }
`;

export const TotalDataWrapper = styled(OverallKDRWrapper)`
    border :${props=>props.theme.border};
    border-radius:20px;
    .kdr-data-section .kdr-data{
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    @media screen and (max-width: 720px){
        height:760px;
        grid-template-rows: 2fr 8fr;
        
        .title{
            grid-template-rows:1fr;
            align-self:center;
        }
        .kdr-data-section{
            align-self:start;
            .kdr-data{
                grid-template-columns:1fr;
                grid-template-rows: 1fr 1fr 1fr 1fr;
            }
        }
    }
`;