import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=16a73049f57e193d70db549140af851a&language=ko-KR')
            .then((response) => response.json())
            .then((data) => {
                console.log(data.results);
                setMovies(data.results);
            });

        /*
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=16a73049f57e193d70db549140af851a&language=ko-KR').then((response) => {
            console.log(response.data.results);
            setMovies(response.data.results);
        });
        */
    }, []);

    return (
        <>
            {movies?.map((values) => (
                <span key={values.id}>
                    <Link href={`/movies/${values.id}`}>
                        <Image
                            src={`https://image.tmdb.org/t/p/w355_and_h200_multi_faces/${values.poster_path}`}
                            alt={values.original_title}
                            width={285}
                            height={160}
                        ></Image>
                        <h3>{values.title}</h3>
                        <p>{values.overview}</p>
                    </Link>
                </span>
            ))}
        </>
    );
}
