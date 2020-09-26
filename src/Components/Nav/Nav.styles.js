import styled from "styled-components";

export const NavContainer = styled.div`
    width: 100%;
    height: 4em;
    background-color: ${(props) => props.theme.background};

    display: flex;
    * {
        color: ${(props) => props.theme.text};
    }

    align-items: center;
    justify-content: space-around;

    .wrapper {
        width: 90%;
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        .navlinks {
            a {
                text-decoration: none;
                margin: 0 20px;
            }
        }
    }
`;
