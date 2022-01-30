import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export const Container = styled.View`
  background: ${props => props.theme.background};
  padding: 2%;
`;

export const ArrowLeft = styled(Icon)`
  color: ${props => props.theme.orange};
  padding-bottom: 15%;
`;

export const Circle = styled.View`
  border: 1.5px solid ${props => props.theme.text};
  border-radius: 100px;
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CircleText = styled.Text`
  font-size: 16px;
  font-weight: 400;
  color: ${props => props.theme.text};
`;

export const MainText = styled.View`
  padding: 20px 0;
`;

export const Title = styled.Text`
  font-size: 28px;
  color: ${props => props.theme.text};
  font-weight: 700;
`;

export const Subtitle = styled.Text`
  font-size: 26px;
  color: ${props => props.theme.text};
  font-weight: 300;
`;
