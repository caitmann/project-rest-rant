const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [{
        name: 'Harlem Java House',
        city: 'Harlem',
        state: 'GA',
        cuisines: 'coffee, bakery',
        pic: '/public/images/coffee.jpg'
    }, {
        name: 'Hells Kitchen',
        city: 'Las Vegas',
        state: 'NV',
        cuisines: 'British, American',
        pic: '/public/images/fire.jpg'
    }
    ]
    res.render('places/index', {places})
})

router.get('/new', (req, res) => {
    res.render('places/new')
})

module.exports = router