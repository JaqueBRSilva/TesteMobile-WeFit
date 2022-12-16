import { Octicons } from '@expo/vector-icons';
import styled from 'styled-components/native';

export const MainContent = styled.View`
    flex: 1;
`;

export const RepoContent = styled.View`
    flex: 1;
    background-color: #FFF;
    padding: 16px;
`;

export const SelectedRepositoryTitle = styled.Text`
    font-size: 20px;
    color: #070707;
    padding-bottom: 16px;
`;

export const SelectedRepoDescription = styled.Text`
    font-size: 16px;
    flex: 1;
    color: #9A9A9A;
    padding-bottom: 16px;
`;

export const LanguageView = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const LargerDotIcon = styled(Octicons)`
    color: #F22828;
    padding-right: 6px;
`;

export const FeatureLanguageFromRepository = styled.Text`
    font-size: 14px;
    color: #9a9a9a;
`;

export const FooterButtonsView = styled.View`
    flex-direction: column;
    margin-top: 100%;
    background-color: #FFF;
    padding: 16px;
`;

export const RowButtonContainer = styled.View`
    padding-bottom: 8px;
`;
