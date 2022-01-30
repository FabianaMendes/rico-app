import React from 'react';
import { SafeAreaView } from 'react-native';

import {
  Container,
  ArrowLeft,
  Circle,
  CircleText,
  MainText,
  Title,
  Subtitle,
} from './styles';

const HeaderContainer: React.FC = () => {
  return (
    <SafeAreaView>
      <Container>
        <ArrowLeft name="angle-left" size={30} />
        <Circle>
          <CircleText>FM</CircleText>
        </Circle>
        <MainText>
          <Title>Olá, FABIANA!</Title>
          <Subtitle>Bom te receber de volta! :)</Subtitle>
        </MainText>
      </Container>
    </SafeAreaView>
  );
};

export default HeaderContainer;
