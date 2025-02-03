import React from 'react';
import MovieCard from './MovieCard';

export default function MovieList({ movies }) {
    return (
        <div className="container">
            <div className="row g-3">
                {movies.map((movie, index) => (
                    <MovieCard key={index} movie={movie} />
                ))}
            </div>
        </div>
    );
}

