import styled from "styled-components";

export const FooterWrapper = styled.div`
  height: 3em;
  padding: 0 10px;
  width: 100%;

  color: ${(props) => props.theme.text};
  font-size: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  .source {
    justify-self: end;
  }
`;
