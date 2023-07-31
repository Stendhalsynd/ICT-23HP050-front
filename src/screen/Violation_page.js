import React from "react";
import Header from "../component/header/Header";
import Section from "../component/section/Section";
import Area from "../component/area/Area";
import styled from "styled-components";
import Typography from "../component/typography/Typography";
import Container from "../component/container/Container";
import colors from "../config/Colors";
import Menu from "../component/menu/Menu";
import { Select } from "antd";

const onChange = (value) => {
  console.log(`selected ${value}`);
};
const onSearch = (value) => {
  console.log("search:", value);
};

const ViolationPage = ({ form, children }) => {
  return (
    <StyledCoverContainer background="lightgray">
      <StyledHeader />
      <Menu />
      <div
        style={{
          display: "flex",
          height: "55vh",
          position: "absolute",
          top: "34%",
        }}
      >
        <StyledContainer>
          <Select
            showSearch
            placeholder="울산본항"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={[
              {
                value: "울산본항",
                label: "울산본항",
              },
              {
                value: "울산신항",
                label: "울산신항",
              },
              {
                value: "미포항",
                label: "미포항",
              },
              {
                value: "온산항",
                label: "온산항",
              },
            ]}
          />
        </StyledContainer>
        <StyledContainer>
          <Select
            showSearch
            placeholder="울산본항"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={[
              {
                value: "울산본항",
                label: "울산본항",
              },
              {
                value: "울산신항",
                label: "울산신항",
              },
              {
                value: "미포항",
                label: "미포항",
              },
              {
                value: "온산항",
                label: "온산항",
              },
            ]}
          />
        </StyledContainer>
      </div>
      {/* <Section left>
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
      </Section> */}
    </StyledCoverContainer>
  );
};

const StyledCoverContainer = styled(Container)`
  position: relative;
  display: flex;
  height: 100vh;
  background: ${(props) => props.background || colors.bg_default};
`;

const StyledContainer = styled(Container)`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 47vw;
  background: ${(props) => props.background || colors.white};
  box-sizing: border-box;
  margin-left: 2vw;
`;

const StyledHeader = styled(Header)`
  padding-top: 12vh;
  font: normal 400 8vw var(--font-Aldrich);
`;

export default ViolationPage;
