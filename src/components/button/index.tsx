import React from 'react';
import {Button, TextButton} from './styles';

export interface IButtonProps {
  text: string;
  type: 'active' | 'disabled';
  onPress?: () => void;
}

const ButtonContainer: React.FC<IButtonProps> = ({text, type, onPress}) => {
  return (
    <Button type={type} disabled={type === 'disabled'} onPress={onPress}>
      <TextButton>{text}</TextButton>
    </Button>
  );
};

export default ButtonContainer;