import React from "react";
import { FooterWrapper } from "./Footer.styles";
import { Wrapper } from "../../App.styles";
const Footer = () => {
  return (
    <Wrapper flexCenter={true}>
      <FooterWrapper>
        <div className="github">Github</div>
        <div className="source">Data Source EDCD</div>
      </FooterWrapper>
    </Wrapper>
  );
};
export default Footer;
