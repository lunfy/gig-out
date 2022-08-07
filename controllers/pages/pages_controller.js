const Posting = require('../../models/gigs/gigs')

module.exports = {

    showMainPage: async (req,res) => {

        const postings = await Posting.find()

        res.render('pages/main', {
            postings
        })
    },
    
    showGigs: async (req,res) => {

        const gigs = await Posting.find()

        res.render('pages/gigs', {
            gigs
        })
    },

    showIndGig: async (req,res) => {

    }
}