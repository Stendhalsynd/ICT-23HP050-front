import React from "react";
import Button from "../component/button/Button";
import Header from "../component/header/Header";
import Section from "../component/section/Section";
import Area from "../component/area/Area";
import styled from "styled-components";
import Typography from "../component/typography/Typography";
import colors from "../config/Colors";

const MainPage = ({ form, children }) => {
  return (
    <Container>
      <Header main paddingTop="97px" />
      {/* <Button input text="인증코드 발송" /> */}
      <Section left>
        <Area>
          <img
            src={"/img/warning_amber.png"}
            style={{ width: "50px", height: "50px" }}
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
        <Area>
          <img
            src={"/img/fact_check.png"}
            style={{ width: "50px", height: "50px" }}
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

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: transparent;
`;

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

export default MainPage;
