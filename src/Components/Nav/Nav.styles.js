import styled from "styled-components";

export const NavContainer = styled.div`
  height: 5em;
  background-color: ${(props) => props.theme.background};
`;

export const NavWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  .web-logo {
    height: 100%;
    width: 8rem;
  }
`;

export const NavLinks = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .dark-mode {
    font-size: 1rem;
    text-decoration: none;
    margin-right: 15px;
    color: ${(props) => props.theme.text};
  }
`;
