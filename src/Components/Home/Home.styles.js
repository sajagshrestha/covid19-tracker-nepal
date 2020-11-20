import styled from "styled-components";
export const HomeWrapper = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  grid-row-gap: 50px;
`;
export const LatestUpdateWrapper = styled.div`
  width: 100%;
  border-radius: 20px;
  height: 300px;
  border: ${(props) => props.theme.border};
  background-color: ${(props) => props.theme.secondaryBackground};
  display: grid;
  grid-template-columns: 1fr 1fr;
  box-shadow: ${(props) => props.theme.boxShadow};
  @media screen and (max-width: 1120px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    height: 560px;
  }
  @media screen and (max-width: 720px) {
    min-height: 1270px;
  }
`;

export const OverallKDRWrapper = styled.div`
  border: ${(props) => props.theme.sideBorder};
  border-style: none dashed none none;
  display: grid;

  grid-template-rows: 2fr 3fr;
  grid-row-gap: 20px;
  .title {
    margin: 0 30px;
    display: grid;
    grid-template-columns: 5fr 4fr;
    align-self: center;
    align-items: center;
    color: ${(props) => props.theme.text};
    .main-title {
      font-size: 1.2rem;
    }
    .secondary-title {
      justify-self: end;
    }
  }
  .kdr-data-section {
    align-self: start;
    margin: 0 30px;
    .kdr-data {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-column-gap: 30px;
    }
  }
  @media screen and (max-width: 1120px) {
    border: ${(props) => props.theme.sideBorder};
    border-style: none none dashed none;
  }
  @media screen and (max-width: 720px) {
    grid-row-gap: 0;
    grid-template-rows: 2fr 9fr;
    .title {
      align-self: end;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
      grid-row-gap: 10px;
      justify-items: center;
      .secondary-title {
        font-size: 1rem;
        justify-self: center;
      }
    }
    .kdr-data-section {
      align-self: center;
      .kdr-data {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        justify-items: center;
        grid-row-gap: 30px;
      }
    }
  }
`;
export const DistrictKDRWrapper = styled(OverallKDRWrapper)`
  border: none;
  .kdr-data-section-single {
    display: grid;
    grid-template-columns: 1fr;
    align-items: start;
    justify-items: center;
  }
  @media screen and (max-width: 720px) {
    .kdr-data-section-single {
      align-items: center;
    }
  }
`;
export const TotalDataSectionWrapper = styled(LatestUpdateWrapper)`
  width: 100%;
  display: grid;
  height: 700px;
  grid-row-gap: 50px;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto auto;
  grid-template-areas:
    "totalData doughnutChart"
    "barChart barChart";
  grid-column-gap: 20px;
  border: none;
  background-color: ${(props) => props.theme.background};
  box-shadow: none;

  @media screen and (max-width: 1120px) {
    width: 100%;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      "totalData totalData"
      "doughnutChart barChart";
    height: 750px;
  }
  @media screen and (max-width: 720px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas: "totalData" "doughnutChart" "barChart";
    height: 1600px;
  }
`;

export const TotalDataWrapper = styled(OverallKDRWrapper)`
  width: 100%;
  height: 300px;
  border: ${(props) => props.theme.border};
  border-radius: 20px;
  grid-area: totalData;
  background-color: ${(props) => props.theme.secondaryBackground};
  box-shadow: ${(props) => props.theme.boxShadow};
  .kdr-data-section .kdr-data {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media screen and (max-width: 720px) {
    height: 760px;
    grid-template-rows: 2fr 8fr;

    .title {
      grid-template-rows: 1fr;
      align-self: center;
    }
    .kdr-data-section {
      align-self: start;
      .kdr-data {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr;
      }
    }
  }
`;
export const DoughnutChartWrapper = styled.div`
  height: 300px;
  display: grid;
  grid-template-rows: 1fr;
  align-items: center;
  justify-items: center;
  background-color: ${(props) => props.theme.secondaryBackground};
  box-shadow: ${(props) => props.theme.boxShadow};
  border: ${(props) => props.theme.border};
  border-radius: 20px;
  grid-area: doughnutChart;
  .title {
    display: none;
  }
  .chart {
    justify-self: center;
    width: 350px;
    height: 250px;
    margin: auto;
  }
  .chart-title {
    color: ${(props) => props.theme.text};
  }
  @media screen and (max-width: 1120px) {
    grid-template-rows: 1fr 5fr;
    .title {
      color: ${(props) => props.theme.text};
      font-size: 1.2rem;
      align-self: center;
      justify-self: center;
      display: block;
    }
    height: 350px;
    .chart {
      width: 300px;
    }
  }
  @media screen and (max-width: 800px) {
    .chart {
      width: 250px;
    }
  }
`;
export const BarChartWrapper = styled.div`
  border: ${(props) => props.theme.border};
  background-color: ${(props) => props.theme.secondaryBackground};
  box-shadow: ${(props) => props.theme.boxShadow};
  border-radius: 20px;
  height: 350px;
  display: grid;
  grid-template-rows: 1fr 5fr;
  grid-area: barChart;

  .title {
    color: ${(props) => props.theme.text};
    font-size: 1.2rem;
    align-self: center;
    justify-self: center;
  }
  .chart {
    justify-self: center;
    width: 800px;
    margin: 0 auto;
    @media screen and (max-width: 1120px) {
      width: 400px;
    }
    @media screen and (max-width: 720px) {
      width: 250px;
    }
  }
`;

export const Loader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
