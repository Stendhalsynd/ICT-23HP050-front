import React, { useState, useEffect } from "react";
import qs from "qs";
import { DatePicker, Space, Select, Table } from "antd";
import styled from "styled-components";

import { Button, Container, Header, Menu } from "../component";

import colors from "../config/Colors";

const { RangePicker } = DatePicker;

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    sorter: true,
    render: (name) => `${name.first} ${name.last}`,
    width: "20%",
  },
  {
    title: "Gender",
    dataIndex: "gender",
    filters: [
      {
        text: "Male",
        value: "male",
      },
      {
        text: "Female",
        value: "female",
      },
    ],
    width: "20%",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
];
const getRandomuserParams = (params) => ({
  results: params.pagination?.pageSize,
  page: params.pagination?.current,
  ...params,
});

const PortPage = () => {
  /** DatePicker */
  const [startDate, setStartDate] = useState("");
  const [deadline, setDeadline] = useState("");

  /** Table aJax */
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });

  /**Modal 관련 
  const [modalOpen, setModalOpen] = useState(false);
  const modalBackground = useRef;*/

  const handleDateChange = (_, dateStrings) => {
    const [start, end] = dateStrings;
    setStartDate(start);
    setDeadline(end);
  };

  /** Select */
  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };

  const fetchData = () => {
    setLoading(true);
    fetch(
      `https://randomuser.me/api?${qs.stringify(
        getRandomuserParams(tableParams)
      )}`
    )
      .then((res) => res.json())
      .then(({ results }) => {
        setData(results);
        setLoading(false);
        setTableParams({
          ...tableParams,
          pagination: {
            ...tableParams.pagination,
            total: 200,
            // 200 is mock data, you should read it from server
            // total: data.totalCount,
          },
        });
      });
  };

  useEffect(() => {
    fetchData();
  }, [JSON.stringify(tableParams)]);
  const handleTableChange = (pagination, filters, sorter) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    });

    // `dataSource` is useless since `pageSize` changed
    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setData([]);
    }
  };

  return (
    <StyledCoverContainer>
      <StyledHeader />
      <Menu />
      <Container style={{ padding: "3vw" }}>
        <Space direction="vertical">
          <Space size={"middle"}>
            <Select
              showSearch
              placeholder="운영사 선택"
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
                  value: "신흥사",
                  label: "신흥사",
                },
                {
                  value: "고려항만",
                  label: "고려항만",
                },
                {
                  value: "울산항만운영",
                  label: "울산항만운영",
                },
                {
                  value: "한국보팔터미날",
                  label: "한국보팔터미날",
                },
              ]}
            />
            <Select
              showSearch
              placeholder="항만 선택"
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
            />
            <Select
              showSearch
              placeholder="부두 선택"
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
            />
            <RangePicker />
          </Space>
          <Table
            columns={columns}
            rowKey={(record) => record.login.uuid}
            dataSource={data}
            pagination={{ ...tableParams.pagination, pageSize: 5 }}
            loading={loading}
            onChange={handleTableChange}
          />
        </Space>
      </Container>
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

export default PortPage;

const StyledCoverContainer = styled(Container)`
  position: relative;
  display: flex;
  height: 100vh;
  background: ${(props) => props.background || colors.bg_default};
`;

const StyledHeader = styled(Header)`
  padding-top: 12vh;
  font: normal 400 8vw var(--font-Aldrich);
`;
