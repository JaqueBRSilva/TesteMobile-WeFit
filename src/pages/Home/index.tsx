import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Cards from "../../components/Cards";
import Header from "../../components/Header";
import SearchProfileModal from "../../components/SearchProfileModal";
import { api } from "../../services/api";
import { CardsList } from "./style";

export type GitInfosProps = {
    full_name: string;
    owner: {
        avatar_url: string;
    }
    description: string;
    stargazers_count: number;
    language: string;
    html_url: string;
}

const Home = () => {
    const [gitProfile, setGitProfile] = useState<GitInfosProps[] | undefined>();
    const [showUsernameModal, setShowUsernameModal] = useState(false);
    const [removeRepository, setRemoveRepository] = useState(0);

    const navigation = useNavigation();


    const onOpenModal = () => {
        setShowUsernameModal(true)
    }

    const onCloseModal = () => {
        setShowUsernameModal(false)
    }

    const handleChangeUser = async (userName: GitInfosProps) => {
        try {
            const response = await api.get(`${userName}/repos`)

            setGitProfile(response?.data)

            if (response?.status !== 200) {
                const errorMsg = 'Não foi possível encontrar esse perfil.\n\nVerifique como foi digitado e tente novamente';
                throw new Error(errorMsg)
            }

        } catch (error: any) {
            Alert.alert('ERRO', error?.message)
        }
    }

    const handleOpenTheRepositoryDetails = (repoData: GitInfosProps) => {
        navigation.navigate('Details', { repoData })

    }

    const handleAddToFavorites = async (repoID: GitInfosProps) => {
        AsyncStorage.setItem('@fav_repo', JSON.stringify(repoID))

    }

    useEffect(() => {

        if (showUsernameModal) {
            onOpenModal()
        } else {
            setShowUsernameModal(false)
        }

    }, [showUsernameModal])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header
                titleHeader="WeFit"
                showBackIcon={false}
                showSettingIcon={true}
                handlePressSettingsButton={() => setShowUsernameModal(!showUsernameModal)}
            />

            <CardsList
                data={gitProfile}
                renderItem={({ item, index }) => {
                    return (
                        <Cards
                            key={`${item.id}-${index}`}
                            userPage={item?.full_name}
                            userImageURL={item?.owner?.avatar_url}
                            repositoryDescription={item?.description}
                            numberStars={item?.stargazers_count}
                            language={item?.language}
                            goToRepoDetails={() => handleOpenTheRepositoryDetails(item?.html_url)}
                            addToFavorites={() => handleAddToFavorites(item?.id, item?.full_name)}
                        />
                    )
                }}
            >
            </CardsList>

            <SearchProfileModal
                visible={showUsernameModal}
                onClose={() => setShowUsernameModal(false)}
                profileName={handleChangeUser}
            />

        </SafeAreaView>
    )
}

export default Home;