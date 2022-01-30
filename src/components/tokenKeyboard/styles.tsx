import styled from 'styled-components/native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';

export const Container = styled.View`
  flex: 1;
  background: ${props => props.theme.background};
  padding: 2%;
`;

export const TopInfo = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const InfoText = styled.Text`
  color: ${props => props.theme.gray};
  font-size: 14px;
  font-weight: 500;
`;

export const LinkText = styled.Text`
  color: ${props => props.theme.orange};
  font-size: 14px;
  font-weight: 500;
`;

export const InputContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;

export const LineRender = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 5px;
`;

export const Icon = styled(FontAwesomeIcon)`
  margin-right: 12px;
`;

export const Keyboard = styled.View`
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 43%;
  width: 100%;
  align-self: center;
`;

export const Key = styled.TouchableOpacity`
  width: 29%;
  height: 39%;
  margin: 2%;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.blue};
  border-radius: 5px;
`;

export const KeyText = styled.Text`
  color: ${props => props.theme.text};
  font-size: 16px;
`;

export const Backspace = styled(Ionicon)`
  color: ${props => props.theme.text};
`;

export const Footer = styled.View`
  width: 100%;
  background-color: ${props => props.theme.background};
  flex-direction: row;
  align-items: center;
  padding: 18px;
  border-top-width: 0.5px;
  border-style: solid;
  border-color: ${props => props.theme.gray};
`;

export const Left = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const KeyIcon = styled(FoundationIcon)`
  padding: 2px 5px;
  border: 1px solid #ffffff;
  border-radius: 5px;
  margin-right: 10px;
  color: ${props => props.theme.text};
`;

export const FooterText = styled.Text`
  font-size: 16px;
  color: ${props => props.theme.text};
`;

export const ArrowUpIcon = styled(SimpleLineIcon)`
  color: ${props => props.theme.text};
`;
