const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
            <main>
                <h1>{data.place.name}</h1>
                <img src={data.place.pic} alt={data.place.name} />
                <p>{data.place.cuisines}</p>
                <p>{data.place.city}, {data.place.state}</p>
                <a href={`/places/${data.id}/edit`} className='btn btn-warning'>
                    Edit
                </a>
                <form method='POST' action={`/places/${data.id}?_method=DELETE`}>
                    <buttom type='submit' className='btn btn-danger'>
                        Delete
                    </buttom>
                </form>
                <section className='ratingSection'>
                    <h2>Ratings</h2>
                    <p>Currently Unrated</p>
                </section>
                <section className='commentSection'>
                    <h2>Comments</h2>
                    <p>No comments yet!</p>
                </section>
            </main>
        </Def>
    )
}

module.exports = show