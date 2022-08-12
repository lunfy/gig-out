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