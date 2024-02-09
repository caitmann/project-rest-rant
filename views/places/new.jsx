const React = require('react')
const Def = require('../default')

function new_form () {
    return (
        <Def>
            <main>
                <h1>Add a New Place</h1>
                <form method='POST' action='/places'>
                    <div className='form-group'>
                        <label htmlFor='name'>Place Name</label>
                        <input id='name' name='name' required className='form-control'/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='pic'>Place Picture</label>
                        <input type='url' id='pic' name='pic' className='form-control'/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='city'>Place City</label>
                        <input id='city' name='city' className='form-control'/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='state'>Place State</label>
                        <input id='state' name='state' className='form-control'/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='cuisines'>Place Cuisine</label>
                        <input id='cuisines' name='cuisines' required className='form-control'/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='founded'>Founded Year</label>
                        <input type='number' className='form-control' id='founded' name='founded' value={new Date().getFullYear()} />
                    </div>
                    <button type='submit' className='btn btn-primary'>Add!</button>
                </form>
            </main>
        </Def>
    )
}

module.exports = new_form