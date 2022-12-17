import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button } from 'react-native-paper';
import { WebView } from 'react-native-webview';
import {
  FeatureLanguageFromRepository,
  FooterButtonsView,
  LanguageView,
  LargerDotIcon,
  MainContent,
  RepoContent,
  RowButtonContainer,
  SelectedRepoDescription,
  SelectedRepositoryTitle
} from './style';

const Details = ({ route }) => {

  const repoData = route.params.item;
  const [isFavorite, setIsFavorite] = useState(false)
  const [favRepo, setFavRepo] = useState()
  const [favoriteItem, setFavoriteItem] = useState([])

  const handleOpenToRepositoryPage = (fullName) => {
    return (
      <WebView source={{ uri: `https://github.com/${fullName}` }} />
    )
  }

  return (
    <MainContent>
      <StatusBar style='light' />
      <RepoContent>
        <SelectedRepositoryTitle>
          {repoData?.full_name}
        </SelectedRepositoryTitle>

        <SelectedRepoDescription>
          {repoData?.description}
        </SelectedRepoDescription>

        {repoData?.language && (
          <LanguageView>
            <LargerDotIcon name="dot-fill" size={26} />
            <FeatureLanguageFromRepository>
              {repoData?.language}
            </FeatureLanguageFromRepository>
          </LanguageView>
        )}
      </RepoContent>

      <FooterButtonsView>
        <RowButtonContainer>
          <Button
            mode="text"
            textColor='#1976D2'
            buttonColor='#FFF'
            onPress={() => handleOpenToRepositoryPage(repoTitle)}
            icon="link" // size 26
            contentStyle={{ flexDirection: 'row-reverse' }}
            style={{
              height: 42,
              alignContent: 'center',
              justifyContent: 'center',
              borderRadius: 4
            }}
          >
            VER REPOSITÓRIO
          </Button>
        </RowButtonContainer>

        <RowButtonContainer>
          {(isFavorite === false) ? (
            <Button
              mode="elevated"
              textColor='#000'
              buttonColor='#FFD02C'
              onPress={() => setIsFavorite(true)}
              icon="star" // size 26
              contentStyle={{ flexDirection: 'row-reverse' }}
              style={{
                height: 42,
                alignContent: 'center',
                justifyContent: 'center',
                borderRadius: 4
              }}
            >
              FAVORITAR
            </Button>
          ) : (
            <Button
              mode="outlined"
              textColor='#000'
              buttonColor='#FFF'
              onPress={() => setIsFavorite(!isFavorite)}
              icon="star-outline" // size 26
              contentStyle={{ flexDirection: 'row-reverse' }}
              style={{
                height: 42,
                alignContent: 'center',
                justifyContent: 'center',
                borderRadius: 4
              }}
            >
              DESFAVORITAR
            </Button>
          )}
        </RowButtonContainer>
      </FooterButtonsView>
    </MainContent>
  )
};

export default Details;