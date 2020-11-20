import styled from "styled-components";

export const CardBody = styled.div`
  height: 90px;
  width: 100%;
  border-radius: 10px;
  display: flex;
  cursor: pointer;
  @media screen and (min-width: 720px) {
    justify-self: ${(props) => (props.justify ? props.justify : "")};
  }

  background-color: ${(props) => {
    var color = "";
    switch (props.type) {
      case "death":
        color = props.theme.death;
        break;
      case "recovered":
        color = props.theme.recoverd;
        break;
      case "newCases":
        color = props.theme.newCases;
        break;
      case "infected":
        color = props.theme.infected;
        break;
      case "totalCases":
        color = props.theme.totalCases;
        break;
      default:
        color = "red";
    }
    return color;
  }};
  .logo {
    height: 100%;
    width: 10%;
    padding: 10px 0 0 10px;
  }
  .data-section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    .data {
      font-size: 1.5rem;
    }
  }
  @media screen and (max-width: 720px) {
    height: 120px;
    width: 250px;
    .data-section {
      margin-right: 30px;
    }
  }
`;

export const DistrictCardWrapper = styled(CardBody)`
  width: ${(props) => (props.type === "singleDistrict" ? "27%" : "")};
  background-color: ${(props) => props.theme.districtCardBackground};
  color: ${(props) => props.theme.DistrictCardText};
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  justify-items: center;
  .district-name {
    align-self: end;
    font-size: 1.05rem;
  }
  .data {
    align-self: center;
    font-size: 1.5rem;
  }
  @media screen and (max-width: 720px) {
    height: 120px;
    width: 250px;
  }
`;
