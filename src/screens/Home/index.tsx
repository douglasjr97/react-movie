import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { ItemMovie } from '../../components/ItemMovie';
import { useNavigation } from '../../hooks/useNavigation';
import { api, baseUrlImages, languageApi } from '../../services/api';
import { Movie } from '../../utils/movies';

import {
    Container,
    Header,
    Title,
    ButtonSearch,
    SearchIcon,
    ListMoviesContainer,
    FlatListMovies
} from './styles';

interface ResponseTMDB {
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

export function Home({ navigation }: any) {
    const { setData } = useNavigation();
    const [moviesData, setMoviesData] = useState<Movie[]>([]);

    function handleGoInfoMovie(movie: Movie) {
        setData(movie);
        navigation.navigate('InfoMovie');
    }

    function handleGoSearch() {
        navigation.navigate('SearchMovie');
    }

    async function loadData() {
        const response: ResponseTMDB = await api.get(
            '/movie/popular' + languageApi
        );
        const dataIMDB = response.data.results;

        const movies: Movie[] = [];

        dataIMDB.map(async (movie) => {
            const responseMovieId = await api.get('/movie/' + Number(movie.id));
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
    }

    useFocusEffect(
        useCallback(() => {
            loadData();
        }, [])
    );

    return (
        <Container>
            <Header>
                <Title>Em Alta🔥</Title>
                <ButtonSearch onPress={handleGoSearch}>
                    <SearchIcon name="search" />
                </ButtonSearch>
            </Header>

            <ListMoviesContainer>
                <FlatListMovies
                    data={moviesData}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <ItemMovie
                            title={item.title}
                            image={item.image_poster}
                            date={item.date}
                            rating={item.rating}
                            onPress={() => handleGoInfoMovie(item)}
                        />
                    )}
                />
            </ListMoviesContainer>
        </Container>
    );
}
