import styled, {css} from 'styled-components/native';

interface ButtonContainerProps {
  type?: string;
}

export const Button = styled.TouchableOpacity<ButtonContainerProps>`
  background: ${props => props.theme.orange};
  margin: 5px 5px 40px;
  border-radius: 50px;
  opacity: 1;

  ${props =>
    props.type === 'disabled' &&
    css`
      opacity: 0.5;
    `}
`;

export const TextButton = styled.Text`
  text-align: center;
  padding: 20px;
  font-weight: 600;
  font-size: 16px;
  color: ${props => props.theme.text};
`;
