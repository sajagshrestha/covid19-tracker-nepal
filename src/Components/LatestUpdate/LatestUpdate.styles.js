import styled from 'styled-components'
export const LatestUpdateWrapper = styled.div`
    margin-top:50px;
    width :100%;
    border-radius:20px;
    height :280px;
    border :dashed #424242 2px;
    display :grid;
    grid-template-columns: 1fr 1fr;
    @media screen and (max-width: 1120px){
        grid-template-columns: 1fr;
        grid-template-rows:1fr 1fr;
        height:560px;
    }
    @media screen and (max-width: 720px){
        height:1200px;
        margin-top:20px;
    }
`;

export const OverallKDR =styled.div`
    height:100%;
    border: 2px;
    border-style: none dashed none none;
    border-color:#424242;
    display:grid;
    grid-template-rows:1fr 3fr;
    grid-row-gap:60px;
    .title{
        width:90%;
        margin: 0 auto;
        display:grid;
        grid-template-columns:5fr 3fr;
        align-items:center;
        color:${props=>props.theme.text};
        .latest-update{
            font-size:1.5rem;
        }
        .updated-at{
            justify-self:end;
        }
    }
    .kdr-data-section{
        align-self:start;
        .kdr-data{
            width:100%;
            display:grid;
            grid-template-columns:1fr 1fr 1fr;
            justify-items:stretch;
            align-items:center;
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
            .updated-at{
                font-size:1.5rem;
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