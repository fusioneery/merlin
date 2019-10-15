import React, {ReactNode} from 'react';
import EnhancedModal from 'react-native-translucent-modal';
import styled from '@theme/styled';
import {TouchableWithoutFeedback} from 'react-native';

interface IModalProps {
  visible?: boolean;
  children: ReactNode;
  onBGPress(): void;
}

export const Modal: React.FC<IModalProps> = ({visible, children, onBGPress}) => {
  return (
    <EnhancedModal animationType="fade" transparent={true} visible={visible}>
      <TouchableWithoutFeedback onPress={onBGPress}>
        <BG>{children}</BG>
      </TouchableWithoutFeedback>
    </EnhancedModal>
  );
};

const BG = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1;
`;
