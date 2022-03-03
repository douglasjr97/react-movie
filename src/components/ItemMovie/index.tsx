import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import {
    Container,
    ContentViewMovie,
    DateMovie,
    ImageBackground,
    InfoMovie,
    TitleMovie,
    RatingMovie
} from './styles';
import { AntDesign } from '@expo/vector-icons';
import theme from '../../global/theme';

export interface ItemMovieProps extends RectButtonProps {
    title: string;
    image: string;
    date: string;
    rating: number;
}

export function ItemMovie({
    title,
    image,
    date,
    rating,
    ...rest
}: ItemMovieProps) {
    return (
        <Container {...rest}>
            <>
                <ImageBackground source={{ uri: image }}>
                    <ContentViewMovie>
                        <TitleMovie>{title}</TitleMovie>
                        <InfoMovie>
                            <DateMovie>{date}</DateMovie>
                            <RatingMovie>
                                {rating}
                                <AntDesign
                                    name="star"
                                    size={14}
                                    color={theme.colors.primary}
                                />
                            </RatingMovie>
                        </InfoMovie>
                    </ContentViewMovie>
                </ImageBackground>
            </>
        </Container>
    );
}
