/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useMemo, useState} from 'react';
import {Modal, SafeAreaView, TouchableOpacity} from 'react-native';

import {
  TokenScreen,
  Header,
  Title,
  Token,
  ArrowDownIcon,
  TokenRenderer,
} from './styles';

interface Props {
  close: any;
  visible: boolean;
}

const TokenGenerator: React.FC<Props> = ({close, visible}) => {
  const [showModal, setShowModal] = useState(visible);

  useEffect(() => {
    setShowModal(visible);
  }, [visible]);

  const generateToken = useMemo(() => {
    return Math.floor(Math.random() * 999999);
  }, [visible]);

  function closeModal() {
    close();
  }

  return (
    <Modal visible={showModal}>
      <SafeAreaView style={{flexGrow: 1}}>
        <TokenScreen>
          <Header>
            <Title>Token</Title>
            <TouchableOpacity onPress={() => closeModal()}>
              <ArrowDownIcon name="arrow-down" size={22} />
            </TouchableOpacity>
          </Header>
          <TokenRenderer>
            <Token>{generateToken}</Token>
          </TokenRenderer>
        </TokenScreen>
      </SafeAreaView>
    </Modal>
  );
};

export default TokenGenerator;
