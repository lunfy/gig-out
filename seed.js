const postingModel = require('./models/gigs/gigs')

const seedPostings = [

    {
        authorId: '62e7538937a8e89b4775680c',
        title: 'Job Post 1',
        authorFname: 'Lutfi',
        authorLname: 'Aman',
        messageBody: '1 This is a new job',
        datePosted: new Date()
    },

    {
        authorId: '62ef41ffba13e821c9c7f0f3',
        title: 'Job Post 2',
        authorFname: 'Lifa',
        authorLname: 'Salleh',
        messageBody: '2 This is a new job',
        datePosted: new Date()
    },

    {
        authorId: '62e7538937a8e89b4775680c',
        title: 'Job Post 3',
        authorFname: 'Lutfi',
        authorLname: 'Aman',
        messageBody: '3 This is a new job',
        datePosted: new Date()
    },

    {
        authorId: '62ef41ffba13e821c9c7f0f3',
        title: 'Job Post 4',
        authorFname: 'Lifa',
        authorLname: 'Salleh',
        messageBody: '4 This is a new job',
        datePosted: new Date('2022-08-07T03:16:09.418+00:00')
    },

    {
        authorId: '62e7538937a8e89b4775680c',
        title: 'Job Post 5',
        authorFname: 'Lutfi',
        authorLname: 'Aman',
        messageBody: '5 This is a new job',
        datePosted: new Date('2022-08-07T02:16:09.418+00:00')
    },

    {
        authorId: '62ef41ffba13e821c9c7f0f3',
        title: 'Job Post 6',
        authorFname: 'Lifa',
        authorLname: 'Salleh',
        messageBody: '6 This is a new job',
        datePosted: new Date('2022-08-07T01:16:09.418+00:00')
    },
]

module.exports = seedPostings