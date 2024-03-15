const React = require('react')
const Def = require('../default')

function show (data) {
    let comments = (
        <h3 className = 'inactive'>
            No comments yet!
        </h3>
    )
    if(data.place.comments.length) {
        comments = data.place.comments.map(c => {
            return(
                <div className = 'border'>
                    <h2 className = 'rant'>{c.rant ? 'Rant!' : 'Rave!'}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <strong>- {c.author}</strong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                </div>
            )
        })
    }
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
                        {comments}
                    </section>
                    <section>
                        <h2>Leave a Comment!</h2>
                        <form method='POST' action={`/places/${data.place.id}/comment`}>
                            <div className='form-group'>
                                <label htmlFor='author'>Author</label>
                                <input type='text' id='author' name='author' required className='form-control'/>
                            </div>
                            <div className='form-group'>
                                <label htmlFor='content'>Comment</label>
                                <input type='textarea' id='content' name='content' className='form-control'/>
                            </div>
                            <div className='form-group'>
                                <label htmlFor='stars'>Star Rating</label>
                                <input type='number' step='0.5' min='1' max='5' id='stars' name='stars' className='form-control'/>
                            </div>
                            <div className='form-group'>
                                <label htmlFor='rant'>Rant!</label>
                                <input type='checkbox' id='rant' name='rant' className='form-control'/>
                            </div>
                            <button type='submit' className='btn btn-primary'>Add!</button>
                        </form>
                    </section>
                </div>
            </main>
        </Def>
    )
}

module.exports = show