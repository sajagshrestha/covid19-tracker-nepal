import styled from 'styled-components'

export const CardBody = styled.div`
    height:90px;
    width:90%;
    border-radius:10px;
    display:flex;
    @media screen and (min-width:720px){
        justify-self:${props=>props.justify ? props.justify: ""};
    }
   
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
    @media screen and (max-width:720px){
        height:120px;
        width:250px;
        .data-section{
            margin-right:30px;
        }
    }
`;
