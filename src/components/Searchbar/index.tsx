import React from 'react';
import { TextInputProps } from 'react-native';
import theme from '../../global/theme';
import { Container, Icon, InputText } from './styles';

interface Props extends TextInputProps {
    icon: string;
}

export function SearchBar({ icon, ...rest }: Props) {
    return (
        <>
            <Container>
                <Icon name={icon} />
                <InputText
                    {...rest}
                    placeholderTextColor={theme.colors.input_icon}
                />
            </Container>
        </>
    );
}
