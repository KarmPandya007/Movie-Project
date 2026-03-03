import React from 'react'

const SeriesCard = ({ heading }) => {
    const serieses = [
        { id: 1, name: "Ironman", image: "https://resizing.flixster.com/ux52ZqsVJYqJYviq_nAX_277DMw=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8681514_i_v8_ac.jpg", year: 2008, description: "First Movie of Ironman" },
        { id: 2, name: "Ironman 2", image: "https://m.media-amazon.com/images/M/MV5BMTNhMDJmNmYtNDQ5OS00ODdlLWE0ZDAtZTgyYTIwNDY3OTU3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", year: 2010, description: "Second Movie of Ironman" },
        { id: 3, name: "Ironman 3", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaHZfGZvMKRe3KYbG4ncPb5jZvQ6uwevMRqg&s", year: 2012, description: "Third Movie of Ironman" },
    ]

    return (
        <div className='p-2'>
            <h1 className='bg-blue-200 text-center text-2xl py-4 m-2'>{heading}</h1>
            <ul className='flex flex-row'>
                {serieses.map((series) => (
                    <li key={series.id} className='flex flex-col gap-2 ml-10'>
                        <img src={series.image} height={250} width={250} alt="photo" />
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