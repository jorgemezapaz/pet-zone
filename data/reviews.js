

export const getReviews = () => {
    return REVIEWS
}
export const addNewReview = (userName, rating, reviewText, markerId) => {
    const date = new Date()
    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()
    // This arrangement can be altered based on how we want the date's format to appear.
    let currentDate = `${day}-${month}-${year}`

    const review = {
        id: lastId()+1,
        userName: userName,
        avatar:'https://gravatar.com/avatar/0216d4a5fbe2c21343d60982fa8cdd4d?s=400&d=mp&r=x',
        rating: rating,
        createdAt: currentDate,
        review : reviewText,
        markerId: markerId
    }
    console.log('reviews->addNewReview', review)
    REVIEWS.push(review)
}

const lastId = () =>{
    console.log('reviews->lastId : ',REVIEWS[REVIEWS.length-1].id )
    return REVIEWS[REVIEWS.length-1].id
}

const REVIEWS = [
    {
        id: 1,
        userName: 'Jorge',
        avatar: 'https://gravatar.com/avatar/0216d4a5fbe2c21343d60982fa8cdd4d?s=400&d=mp&r=x',
        rating: 3.7,
        createdAt: '11-10-2023',
        review: 'Agradable lugar',
        markerId: 1
    },
    {
        id: 2,
        userName: 'Andres',
        avatar: 'https://gravatar.com/avatar/0216d4a5fbe2c21343d60982fa8cdd4d?s=400&d=mp&r=x',
        rating: 4.0,
        createdAt: '07-09-2023',
        review: 'No entre al lugar pero se ve bonito y limpio',
        markerId: 2
    },
    {
        id: 3,
        userName: 'Maria',
        avatar: 'https://gravatar.com/avatar/0216d4a5fbe2c21343d60982fa8cdd4d?s=400&d=mp&r=x',
        rating: 3,
        createdAt: '16-08-2023',
        review: 'Excelente lugar para hacer deportes y disfrutar con la familia',
        markerId: 3
    },
    {
        id: 4,
        userName: 'Marcos',
        avatar: 'https://gravatar.com/avatar/0216d4a5fbe2c21343d60982fa8cdd4d?s=400&d=mp&r=x',
        rating: 4,
        createdAt: '11-01-2024',
        review: 'Agradable lugar',
        markerId: 2
    },
    {
        id: 5,
        userName: 'Romina',
        avatar: 'https://gravatar.com/avatar/0216d4a5fbe2c21343d60982fa8cdd4d?s=400&d=mp&r=x',
        rating: 4.5,
        createdAt: '10-11-2023',
        review: 'Bonito',
        markerId: 2
    },
    {
        id: 6,
        userName: 'Barbara',
        avatar: 'https://gravatar.com/avatar/0216d4a5fbe2c21343d60982fa8cdd4d?s=400&d=mp&r=x',
        rating: 3,
        createdAt: '09-10-2023',
        review: 'Buen lugar',
        markerId: 2
    },
    {
        id: 7,
        userName: 'Andres',
        avatar: 'https://gravatar.com/avatar/0216d4a5fbe2c21343d60982fa8cdd4d?s=400&d=mp&r=x',
        rating: 2.5,
        createdAt: '11-01-2024',
        review: 'Agradable lugar',
        markerId: 3
    },
    {
        id: 8,
        userName: 'Julio',
        avatar: 'https://gravatar.com/avatar/0216d4a5fbe2c21343d60982fa8cdd4d?s=400&d=mp&r=x',
        rating: 4.5,
        createdAt: '10-11-2023',
        review: 'Bonito',
        markerId: 3
    },
    {
        id: 9,
        userName: 'Felipe',
        avatar: 'https://gravatar.com/avatar/0216d4a5fbe2c21343d60982fa8cdd4d?s=400&d=mp&r=x',
        rating: 3,
        createdAt: '09-10-2023',
        review: 'Buen lugar',
        markerId: 3
    },
    {
        id: 10,
        userName: 'Roberto',
        avatar: 'https://gravatar.com/avatar/0216d4a5fbe2c21343d60982fa8cdd4d?s=400&d=mp&r=x',
        rating: 2.5,
        createdAt: '11-01-2024',
        review: 'Agradable lugar',
        markerId: 4
    },
    {
        id: 11,
        userName: 'Luis',
        avatar: 'https://gravatar.com/avatar/0216d4a5fbe2c21343d60982fa8cdd4d?s=400&d=mp&r=x',
        rating: 4.5,
        createdAt: '10-11-2023',
        review: 'Bonito',
        markerId: 4
    },
    {
        id: 12,
        userName: 'Carlos',
        avatar: 'https://gravatar.com/avatar/0216d4a5fbe2c21343d60982fa8cdd4d?s=400&d=mp&r=x',
        rating: 3,
        createdAt: '09-10-2023',
        review: 'Buen lugar',
        markerId: 5
    },
    {
        id: 13,
        userName: 'Rafael',
        avatar: 'https://gravatar.com/avatar/0216d4a5fbe2c21343d60982fa8cdd4d?s=400&d=mp&r=x',
        rating: 2.5,
        createdAt: '11-01-2024',
        review: 'Agradable lugar',
        markerId: 5
    },
    {
        id: 14,
        userName: 'Eizer',
        avatar: 'https://gravatar.com/avatar/0216d4a5fbe2c21343d60982fa8cdd4d?s=400&d=mp&r=x',
        rating: 4.5,
        createdAt: '10-11-2023',
        review: 'Bonito',
        markerId: 5
    },
    {
        id: 15,
        userName: 'Roxana',
        avatar: 'https://gravatar.com/avatar/0216d4a5fbe2c21343d60982fa8cdd4d?s=400&d=mp&r=x',
        rating: 3,
        createdAt: '09-10-2023',
        review: 'Buen lugar',
        markerId: 5
    }
]