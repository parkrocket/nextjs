import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Detail({ results }) {
    const routor = useRouter();
    const [movieDetail, setMovieDetail] = useState({});

    useEffect(() => {
        console.log(results);
        setMovieDetail(results);
    }, []);

    return (
        <>
            {movieDetail.id && (
                <Image
                    src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${movieDetail.poster_path}`}
                    alt={movieDetail.original_title}
                    width={1920}
                    height={800}
                ></Image>
            )}
        </>
    );
}

export async function getServerSideProps(context) {
    const id = context.params.id;

    //const { data: results } = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=16a73049f57e193d70db549140af851a`);
    const results = await (await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=16a73049f57e193d70db549140af851a&language=ko-KR`)).json();

    return {
        props: {
            results,
        },
    };
}
