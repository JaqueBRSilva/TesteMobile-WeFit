import { Ionicons, Octicons } from '@expo/vector-icons';
import styled from 'styled-components/native';

export const CardContainer = styled.TouchableOpacity`
    width: 90%;
    height: 167px;
    margin: 8px 0;
    padding: 16px;
    align-self: center;
    border-radius: 4px;
    background: #FFFFFF;
`;

export const RepositoryInfos = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const UserName = styled.Text`
    font-size: 12px;
    color: #070707;
    padding: 3px 0 17px 0;
`;

export const RepositoryName = styled.Text`
    font-weight: bold;
`;

export const UserImage = styled.Image`
    width: 29px;
    height: 29px;
    border-radius: 50px;
    margin-bottom: 16px;
`;

export const HorizontalLine = styled.View`
    border: 0.6px solid #DADADA;
    opacity: 0.9;
    align-self: stretch;
`;

export const RepositoryDescription = styled.Text`
    font-size: 12px;
    flex: 1;
    color: #9A9A9A;
    margin: 16px 0px;
    height: 35px;
`;

export const RowFlexContainer = styled.View`
    flex-direction: row;
    flex: 1;
    align-items: center;
    justify-content: space-between;
`;

export const FavoriteButtonContainer = styled.TouchableOpacity`
    flex-direction: row;
    width: 103px;
    height: 36px;
    padding: 8px 10px;
    background-color: #FAF3DC;
    border-radius: 4px;
    justify-content: space-around;
    align-items: center;
`;

export const StarIcon = styled(Ionicons)`
    flex-direction: row;
    color: #FFD02C;
`;

export const FavText = styled.Text`
     color: #FFD02C;
     font-size: 12px;
     font-weight: 700;
`;

export const StarsContainer = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const StarsNumber = styled.Text`
    font-size: 12px;
    color: #9A9A9A;
`;

export const LanguageContainer = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const DotIcon = styled(Octicons)`
    color: #F22828;
    padding-right: 6px;
`;

export const LanguageName = styled.Text`
    font-size: 12px;
    color: #9A9A9A;
`;