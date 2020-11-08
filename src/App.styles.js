import styled from "styled-components";

export const darkTheme = {
    background: "#1e2025",
    text: "white",
    death:'#E13C3C',
    recoverd:'#1AB569',
    newCases:'#2D9CFC',
    selectBackground:"#15171A",
    selectText:"#6A6B6F",
    selectHover:'#202327',
};
export const lightTheme = {
    background: "white",
    text: "#1e2025",
    death:'#E13C3C',
    recoverd:'#1AB569',
    newCases:'#2D9CFC',
    selectBackground:"#ECECEC",
    selectText:"#6A6B6F",
    selectHover:'#202327',
};
export const Main = styled.div`
    background-color: ${(props) => props.theme.background};
   min-height:100vh;
  
    margin: 0;
    padding: 0;
`;


export const Wrapper = styled.div`
    width: 90%;
    margin: auto;
    height: 100%;
    display: ${(props) => (props.flexCenter ? "flex" : "")};
    align-items:center;
`;
