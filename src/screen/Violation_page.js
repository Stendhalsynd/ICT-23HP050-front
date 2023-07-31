import React, { useState, useEffect } from "react";
import Header from "../component/header/Header";
import styled from "styled-components";
import Container from "../component/container/Container";
import Menu from "../component/menu/Menu";
import Button from "../component/button/Button";
import colors from "../config/Colors";
import { Select } from "antd";
import { Pie, measureTextWidth, Column } from "@ant-design/plots";

const onChange = (value) => {
  console.log(`selected ${value}`);
};
const onSearch = (value) => {
  console.log("search:", value);
};

const ViolationPage = ({ form, children }) => {
  return (
    <StyledCoverContainer>
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
          <div style={{ width: "40%" }}>
            <Select
              showSearch
              placeholder="울산본항"
              optionFilterProp="children"
              onChange={onChange}
              onSearch={onSearch}
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
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
              style={{ width: "100%" }}
            />
          </div>
          <div
            style={{
              padding: "3%",
              width: "95%",
              height: "95%",
              boxSizing: "border-box",
              position: "relative",
            }}
          >
            <DemoPie />
          </div>
        </StyledContainer>
        <StyledContainer>
          <div style={{ width: "40%" }}>
            <Select
              showSearch
              placeholder="1부두"
              optionFilterProp="children"
              onChange={onChange}
              onSearch={onSearch}
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              options={[
                {
                  value: "1부두",
                  label: "1부두",
                },
                {
                  value: "2부두",
                  label: "2부두",
                },
                {
                  value: "3부두",
                  label: "3부두",
                },
                {
                  value: "4부두",
                  label: "4부두",
                },
              ]}
              style={{ width: "100%" }}
            />
          </div>
          <div
            style={{
              padding: "3%",
              width: "95%",
              height: "95%",
              boxSizing: "border-box",
              position: "relative",
            }}
          >
            <DemoColumn />
          </div>
        </StyledContainer>
      </div>
      <div
        style={{
          position: "absolute",
          right: "3vw",
          bottom: "3vh",
          width: "30vw",
        }}
      >
        <Button>AutomateX GPT</Button>
      </div>
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

const DemoPie = () => {
  function renderStatistic(containerWidth, text, style) {
    const { width: textWidth, height: textHeight } = measureTextWidth(
      text,
      style
    );
    const R = containerWidth / 2; // r^2 = (w / 2)^2 + (h - offsetY)^2

    let scale = 1;

    if (containerWidth < textWidth) {
      scale = Math.min(
        Math.sqrt(
          Math.abs(
            Math.pow(R, 2) /
              (Math.pow(textWidth / 2, 2) + Math.pow(textHeight, 2))
          )
        ),
        1
      );
    }

    const textStyleStr = `width:${containerWidth}px;`;
    return `<div style="${textStyleStr};font-size:${scale}em;line-height:${
      scale < 1 ? 1 : "inherit"
    };">${text}</div>`;
  }

  const data = [
    {
      type: "신흥사",
      value: 27,
    },
    {
      type: "고려항만",
      value: 25,
    },
    {
      type: "울산항만운영",
      value: 18,
    },
    {
      type: "한국보팔터미날",
      value: 15,
    },
    {
      type: "CJ대한통운",
      value: 10,
    },
    {
      type: "SK가스",
      value: 5,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "type",
    radius: 1,
    innerRadius: 0.64,
    meta: {
      value: {
        formatter: (v) => `${v} ¥`,
      },
    },
    label: {
      type: "inner",
      offset: "-50%",
      style: {
        textAlign: "center",
      },
      autoRotate: false,
      content: "{value}",
    },
    statistic: {
      title: {
        offsetY: -4,
        customHtml: (container, view, datum) => {
          const { width, height } = container.getBoundingClientRect();
          const d = Math.sqrt(Math.pow(width / 2, 2) + Math.pow(height / 2, 2));
          const text = datum ? datum.type : "총합";
          return renderStatistic(d, text, {
            fontSize: 28,
          });
        },
      },
      content: {
        offsetY: 4,
        style: {
          fontSize: "32px",
        },
        customHtml: (container, view, datum, data) => {
          const { width } = container.getBoundingClientRect();
          const text = datum
            ? ` ${datum.value}`
            : ` ${data.reduce((r, d) => r + d.value, 0)}`;
          return renderStatistic(width, text, {
            fontSize: 32,
          });
        },
      },
    },
    // 중앙 통계 텍스트 상호 작용 추가
    interactions: [
      {
        type: "element-selected",
      },
      {
        type: "element-active",
      },
      {
        type: "pie-statistic-active",
      },
    ],
  };
  return <Pie {...config} />;
};

const DemoColumn = () => {
  const data = [
    {
      type: "1월",
      value: 3,
    },
    {
      type: "2월",
      value: 6,
    },
    {
      type: "3월",
      value: 6,
    },
    {
      type: "4월",
      value: 5,
    },
    {
      type: "5월",
      value: 7,
    },
    {
      type: "6월",
      value: 6,
    },
    {
      type: "7월",
      value: 8,
    },
    {
      type: "8월",
      value: 0,
    },
  ];
  const paletteSemanticRed = "#F4664A";
  const brandColor = "#5B8FF9";
  const config = {
    data,
    xField: "type",
    yField: "value",
    seriesField: "",
    color: ({ type }) => {
      if (type === "7월" || type === "8월") {
        return paletteSemanticRed;
      }

      return brandColor;
    },
    label: {
      content: (originData) => {
        const val = parseFloat(originData.value);

        // if (val < 4) {
        //   return (val * 100).toFixed(1) + "%";
        // }
      },
      offset: 10,
    },
    legend: false,
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
  };
  return <Column {...config} />;
};

export default ViolationPage;
