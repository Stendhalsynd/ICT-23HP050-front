import React from "react";

// import Header from "../component/header/Header";
// import Section from "../component/section/Section";
// import Area from "../component/area/Area";
// import Typography from "../component/typography/Typography";
// import Container from "../component/container/Container";
// import Menu from "../component/menu/Menu";

import {
  Area,
  Container,
  Header,
  Menu,
  Section,
  Typography,
} from "../component";

import styled from "styled-components";
import colors from "../config/Colors";
import { Link } from "react-router-dom";

const MainPage = ({ form, children }) => {
  return (
    <Container background="transparent">
      <StyledHeader main />
      <Menu right />
      <Section left>
        <Link
          to="/violationPage"
          style={{
            width: "50vw",
            height: "42vh",
            left: "8vw",
            top: "-6vh",
            display: "flex",

            position: "relative",
            textDecoration: "none",
          }}
        >
          <Area height="100%">
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
        </Link>
      </Section>
      <Section right>
        <Link
          to="/portPage"
          style={{
            width: "50vw",
            height: "42vh",
            left: "8vw",
            top: "-6vh",
            display: "flex",

            position: "relative",
            textDecoration: "none",
          }}
        >
          <Area height="100%">
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
        </Link>
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
  font: normal 400 7vw var(--font-Aldrich);
`;

export default MainPage;
