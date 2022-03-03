import React from 'react';

import { RectButtonProps } from 'react-native-gesture-handler';

import { Button, Text } from './styles';

interface Props extends RectButtonProps {
    title: string;
}

export function LoginButton({ title, ...rest }: Props) {
    return (
        <Button {...rest}>
            <Text>{title}</Text>
        </Button>
    );
}
