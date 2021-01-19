import styled from "styled-components";

export const darkTheme = {
	background: "#1e2025",
	secondaryBackground: "#none",
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
	sideBorder: "#424242 2px",
	boxShadow: "none",
	DistrictCardText: "white",
	districtCardBackground: "#26292e",
};
export const lightTheme = {
	background: "#F6F9FA",
	secondaryBackground: "white",
	text: "#1e2025",
	death: "#ca3e47",
	recoverd: "#519872",
	newCases: "#3282b8",
	infected: "#DA8F54",
	totalCases: "#226b80",
	selectBackground: "#ECECEC",
	selectText: "#6A6B6F",
	selectHover: "#E1E0E0",
	border: "white 2px",
	sideBorder: "#ECECEC 2px",
	DistrictCardText: "#6A6B6F",
	districtCardBackground: "#ECECEC",
	boxShadow: "0px 0px 27px -21px rgba(166,164,166,1)",
};
export const Main = styled.div`
	background-color: ${(props) => props.theme.background};
	display: grid;
	grid-template-rows: auto auto auto;
	grid-row-gap: 50px;
	height: 100vh;
	overflow: auto;
	@media screen and (max-width: 720px) {
		grid-row-gap: 20px;
	}
`;

export const Wrapper = styled.div`
	width: 90%;
	max-width: 1440px;
	margin: auto;
	height: 100%;
	display: ${(props) => (props.flexCenter ? "flex" : "")};
	align-items: center;
`;
