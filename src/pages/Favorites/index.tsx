import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Cards from "../../components/Cards";
import Header from "../../components/Header";
import { CardsList } from "../Home/style";

const Favorites = () => {

    const [favoritesListItem, setFavoritesListItem] = useState([]);
    const [removeItem, setRemoveItem] = useState([]);

    const navigation = useNavigation();

    const handleNavigateForRepoTab = () => {
        navigation.goBack()
    }

    const getStoredRepositories = async () => {
        const reposListed = await AsyncStorage.getItem("@fav_repo")

    }

    useEffect(() => {

        getStoredRepositories()

    }, [favoritesListItem])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header
                titleHeader="WeFit"
                showBackIcon={false}
                showSettingIcon={true}
                handlePressSettingsButton={handleNavigateForRepoTab}
            />

            <CardsList
                data={favoritesListItem}
                renderItem={({ item, index }) => {
                    return (
                        <Cards
                            key={`${item.id}-${index}`}
                            userPage={item?.repoListed}
                            userImageURL={item?.owner?.avatar_url}
                            repositoryDescription={item?.description}
                            numberStars={item?.stargazers_count}
                            language={item?.language}
                            showFavoriteButton={false}
                            goToRepoDetails={() => { }}
                        />
                    )
                }}
            >
            </CardsList>

        </SafeAreaView>
    )
}

export default Favorites;