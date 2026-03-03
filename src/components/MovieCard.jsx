import React, { useState } from 'react'

const MovieCard = ({ heading }) => {

    const movies = [
        { id: 1, name: "Ironman", image: "https://m.media-amazon.com/images/I/71gGg48AKcL._AC_UF894,1000_QL80_.jpg", year: 2008, description: "First Movie of Ironman" },
        { id: 2, name: "Ironman 2", image: "https://play-lh.googleusercontent.com/Y19Z2gHT3plZCrsbZPY9zr7Ru6nBOfLygm1jNr0NkHA93tGQz8yHB2jj4Y_Oc0W9lULBTQ", year: 2010, description: "Second Movie of Ironman" },
        { id: 3, name: "Ironman 3", image: "https://thechristiannerd.files.wordpress.com/2013/04/iron-man-3-imax-poster.jpg", year: 2012, description: "Third Movie of Ironman" },
    ]

    return (
        <div className='p-2'>
            <h1 className='bg-blue-200 text-center text-2xl py-4 m-2'>{heading}</h1>
            <ul className='flex flex-row'>
                {movies.map((movie) => (
                    <li key={movie.id} className='flex flex-col gap-2 ml-10'>
                        <img src={movie.image} height={250} width={250} alt="photo" />
                        <li>{movie.name}</li>
                        <li>{movie.year}</li>
                        <li>{movie.description}</li>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default MovieCard