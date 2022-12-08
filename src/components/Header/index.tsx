import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ArrowLeftIcon, Container, SettingsIcon, Title } from "./style";

interface IHeader {
    handlePressBackButton?: () => void;
    showBackIcon: boolean;
    title: string;
    handlePressSettingsButton?: () => void;
    showSettingIcon: boolean;
}

const Header: React.FC<IHeader> = ({ handlePressBackButton, showBackIcon, title, handlePressSettingsButton, showSettingIcon }) => {

    return (
        <Container>
            <StatusBar style='auto' backgroundColor='transparent' />
            {(showBackIcon == false ? ('')
                : (
                    <ArrowLeftIcon name="arrowleft" size={24} onPress={handlePressBackButton} />
                )
            )}

            <Title>{title}</Title>

            {(showSettingIcon == false ? ('')
                : (
                    <SettingsIcon name="settings" size={24} onPress={handlePressSettingsButton} />
                )
            )}
        </Container>
    )
}

export default Header;