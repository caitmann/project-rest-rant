const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
            <main>
                <h1>{data.place.name}</h1>
                <div className='row'>
                    <div className='col-sm-6'>
                        <img src={data.place.pic} alt={data.place.name} />
                        <h3>Located in {data.place.city}, {data.place.state}</h3>
                    </div>
                    <div className='col-sm-6'>
                        <h2>Description</h2>
                        <h3>{data.place.showEstablished()}</h3>
                        <h4>Serving {data.place.cuisines}</h4>
                        <a href={`/places/${data.id}/edit`} className='btn btn-warning'>
                            Edit
                        </a>
                        <form method='POST' action={`/places/${data.id}?_method=DELETE`}>
                            <buttom type='submit' className='btn btn-danger'>
                                Delete
                            </buttom>
                        </form>
                    </div>
                    <section className='ratingSection'>
                        <h2>Ratings</h2>
                        <p>Currently Unrated</p>
                    </section>
                    <section className='commentSection'>
                        <h2>Comments</h2>
                        <p>No comments yet!</p>
                    </section>
                </div>
            </main>
        </Def>
    )
}

module.exports = show