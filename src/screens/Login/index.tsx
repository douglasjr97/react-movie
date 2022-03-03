import React from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Image from '../../assets/banner.svg';
import { LoginButton } from '../../components/LoginButton';

import {
    Container,
    ImageContainer,
    Header,
    TitleWrapper,
    Title,
    LoginTitle,
    Footer
} from './styles';

export function Login({ navigation }: any) {
    function handleStart() {
        navigation.navigate('Home');
    }
    return (
        <>
            <StatusBar
                translucent
                barStyle="light-content"
                backgroundColor="transparent"
            />
            <Container>
                <Header>
                    <ImageContainer>
                        <Image width={RFValue(380)} />
                    </ImageContainer>

                    <TitleWrapper>
                        <Title>
                            Pesquise, Filtre e Encontre todos os filmes e séries
                            que estão{'\n'}
                            em alta🔥
                        </Title>
                    </TitleWrapper>

                    <LoginTitle>
                        Comece a ver os filmes{'\n'}
                        clicando no botão abaixo
                    </LoginTitle>
                </Header>

                <Footer>
                    <LoginButton title="Iniciar🚀" onPress={handleStart} />
                </Footer>
            </Container>
        </>
    );
}
