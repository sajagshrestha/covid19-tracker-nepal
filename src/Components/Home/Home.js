import React from "react";
import { Wrapper, MainWrapper } from "../../App.styles";
import LatestUpdate from "../LatestUpdate/LatestUpdate";
const Home = () => {
    return (
        <MainWrapper>
            <Wrapper>
                <LatestUpdate />
            </Wrapper>
        </MainWrapper>
    );
};
export default Home;
