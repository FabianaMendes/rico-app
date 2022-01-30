import styled from 'styled-components/native';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';

export const TokenScreen = styled.View`
  background-color: ${props => props.theme.purple};
  flex: 1;
  align-items: center;
`;

export const Header = styled.View`
  background-color: ${props => props.theme.background};
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  padding: 10px 15px;
`;

export const Title = styled.Text`
  font-weight: 800;
  font-size: 18px;
  text-align: center;
  width: 90%;
  color: ${props => props.theme.text};
`;

export const ArrowDownIcon = styled(SimpleLineIcon)`
  color: ${props => props.theme.text};
`;

export const TokenRenderer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Token = styled.Text`
  font-size: 55px;
  font-weight: 800;
  color: ${props => props.theme.text};
`;


