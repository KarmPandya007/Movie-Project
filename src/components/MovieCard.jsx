import React, { useState } from 'react'

const MovieCard = () => {

    const movies = [
        { id : 1, name: "Ironman", year: 2008, description: "First Movie of Ironman" },
        { id : 2, name: "Ironman 1", year: 2010, description: "Second Movie of Ironman" },
        { id : 3, name: "Ironman 2", year: 2012, description: "Third Movie of Ironman" },
    ]

    return (
        <div>
            {movies.map((movie)=>(
                <ul key={movie.name}>
                    <li>{movie.name}</li>
                    <li>{movie.year}</li>
                    <li>{movie.description}</li>
                </ul>
            ))}
        </div>
    )
}

export default MovieCard