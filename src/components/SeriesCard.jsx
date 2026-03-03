import React from 'react'

const SeriesCard = ({ heading }) => {
    const serieses = [
        { id: 1, name: "Ironman", image: "https://upload.wikimedia.org/wikipedia/en/0/02/Iron_Man_%282008_film%29_poster.jpg", year: 2008, description: "First Movie of Ironman" },
        { id: 2, name: "Ironman 2", image: "https://upload.wikimedia.org/wikipedia/en/0/02/Iron_Man_%282008_film%29_poster.jpg", year: 2010, description: "Second Movie of Ironman" },
        { id: 3, name: "Ironman 3", image: "https://upload.wikimedia.org/wikipedia/en/0/02/Iron_Man_%282008_film%29_poster.jpg", year: 2012, description: "Third Movie of Ironman" },
    ]

    return (
        <div className='my-10 p-2'>
            <h1 className='bg-blue-200'>{heading}</h1>
            <ul className='flex flex-row'>
                {serieses.map((series) => (
                    <li key={series.id} className='flex flex-col gap-4'>
                        <img src={series.image} alt="photo" />
                        <li>{series.name}</li>
                        <li>{series.year}</li>
                        <li>{series.description}</li>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SeriesCard