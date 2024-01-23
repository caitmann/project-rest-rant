const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [{
        name: 'Harlem Java House',
        city: 'Harlem',
        state: 'GA',
        cuisines: 'coffee, bakery',
        pic: 'https://unsplash.com/photos/flat-lay-photography-of-coffee-latte-ground-coffee-and-coffee-beans-Y3AqmbmtLQI'
    }, {
        name: 'Hells Kitchen',
        city: 'Las Vegas',
        state: 'NV',
        cuisines: 'British, American',
        pic: 'https://unsplash.com/photos/red-flame-iZwQbx4T8bQ'
    }
    ]
    res.render('places/index', {places})
})

module.exports = router