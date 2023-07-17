import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../component/button/Button';
import Header from '../component/header/Header';
import Section from '../component/section/Section';
import Area from '../component/area/Area';
import colors from '../config/Colors';
import styled from 'styled-components'
const MainPage = ({form, children}) => {
  return (
    <Container>
      <Header main paddingTop="97px"/>
      <Button input text="인증코드 발송"/>
      <Section left>
        <Area/>
      </Section>
      <Section right>
        <Area/>
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
`

export default MainPage; 