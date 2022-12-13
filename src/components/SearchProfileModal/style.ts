import styled from 'styled-components/native';

export const DarkModalBackground = styled.View`
    flex: 1;
    background-color: #000000;
    opacity: 0.5;
`;

export const ModalContent = styled.View`    
    background-color: #FFF;
    padding: 16px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
`;

export const DraggableItem = styled.TouchableOpacity`
    border: 1px solid #E0E0E0;
    background-color: #E0E0E0;
    align-self: center;
    width: 30px;
    height: 6px;
    border-radius: 12px;
`;

export const DescriptionText = styled.Text`
    font-size: 16px;
    align-self: flex-start;
    padding: 16px 16px 10px 0;
`;

export const ButtonsContainer = styled.View`
    flex-direction: row;
    padding-top: 10px;
    align-items: center;
    justify-content: space-between;
`;