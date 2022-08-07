const mongoose = require('mongoose')

const postingSchema = new mongoose.Schema({
    authorId: {
        type: String,
        required: true
    },

    title: {
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

    messageBody: {
        type: String,
        required: true
    },

    datePosted: {
        type: Date,
        required: true
    }
})

const Posting = mongoose.model('Posting', postingSchema)
module.exports = Posting