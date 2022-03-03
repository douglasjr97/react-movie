import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { TextInputProps } from 'react-native';
import { SearchBar } from '../Searchbar';

import { Container } from './styles';

interface Props extends TextInputProps {
    control: Control;
    name: string;
    icon: string;
}

export function SearchBarForm({ control, name, icon, ...rest }: Props) {
    return (
        <Container>
            <Controller
                control={control}
                render={({ field: { onChange, value } }) => (
                    <SearchBar
                        icon={icon}
                        onChangeText={onChange}
                        value={value}
                        {...rest}
                    />
                )}
                name={name}
            />
        </Container>
    );
}
