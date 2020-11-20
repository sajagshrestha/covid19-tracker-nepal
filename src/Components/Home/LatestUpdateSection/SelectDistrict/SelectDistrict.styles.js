import styled from "styled-components";
import ReactSelect from "react-select";

export const CustomSelect = styled(ReactSelect)`
  .Select__control {
    background-color: ${(props) => props.theme.selectBackground};
    border: none;
    box-shadow: none;
    min-width: 250px;
  }
  .Select__input {
    color: ${(props) => props.theme.selectText};
  }
  .Select__single-value {
    color: ${(props) => props.theme.selectText};
  }
  .Select__indicator-separator {
    opacity: 0;
  }
  .Select__option {
    color: ${(props) => props.theme.selectText};
    border: none;
    background: ${(props) => props.theme.selectBackground};
    &:hover {
      background-color: ${(props) => props.theme.selectHover};
    }
  }
  .Select__menu {
    background-color: ${(props) => props.theme.selectBackground};
  }
  .Select__menu-list {
    height: 200px;

    &::-webkit-scrollbar {
      width: 10px;
    }
    &::-webkit-scrollbar-track {
      background: ${(props) => props.theme.selectBackground};
    }
    &::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme.selectHover};
    }
  }
`;
