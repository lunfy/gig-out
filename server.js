require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const session = require('express-session')

const userController = require('./controllers/users/user_controller')
const pagesController = require('./controllers/pages/pages_controller')

const authMiddleware = require('./middlewares/auth_middleware')
const Postings = require('./models/gigs/gigs')
const seedPostings = require('./seed')

const app = express()
const port = 3000
const connStr = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@generalassembly.orbtbgf.mongodb.net/?retryWrites=true&w=majority`

app.set('view engine','ejs')

app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, httpOnly: false }
}))
app.use(authMiddleware.setAuthUserVar)


app.get('/', (req,res) => {
    res.redirect('/main')
})

app.get('/register', userController.showRegistrationForm)
app.post('/register', userController.register)

app.get('/login', userController.showLoginForm)
app.post('/login', userController.login)

app.post('/main/logout', userController.logout)

app.get('/main', pagesController.showMainPage)

app.get('/profile', authMiddleware.isAuthenticated, userController.showProfile)

app.get('/gigs', authMiddleware.isAuthenticated, pagesController.showGigs)
app.get('/gigs/:id', authMiddleware.isAuthenticated, )

app.get('/seed', (req,res) => {
    const seedDB = async () => {
        await Postings.deleteMany({})
        await Postings.insertMany(seedPostings)
        console.log('successful seeding')
    }
    seedDB()
    res.redirect('/main')
})

app.listen(port, async () => {
    try {
        await mongoose.connect(connStr, {dbName: 'gig_out'})
        console.log('DB Connected!')
    } catch(err) {
        console.log('Failed to connect to DB')
        process.exit(1)
    }
    console.log('app is running on port: ', port)
})