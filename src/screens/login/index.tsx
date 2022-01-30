import React from 'react';
import HeaderContainer from '../../components/header';
import TokenKeyboard from '../../components/tokenKeyboard';

const Login: React.FC = () => {
  return (
    <>
      <HeaderContainer />
      <TokenKeyboard length={8} />
    </>
  );
};

export default Login;
