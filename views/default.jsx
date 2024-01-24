const React = require('react')

function Def(html) {
    return (
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Title</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"/>
            <link rel="stylesheet" href="/css/style.css"/>
        </head>
        <body>
            {html.children}
        </body>
        </html>
    )
}

module.exports = Def