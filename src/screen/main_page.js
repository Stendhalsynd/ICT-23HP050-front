import React from "react";
import Header from "../component/header/Header";
import Section from "../component/section/Section";
import Area from "../component/area/Area";
import styled from "styled-components";
import Typography from "../component/typography/Typography";
import Container from "../component/container/Container";
import colors from "../config/Colors";

const MainPage = ({ form, children }) => {
  return (
    <Container background="transparent">
      <StyledHeader main />
      <Section left>
        <Area height="43%">
          <img
            src={"/img/warning_amber.png"}
            style={{ width: "50px", height: "50px" }}
            alt="위반사항 이미지"
          ></img>
          <Typography marginTop="39px">
            위반사항
            <br />
            확인하기
          </Typography>
          <Circle>
            <Typography fontSize="16px" lineHeight="20px">
              3
            </Typography>
          </Circle>
        </Area>
      </Section>
      <Section right>
        <Area height="43%">
          <img
            src={"/img/fact_check.png"}
            style={{ width: "50px", height: "50px" }}
            alt="특이사항 이미지"
          ></img>
          <Typography marginTop="39px">
            부두별 특이사항
            <br />
            확인하기
          </Typography>
        </Area>
      </Section>
    </Container>
  );
};

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -33px;
  right: -33px;
  width: 50px;
  height: 50px;
  border: 5px solid ${colors.white};
  background-color: ${colors.orange};
  border-radius: 50px;
`;

const StyledHeader = styled(Header)`
  padding-top: 50px;
  font: normal 400 80px var(--font-Aldrich);
`;

export default MainPage;
