import React, { useState } from 'react';
import { useFocusEffect } from '@react-navigation/core';
import { useForm } from 'react-hook-form';
import { ItemMovie } from '../../components/ItemMovie';
import { SearchBarForm } from '../../components/SearchBarForm';
import { useNavigation } from '../../hooks/useNavigation';
import { Movie } from '../../utils/movies';
import { ActivityIndicator, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import {
    Container,
    FlatListMovies,
    ListMoviesContainer,
    SearchBarContainer,
    LoadContainer,
    WhithoutMovieContent,
    TextNotMovie
} from './styles';
import { api, baseUrlImages } from '../../services/api';
import theme from '../../global/theme';
interface FormData {
    searchMovie: string;
}

interface ResponseSearchTMDB {
    data: {
        results: [
            {
                id: number;
                title: string;
                release_date: string;
                poster_path: string;
                backdrop_path: string;
                vote_average: number;
                overview: string;
            }
        ];
    };
}

export function SearchMovie({ navigation }: any) {
    const { control, handleSubmit } = useForm({});
    const { setData } = useNavigation();
    const [moviesData, setMoviesData] = useState<Movie[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isMovieWithName, setIsMovieWithName] = useState(false);

    async function handleSearch(data: FormData) {
        if (data.searchMovie === undefined || data.searchMovie === '') {
            setIsLoading(false);
            setIsMovieWithName(false);
            return;
        }

        try {
            setIsLoading(true);
            const response: ResponseSearchTMDB = await api.get(
                '/search/movie?query=+' + data.searchMovie + '&language=pt-BR'
            );
            const dataIMDB = response.data.results;

            const movies: Movie[] = [];

            dataIMDB.map(async (movie) => {
                const responseMovieId = await api.get(
                    '/movie/' + Number(movie.id)
                );
                const urlMovie = responseMovieId.data.homepage;
                const newData: Movie = {
                    id: String(movie.id),
                    title: movie.title,
                    description: movie.overview,
                    date: movie.release_date,
                    rating: movie.vote_average,
                    image_banner: baseUrlImages + movie.backdrop_path,
                    image_poster: baseUrlImages + movie.poster_path,
                    url: urlMovie
                };

                movies.push(newData);
            });

            setMoviesData(movies);

            setIsLoading(false);
            setIsMovieWithName(true);
        } finally {
            setIsLoading(false);
        }
    }

    function handleGoInfoMovie(movie: Movie) {
        setData(movie);
        navigation.navigate('InfoMovie');
    }

    return (
        <Container>
            <SearchBarContainer>
                <SearchBarForm
                    icon="search"
                    placeholder="Digite o nome do filme"
                    name="searchMovie"
                    control={control}
                    maxLength={27}
                    blurOnSubmit
                    onBlur={handleSubmit(handleSearch)}
                />
            </SearchBarContainer>
            {isLoading ? (
                <LoadContainer>
                    <ActivityIndicator
                        size="large"
                        color={theme.colors.primary}
                    />
                </LoadContainer>
            ) : isMovieWithName === false ? (
                <WhithoutMovieContent>
                    <MaterialIcons
                        name="movie"
                        size={45}
                        color={theme.colors.primary}
                    />
                    <TextNotMovie>Não há filmes</TextNotMovie>
                </WhithoutMovieContent>
            ) : (
                <ListMoviesContainer>
                    <FlatListMovies
                        data={moviesData}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <ItemMovie
                                title={item.title}
                                image={item.image_banner}
                                rating={item.rating}
                                date={item.date}
                                onPress={() => handleGoInfoMovie(item)}
                            />
                        )}
                    />
                </ListMoviesContainer>
            )}
        </Container>
    );
}
