import styled from 'styled-components'
export const LatestUpdateWrapper = styled.div`
    margin-top:50px;
    width :100%;
    border-radius:20px;
    height :280px;
    border :dashed #424242 2px;
`;

export const OverallKDR =styled.div`
    height:100%;
    width:50%;
    border: 2px;
    border-style: none dashed none none;
    border-color:#424242;
    display:flex;
    flex-direction:column;
  
    

    .title{
        width:90%;
        margin: 0 auto;
        height:30%;
        display:flex;
        align-items:center;
        justify-content:space-between;
        color:${props=>props.theme.text};
        .latest-update{
            font-size:1.5rem;
            
           
        }
        margin-bottom:1%;
       
    }
    .kdr-data-section{
        height:55%;
        .kdr-data{
            width:100%;
            display:felx;
            justify-content:space-between;
            
            align-items:center;
        }
    }
   

`;