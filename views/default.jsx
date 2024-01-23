const React = require('react')

function Def(html) {
    return (
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Title</title>
        </head>
        <body>
            {html.children}
        </body>
        </html>
    )
}

module.exports = Def