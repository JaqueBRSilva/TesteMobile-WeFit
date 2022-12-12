import React from "react";
import { ButtonArea, TitleButton } from "./style";

interface IButtonProps {
    title: string;
    background_color: string;
    onPress: () => void;
    font_color: string;
}

const Buttons: React.FC<IButtonProps> = ({ title, background_color, font_color, onPress }) => {
    return (
        <>
            <ButtonArea
                style={{ backgroundColor: background_color }}
                onPress={onPress}
            >
                <TitleButton style={{ color: font_color }}>
                    {title}
                </TitleButton>
            </ButtonArea>
        </>
    )
};

export default Buttons;