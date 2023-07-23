import React from "react";
import Header from "../component/header/Header";
import Button from "../component/button/Button";
import Typography from "../component/typography/Typography";
import styled, {css} from "styled-components";
import colors from "../config/Colors"
import { Link } from "react-router-dom";

const defaultPage = ({ form, children }) => {
  return (
    <Container>
      <Header paddingTop="228px"/>
      <Link to={"/CreateAccountPage"} style={{ textDecoration: "none" }}>
          <CustomButton width="288px" height="54px" style={{ marginTop: "5%", marginLeft: "40%" }}>
            <RadioBtn/><Typography marginTop="5px" marginLeft="5px" fontSize="15px">START</Typography>
          </CustomButton>
      </Link>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: transparent;
  background: ${colors.bg_default}
`;

const RadioBtn = styled.div`
  width: 15px;
  height: 15px;
  align-items: center;
  box-sizing: border-box;
  left: 110px;
  right: 12.5%;
  top: 20px;
  bottom: 12.5%;
  border-radius: 16px;
  margin-right: 5px;
  margin-top: 6%;
  border: 3px solid #ffffff;
`;

const CustomButton = styled(Button)`

`;


export default defaultPage;
