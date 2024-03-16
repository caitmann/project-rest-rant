const React = require('react')
const Def = require('../default.jsx')

function edit_form (data) {
    return (
        <Def>
            <main>
                <h1>Edit Place</h1>
                <form method='POST' action={`/places/${data.place.id}?_method=PUT`}>
                    <div className='form-group'>
                        <label htmlFor='name'>Place Name</label>
                        <input id='name' name='name' value={data.place.name} required className='form-control'/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='pic'>Place Picture</label>
                        <input type='url' id='pic' name='pic' value={data.place.pic} className='form-control'/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='city'>Place City</label>
                        <input id='city' name='city' value={data.place.city} className='form-control'/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='state'>Place State</label>
                        <input id='state' name='state' value={data.place.state} className='form-control'/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='cuisine'>Place Cuisine</label>
                        <input id='cuisine' name='cuisine' value={data.place.cuisines} required className='form-control'/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='founded'>Founded</label>
                        <input id='founded' name='founded' value={data.place.founded}/>
                    </div>
                    <button type='submit' className='btn btn-primary'>Save</button>
                </form>
            </main>
        </Def>
    )
}

module.exports = edit_form