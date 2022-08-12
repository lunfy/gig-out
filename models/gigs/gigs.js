const mongoose = require('mongoose')

const postingSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },

    type: {
        type: String,
        required: true
    },

    workArea: {
        type: String,
        required: true
    },

    workDate: {
        type: Date,
        required: true
    },

    messageBody: {
        type: String,
        required: true
    },

    paymentBy: {
        type: String,
        required: true
    },

    amount: {
        type: String,
        required: true
    },

    authorId: {
        type: String,
        required: true
    },

    authorFname: {
        type: String,
        required: true
    },

    authorLname: {
        type: String,
        required: true
    },

    datePosted: {
        type: Date,
        required: true
    },

    lastUpdated: {
        type: Date
    }
})

const Posting = mongoose.model('Posting', postingSchema)
module.exports = Posting