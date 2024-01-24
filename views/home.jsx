const React = require('react')
const Def = require('./default')

function home() {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img src="/public/images/burger.jpg" alt="Hamburger beside fries and ketchup"/>
                    <div>
                    Photo by <a href="https://unsplash.com/@rollelflex_graphy726?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">sk</a> on <a href="https://unsplash.com/photos/hamburger-beside-fries-and-ketchup-CK6tjAIMJWM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                    </div>
                </div>
                <a href="/places"><button className="btn-primary">Places Page</button></a>
            </main>
        </Def>
    )
}

module.exports = home