import styled from 'styled-components'

export const CardBody = styled.div`
    height:90px;
    min-width:180px;
    border-radius:10px;
    display:flex;
    background-color:${(props)=>{
        var color = ''
       switch(props.type){
           case 'death':color = props.theme.death;
           break;
           case 'recovered':color = props.theme.recoverd;
           break;
           case 'newCases':color = props.theme.newCases;
           break;
           default:color = 'red';
       }
       return color;
    }}; 
    .logo{
        height:100%;
        width:10%;
        padding:10px 0 0 10px;
    }
    .data-section{
        width:100%;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        color:white;
        .data{
            font-size:2rem;
        }
    }
`;
