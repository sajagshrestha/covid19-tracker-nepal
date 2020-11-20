import React from "react";
import { FooterWrapper, FooterContainer } from "./Footer.styles";
import { Wrapper } from "../../App.styles";
import Github from "./github.png";
import Gmail from "./gmail.png";
const Footer = () => {
  return (
    <FooterContainer>
      <Wrapper flexCenter={true}>
        <FooterWrapper>
          <div className="contact">
            <a href="https://github.com/sajagshrestha/covid19-tracker-nepal.git">
              <img src={Github} height="30" width="30" alt="github" />
            </a>
            <a href="mailto:sajagshrestha0852@gmail.com">
              <img src={Gmail} height="20" width="25" alt="gmail" />
            </a>
          </div>
          <div className="source">
            <a href="https://portal.edcd.gov.np">Data Source EDCD</a>
          </div>
        </FooterWrapper>
      </Wrapper>
    </FooterContainer>
  );
};
export default Footer;
