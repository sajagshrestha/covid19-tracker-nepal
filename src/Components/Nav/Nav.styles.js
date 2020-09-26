import styled from "styled-components";

export const NavContainer = styled.div`
    width: 100%;
    height: 4em;
    background-color: #fff;
    display: flex;

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
                color: black;
                text-decoration: none;
                margin: 0 20px;
            }
        }
    }
`;
