const db = require('../models')

async function seed() {
    let place = await db.Place.findOne({name: 'H-Thai-ML'})
    let comment = await db.Comment.create({
        author: 'Famished Fran',
        rant: false,
        stars: 5.0,
        content: 'Wow, simply amazing! Highly recommend!'
    })
    place.comments.push(comment.id)
    let commentTwo = await db.Comment.create({
        author: 'Spicy Sean',
        rant: false,
        stars: 3.5,
        content: 'Great food, but could use a little more heat...'
    })
    place.comments.push(commentTwo.id)
    let commentThree = await db.Comment.create({
        author: 'Critical Carl',
        rant: false,
        stars: 3.0,
        content: 'Failed to shock. Just alright'
    })
    place.comments.push(commentThree.id)
    let commentFour = await db.Comment.create({
        author: 'Average Andy',
        rant: false,
        stars: 4.5,
        content: 'Good food.'
    })
    place.comments.push(commentFour.id)
    await place.save()
    process.exit()
}

seed()