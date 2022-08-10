const Gig = require('../../models/gigs/gigs')

module.exports = {

    showMainPage: async (req,res) => {

        const postings = await Gig.find()

        if (postings != null) {

            res.render('pages/main', {
                postings
            })
        } else {
            res.render('pages/main', {
                postings: null
            })
        }

    },
    
    showGigs: async (req,res) => {

        const gigs = await Gig.find()

        res.render('pages/gigs', {
            gigs
        })
    }
}