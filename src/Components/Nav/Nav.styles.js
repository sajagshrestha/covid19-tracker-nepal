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
    .web-logo{
        height:100%;
        width:8rem
    }
`;

export const NavLinks = styled.div`
    width: 25%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
        font-size: 1.2rem;
        text-decoration: none;
        color: ${(props) => props.theme.text};
    }
`;
