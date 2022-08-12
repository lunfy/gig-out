const Gig = require('../../models/gigs/gigs')
const gigValidators = require('../../validators/gigs')

module.exports = {

    showNewGigForm: (req,res) => {
        res.render('pages/newgig')
    },

    createGig: async (req,res) => {
        // Joi validation
        const validationResults = gigValidators.newGigValidator.validate(req.body)

        if (validationResults.error) {
            res.render('pages/newgig', {
                errMsg: validationResults.error.details[0].message
            })
            console.log('Joi error: '+validationResults.error.details[0].message)
            return
        }

        const validatedResults = validationResults.value

        let cash = ''
        let paynow = ''
        let banktransfer = ''

        if (validatedResults.cashval === '1') {
            cash = 'Cash'
        }

        if (validatedResults.paynowval === '1') {
            paynow = 'PayNow'
        }

        if (validatedResults.banktransferval === '1') {
            banktransfer = 'Bank Transfer'
        }

        const payment = [cash,paynow,banktransfer].filter(Boolean).join(',')

        try {
            await Gig.create({
                title: validatedResults.title,
                type: validatedResults.type,
                workArea: validatedResults.workarea,
                workDate: validatedResults.workdate,
                messageBody: validatedResults.jd,
                paymentBy: payment,
                amount: validatedResults.amount,
                authorId: res.locals.authUser._id,
                authorFname: res.locals.authUser.firstName,
                authorLname: res.locals.authUser.lastName,
                datePosted: new Date()
            })
        } catch (err) {
            res.render('pages/newgig', {
                errMsg: err
            })
            console.log('model error: '+err)
            return
        }

        res.redirect('/gigs')

    },

    showIndGig: async (req,res) => {
        const id = req.params.id
        
        const indGig = await Gig.findById(id)
        res.render('pages/show_gig', {
            indGig
        })
    },

    editGig: async (req,res) => {
        const gigId = req.query.id
        const foundGig = await Gig.findById(gigId)

        res.render('pages/edit_gig', {
            foundGig
        })
    },

    updateGig: async (req,res) => {
        const gigId = req.params.id
        const foundGig = await Gig.findById(gigId)

        const validationResults = gigValidators.newGigValidator.validate(req.body)

        if (validationResults.error) {
            res.render('pages/edit_gig', {
                errMsg: validationResults.error.details[0].message,
                foundGig
            })
            console.log('Joi error: '+validationResults.error.details[0].message)
            return
        }

        const validatedResults = validationResults.value

        await Gig.findByIdAndUpdate(gigId, validatedResults)

        const updateId = await { _id: foundGig._id }
        const lastUpdate = await { lastUpdated: new Date() }
        await Gig.findOneAndUpdate(updateId, lastUpdate, {upsert: true})

        res.redirect(`/gigs/${gigId}`)
    },

    deleteGig: async (req,res) => {
        const id = req.params.id
        const user = res.locals.authUser

        await Gig.findByIdAndDelete(id)

        const postedGigs = await Gig.find({ authorId: res.locals.authUser._id }).exec()

        res.render('pages/profile', {
            postedGigs,
            user,
            deleteGig: 'true'
        })
    }
}