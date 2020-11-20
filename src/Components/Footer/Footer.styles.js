import styled from "styled-components";

export const FooterContainer = styled.div`
  height: 3em;
  background-color: ${(props) => props.theme.secondaryBackground};
  box-shadow: ${(props) => props.theme.boxShadow};
`;
export const FooterWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .contact {
    width: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .source {
    a {
      color: ${(props) => props.theme.text};
      text-decoration: none;
    }
  }
`;
