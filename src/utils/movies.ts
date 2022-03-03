export interface Movie {
    id: string;
    title: string;
    image_poster: string;
    image_banner: string;
    description: string;
    date: string;
    rating: number;

    url: string;
}

export const movies: Movie[] = [
    {
        id: '1',
        title: 'Homem aranha',
        image_poster:
            'https://br.web.img2.acsta.net/newsv7/20/06/11/23/07/1117290.jpg',
        image_banner:
            'https://musicart.xboxlive.com/7/94fc5000-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080',
        description:
            'Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.',
        date: '24/06/2003',
        rating: 10,
        url: 'https://www.imdb.com/title/tt4633694/'
    },
    {
        id: '2',
        title: 'Space Jam: A new legacy',
        image_poster:
            'https://www.jornaldocomercio.com/_midias/jpg/2021/07/14/unnamed__20_-9361819.jpg',
        image_banner:
            'https://upload.wikimedia.org/wikipedia/pt/a/a4/Space_Jam_A_New_Legacy.jpg',
        description:
            'A rogue artificial intelligence kidnaps the son of famed basketball player LeBron James, who then has to work with Bugs Bunny to win a basketball game.',
        date: '24/06/2017',
        rating: 10,
        url: 'https://www.imdb.com/title/tt3554046/'
    },
    {
        id: '3',
        title: 'Immortals',
        image_poster:
            'http://cinemacao.files.wordpress.com/2012/01/trioimmortals.jpg',
        image_banner:
            'https://www.cafecomfilme.com.br/media/k2/items/cache/b42628f79a294675b36162209f86e045_XL.jpg?t=20171116_015425',
        description:
            'Theseus is a mortal man chosen by Zeus to lead the fight against the ruthless King Hyperion, who is on a rampage across Greece to obtain a weapon that can destroy humanity.',
        date: '23/06/2008',
        rating: 10,
        url: 'https://www.imdb.com/title/tt1253864/'
    }
];
