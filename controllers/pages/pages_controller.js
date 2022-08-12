const Gig = require('../../models/gigs/gigs')

module.exports = {

    showMainPage: async (req,res) => {

        const postings = await Gig.find().sort('-lastUpdated').limit(3)

        res.render('pages/main', {
            postings
        })
        

    },
    
    showGigs: async (req,res) => {

        const gigs = await Gig.find()

        res.render('pages/gigs', {
            gigs
        })
    }
}