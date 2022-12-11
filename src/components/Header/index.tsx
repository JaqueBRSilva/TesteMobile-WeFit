import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ArrowLeftButton, ArrowLeftIcon, Container, SettingsIcon, SettingsIconButton, Title } from "./style";

interface IHeader {
    handlePressBackButton?: () => void;
    showBackIcon: boolean;
    titleHeader: string;
    handlePressSettingsButton?: () => void;
    showSettingIcon: boolean;
}

const Header: React.FC<IHeader> = ({ handlePressBackButton, showBackIcon, titleHeader, handlePressSettingsButton, showSettingIcon }) => {

    return (
        <Container>
            <StatusBar style='auto' backgroundColor='transparent' />
            {(showBackIcon == false ? ('')
                : (
                    <ArrowLeftButton onPress={handlePressBackButton}>
                        <ArrowLeftIcon name="arrowleft" size={24} />
                    </ArrowLeftButton>
                )
            )}

            <Title>{titleHeader}</Title>

            {(showSettingIcon == false ? ('')
                : (
                    <SettingsIconButton onPress={handlePressSettingsButton}>
                        <SettingsIcon name="settings" size={24} />
                    </SettingsIconButton>
                )
            )}
        </Container>
    )
}

export default Header;