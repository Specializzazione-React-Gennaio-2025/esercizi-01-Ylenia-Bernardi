import React, { useState } from 'react';
import '../MovieCard.css';

export default function MovieCard({ movie }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="d-flex justify-content-center flex-wrap">
            <div className="col-md-3 col-sm-6 mb-3">
                <div
                    className="card h-100 shadow-sm"
                    style={{ width: "14rem" }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <img src={movie.imageUrl} className="card-img-top" alt={movie.title} />
                    <div className="card-body text-center">
                        <h6 className="card-title">{movie.title} ({movie.year})</h6>
                        <p className="card-text text-muted" style={{ fontSize: "0.85rem" }}>{movie.director}</p>
                        {isHovered && <p className="card-text text-secondary" style={{ fontSize: "0.75rem" }}>{movie.description}</p>}
                    </div>
                </div>
            </div>
        </div>

    );
}
