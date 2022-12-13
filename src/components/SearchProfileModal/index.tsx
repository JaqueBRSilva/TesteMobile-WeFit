import React, { useEffect, useState } from 'react';
import { Modal, TouchableWithoutFeedback } from 'react-native';
import { TextInput } from 'react-native-paper';
import GestureRecognizer from 'react-native-swipe-gestures';
import { GitInfosProps } from '../../pages/Home';
import Buttons from '../Buttons';
import { ButtonsContainer, DarkModalBackground, DescriptionText, DraggableItem, ModalContent } from './style';

interface ISearchProfileProps {
  visible: boolean;
  onClose: () => void;
  profileName: (user: GitInfosProps) => void;
}

const SearchProfileModal: React.FC<ISearchProfileProps> = ({ visible, onClose, profileName }) => {

  const [showUsernameModal, setShowUsernameModal] = useState(false);
  const [text, setText] = useState('')

  const searchGitProfile = (user: GitInfosProps) => {
    profileName(user)
    setShowUsernameModal(false)
  }

  useEffect(() => {
    if (visible === true) {
      setShowUsernameModal(true)
    } else {
      setShowUsernameModal(false)
    }
  }, [visible])

  return (
    <>
      <GestureRecognizer
        style={{}}
        onSwipeDown={() => setShowUsernameModal(false)}
      >

        <Modal
          animationType="slide"
          visible={showUsernameModal}
          transparent
          onRequestClose={() => setShowUsernameModal(false)}
        >

          <TouchableWithoutFeedback onPress={() => setShowUsernameModal(false)}>
            <DarkModalBackground />
          </TouchableWithoutFeedback>

          <ModalContent>

            <DraggableItem />

            <DescriptionText>
              Alterar usuário selecionado
            </DescriptionText>

            <TextInput
              label="Nome do usuário"
              placeholderTextColor='#737373'
              activeUnderlineColor='#737373'
              autoFocus
              value={text}
              onChangeText={text => setText(text)}
              style={{
                backgroundColor: '#F0F0F0',
                borderTopLeftRadius: 4,
                borderTopRightRadius: 4,
              }}
            />

            <ButtonsContainer>
              <Buttons
                title='CANCELAR'
                onPress={() => setShowUsernameModal(false)}
                background_color='transparent'
                font_color='#1976D2'
              />
              <Buttons
                title='SALVAR'
                onPress={() => searchGitProfile(text)}
                background_color='#1976D2'
                font_color='#FFF'
              />
            </ButtonsContainer>
          </ModalContent>
        </Modal>
      </GestureRecognizer>
    </>
  );
};

export default SearchProfileModal;