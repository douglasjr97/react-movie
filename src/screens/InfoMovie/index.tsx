import React from 'react';
import {
    Container,
    Header,
    BackgroundContent,
    ImageBackground,
    ImageMovieContent,
    ImageMovie,
    DescriptionWrapper,
    TitleMovie,
    TitleDescription,
    Description,
    OpenInWebSiteText,
    OpenInWebSiteButton
} from './styles';
import { Ionicons } from '@expo/vector-icons';
import theme from '../../global/theme';
import { useNavigation } from '../../hooks/useNavigation';

import * as Linking from 'expo-linking';
import { ScrollView } from 'react-native-gesture-handler';

export function InfoMovie() {
    const { data } = useNavigation();

    function handleGoPage() {
        Linking.openURL(data.url);
    }

    return (
        <Container>
            <ScrollView>
                <Header>
                    <BackgroundContent>
                        <ImageBackground
                            source={{
                                uri: data.image_banner
                            }}
                        />
                    </BackgroundContent>

                    <ImageMovieContent>
                        <ImageMovie
                            source={{
                                uri: data.image_poster
                            }}
                        />
                    </ImageMovieContent>

                    <TitleMovie>{data.title}</TitleMovie>
                </Header>

                <DescriptionWrapper>
                    <TitleDescription>Resumo</TitleDescription>

                    <Description>{data.description}</Description>

                    <OpenInWebSiteButton
                        rippleColor={theme.colors.primary}
                        onPress={handleGoPage}
                    >
                        <OpenInWebSiteText>
                            Abrir no TheMovieBD
                            <Ionicons
                                name="open-outline"
                                size={24}
                                color={theme.colors.shape}
                            />
                        </OpenInWebSiteText>
                    </OpenInWebSiteButton>
                </DescriptionWrapper>
            </ScrollView>
        </Container>
    );
}
