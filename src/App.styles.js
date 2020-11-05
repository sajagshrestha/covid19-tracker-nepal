import styled from "styled-components";

export const darkTheme = {
    background: "#1e2025",
    text: "white",
    death:'#EB3B3B',
    recoverd:'#1AB569',
    newCases:'#2D9CFC',
};
export const lightTheme = {
    background: "white",
    text: "#1e2025",
    death:'#EB3B3B',
    recoverd:'#1AB569',
    newCases:'#2D9CFC',
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
