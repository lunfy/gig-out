const postingModel = require('./models/gigs/gigs')

const seedPostings = [

    {
        title: 'Job Post 1',
        type: 'Part-Time',
        workArea: 'Central',
        workDate: '2022-08-18T00:00:00.000Z',
        messageBody: '1 This is a new job',
        paymentBy: 'Cash',
        amount: '150',
        authorId: '62e7538937a8e89b4775680c',
        authorFname: 'Lutfi',
        authorLname: 'Aman',
        datePosted: '2022-08-08T00:00:00.000Z'
    },

    {
        title: 'Job Post 2',
        type: 'Part-Time',
        workArea: 'Central',
        workDate: '2022-08-17T00:00:00.000Z',
        messageBody: '2 This is a new job',
        paymentBy: 'Cash,PayNow',
        amount: '100',
        authorId: '62ef41ffba13e821c9c7f0f3',
        authorFname: 'Lifa',
        authorLname: 'Salleh',
        datePosted: '2022-08-09T00:00:00.000Z'
    },

    {
        title: 'Job Post 3',
        type: 'Part-Time',
        workArea: 'Central',
        workDate: '2022-08-16T00:00:00.000Z',
        messageBody: '3 This is a new job',
        paymentBy: 'Cash',
        amount: '1500',
        authorId: '62e7538937a8e89b4775680c',
        authorFname: 'Lutfi',
        authorLname: 'Aman',
        datePosted: '2022-08-11T00:00:00.000Z'
    },

    {
        title: 'Job Post 4',
        type: 'Part-Time',
        workArea: 'Central',
        workDate: '2022-08-15T00:00:00.000Z',
        messageBody: '4 This is a new job',
        paymentBy: 'Bank Transfer',
        amount: '120',
        authorId: '62ef41ffba13e821c9c7f0f3',
        authorFname: 'Lifa',
        authorLname: 'Salleh',
        datePosted: '2022-08-10T00:00:00.000Z'
    },

    {
        title: 'Job Post 5',
        type: 'Part-Time',
        workArea: 'Central',
        workDate: '2022-08-18T00:00:00.000Z',
        messageBody: '5 This is a new job',
        paymentBy: 'Cash',
        amount: '15',
        authorId: '62e7538937a8e89b4775680c',
        authorFname: 'Lutfi',
        authorLname: 'Aman',
        datePosted: new Date()
    },
]

module.exports = seedPostings