import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex-direction: row;
    background-color: #FFF;
    justify-content: space-between;
    height: 56px;
    align-items: center;
    margin-bottom: 8px;
`;

export const ArrowLeftButton = styled.TouchableOpacity``;

export const ArrowLeftIcon = styled(AntDesign)`
    color: #FFF;
`;

export const Title = styled.Text`
    font-size: 20px;
    font-weight: 500;
    color: #000;
    padding: 12px 16px;
`;

export const SettingsIconButton = styled.TouchableOpacity``;

export const SettingsIcon = styled(MaterialIcons)`
    color: #000;
    padding: 12px 16px;
`;