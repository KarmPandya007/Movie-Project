import React from 'react'

const SeriesCard = ({ heading }) => {
    const serieses = [
        { id: 1, name: "Ironman", year: 2008, description: "First Movie of Ironman" },
        { id: 2, name: "Ironman 2", year: 2010, description: "Second Movie of Ironman" },
        { id: 3, name: "Ironman 3", year: 2012, description: "Third Movie of Ironman" },
    ]

    return (
        <div className='my-10 p-2'>
            <h1 className='bg-blue-200'>{heading}</h1>
            <ul>
                {serieses.map((series) => (
                    <li key={series.id}>
                        {series.name} ({series.year}) - {series.description}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SeriesCard