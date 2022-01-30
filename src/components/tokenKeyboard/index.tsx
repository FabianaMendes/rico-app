/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useMemo, useState} from 'react';
import {View, TouchableOpacity, SafeAreaView} from 'react-native';
import Button from '../button';
import DonutChart from '../donutChart';
import TokenGenerator from '../tokenGenerator';

import {
  Container,
  TopInfo,
  InfoText,
  LinkText,
  LineRender,
  Keyboard,
  Key,
  KeyText,
  Backspace,
  Icon,
  InputContainer,
  Footer,
  Left,
  KeyIcon,
  FooterText,
  ArrowUpIcon,
} from './styles';

interface Props {
  length: number;
}

const TokenKeyboard: React.FC<Props> = ({length}) => {
  const [password, setPassword] = useState([]);
  const [seconds, setSeconds] = useState(60);
  const [showTokenModal, setShowTokenModal] = useState(false);

  const buttonColor = password.length >= 6 ? 'active' : 'disabled';

  function timer() {
    if (seconds === 60 || seconds === 0) {
      setSeconds(60);
      const interval = setInterval(() => {
        setSeconds(prevState => {
          if (prevState === 0) {
            clearInterval(interval);
            return 0;
          }
          return prevState - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
    return () => null;
  }

  const randomKeys = useMemo(() => {
    let numbers: number[] = [];
    do {
      var randomNumber = Math.floor(Math.random() * 10);
      if (!numbers.includes(randomNumber)) {
        numbers.push(randomNumber);
      }
    } while (numbers.length < 10);

    return numbers;
  }, [showTokenModal]);

  function insertKey(numbers: number[]) {
    if (password.length < length) {
      let coupleOfNumbers = `[${numbers}]`;
      setPassword(prev => prev.concat(coupleOfNumbers));
    }
  }

  function removeLastKey() {
    setPassword(password.slice(0, password.length - 1));
  }

  function handleShowToken() {
    setShowTokenModal(!showTokenModal);
    console.log('show');
  }

  useEffect(() => {
    if (seconds === 60 || seconds === 0) {
      timer();
    }
  }, []);

  const inputLineRender = () => {
    return (
      <LineRender>
        {[...Array(length).keys()].map(number => {
          return (
            <Icon
              key={number}
              name="circle"
              solid
              size={8}
              color={password.length > number ? 'white' : 'transparent'}
            />
          );
        })}
      </LineRender>
    );
  };

  const keyboardRender = () => {
    return (
      <Keyboard>
        <Key onPress={() => insertKey([randomKeys[0], randomKeys[1]])}>
          <KeyText>
            {randomKeys[0]} ou {randomKeys[1]}
          </KeyText>
        </Key>

        <Key onPress={() => insertKey([randomKeys[2], randomKeys[3]])}>
          <KeyText>
            {randomKeys[2]} ou {randomKeys[3]}
          </KeyText>
        </Key>

        <Key onPress={() => insertKey([randomKeys[4], randomKeys[5]])}>
          <KeyText>
            {randomKeys[4]} ou {randomKeys[5]}
          </KeyText>
        </Key>

        <Key onPress={() => insertKey([randomKeys[6], randomKeys[7]])}>
          <KeyText>
            {randomKeys[6]} ou {randomKeys[7]}
          </KeyText>
        </Key>

        <Key onPress={() => insertKey([randomKeys[8], randomKeys[9]])}>
          <KeyText>
            {randomKeys[8]} ou {randomKeys[9]}
          </KeyText>
        </Key>

        <Key onPress={() => removeLastKey()}>
          <Backspace name="backspace-outline" size={35} />
        </Key>
      </Keyboard>
    );
  };

  return (
    <SafeAreaView style={{flexGrow: 1}}>
      <Container>
        <View style={{flex: 1}}>
          <TopInfo>
            <InfoText>Senha de acesso</InfoText>
            <LinkText>Recuperar minha senha</LinkText>
          </TopInfo>
          <InputContainer>
            {inputLineRender()}
            <DonutChart />
          </InputContainer>
          {keyboardRender()}
          <Button text="Entrar" type={buttonColor} onPress={() => {}} />
        </View>
        <Footer>
          <Left>
            <KeyIcon name="key" size={20} />
            <FooterText>Token Rico</FooterText>
          </Left>
          <TouchableOpacity onPress={handleShowToken}>
            <ArrowUpIcon name="arrow-up" size={22} />
          </TouchableOpacity>
        </Footer>
      </Container>
      <TokenGenerator visible={showTokenModal} close={handleShowToken} />
    </SafeAreaView>
  );
};

export default TokenKeyboard;
