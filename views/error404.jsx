const React = require('react')
const Def = require('./default')

function error404() {
    return (
        <Def>
            <main>
                <h1>404: Page not found.</h1>
                <h4>Combed the desert!</h4>
                <img src="/public/images/404-image.jpg" alt="Stormtrooper minifigure walking on the sand"/>
                <div>
                    Photo by <a href="https://unsplash.com/@danielkcheung?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Daniel K Cheung</a> on <a href="https://unsplash.com/photos/stormtrooper-minifigure-walking-on-the-sand-cPF2nlWcMY4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                </div>
                <h4 style={{textAlign:'right'}}>...and did not find your page.</h4>
            </main>
        </Def>
    )
}

module.exports = error404