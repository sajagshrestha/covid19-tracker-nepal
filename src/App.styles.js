import styled from "styled-components";

export const darkTheme = {
    background: "#1e2025",
    text: "white",
};
export const lightTheme = {
    background: "white",
    text: "#1e2025",
};
export const Main = styled.div`
    background-color: ${(props) => props.theme.background};

    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
`;
