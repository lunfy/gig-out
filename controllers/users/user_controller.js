const bcrypt = require('bcrypt')
const userModel = require('../../models/users/user')
const userValidators = require('../../validators/users')
const errMsg = 'Login Error: Username or password incorrect'

module.exports = {

    showRegistrationForm: (req,res) => {
        res.render('pages/register', {
            errMsg: ''
        })
    },

    register: async (req,res) => {
        // Joi validation
        // All required fields + ensuring password fields are identical
        const validationResults = userValidators.registerValidator.validate(req.body)

        if (validationResults.error) {
            res.render('pages/register', {
                errMsg: validationResults.error.details[0].message
            })
            return
        }

        const validatedResults = validationResults.value

        // hash password using bcrypt
        const hash = await bcrypt.hash(validatedResults.password, 10)

        // create the user and store in DB
        try {
            await userModel.create({
                firstName: validatedResults.firstname,
                lastName: validatedResults.lastname,
                email: validatedResults.email,
                password: hash,
                accountCreated: new Date()
            })
        } catch(err) {
            res.render('pages/register', {
                errMsg: err
            })
            return
        }

        res.redirect('/login')
    },

    showLoginForm: (req,res) => {
        res.render('pages/login', {
            errMsg: ''
        })
    },

    login: async (req,res) => {
        // validations
        const validationResults = userValidators.loginValidator.validate(req.body)

        if (validationResults.error) {
            res.render('pages/login', {
                errMsg: validationResults.error.details[0].message
            })
            return
        }

        const validatedResults = validationResults.value
        let foundUser = null

        try {
            foundUser = await userModel.findOne({email: validatedResults.email})
            if (!foundUser) {
                res.render('pages/login', {
                    errMsg
                })
                return
            }
        } catch(err) {
            res.render('pages/login', {
                errMsg: err
            })
            return
        }
        
        // using bcrypt to compare given password with one stored as hash in DB
        const pwMatch = await bcrypt.compare(validatedResults.password, foundUser.password)
        if (!pwMatch) {
            res.render('pages/login', {
                errMsg
            })
            return
        }

        // log user in by creating a session
        req.session.regenerate(function (err) {
            if (err) {
                res.render('pages/login', {
                    errMsg: err
                })
                return
            }
        })

        req.session.user = foundUser
        req.session.save(function (err) {
            if (err) {
                res.render('pages/login', {
                    errMsg: err
                })
                return
            }
        })

        res.redirect('/main')
    },

    showProfile: (req,res) => {
        res.render('pages/profile')
    },

    logout: (req,res) => {
        res.locals.authUser = null
        req.session.destroy(() => {
            res.redirect('/main')
        })
    }
}