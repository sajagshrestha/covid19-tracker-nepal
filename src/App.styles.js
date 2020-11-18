import styled from "styled-components";

export const darkTheme = {
  background: "#1e2025",
  text: "white",
  death: "#ca3e47",
  recoverd: "#519872",
  newCases: "#3282b8",
  infected: "#DA8F54",
  totalCases: "#226b80",
  selectBackground: "#15171A",
  selectText: "#6A6B6F",
  selectHover: "#202327",
  border: "dashed #424242 2px",
};
export const lightTheme = {
  background: "white",
  text: "#1e2025",
  death: "#ca3e47",
  recoverd: "#519872",
  newCases: "#3282b8",
  infected: "#DA8F54",
  totalCases: "#226b80",
  selectBackground: "#ECECEC",
  selectText: "#6A6B6F",
  selectHover: "#202327",
  border: "dashed white 2px",
};
export const Main = styled.div`
  background-color: ${(props) => props.theme.background};
  min-width: 360px;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  overflow: auto;
`;

export const Wrapper = styled.div`
  width: 90%;
  margin: auto;
  height: 100%;
  display: ${(props) => (props.flexCenter ? "flex" : "")};
  align-items: center;
`;
