const Gig = require('../../models/gigs/gigs')

module.exports = {

    showMainPage: async (req,res) => {

        const postings = await Gig.find().sort('-datePosted').limit(3)
        console.log(postings)

        res.render('pages/main', {
            postings
        })
        

    },
    
    showGigs: async (req,res) => {

        const gigs = await Gig.find()
        console.log(gigs)

        res.render('pages/gigs', {
            gigs
        })
    }
}