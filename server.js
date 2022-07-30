require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const session = require('express-session')

const userController = require('./controllers/users/user_controller')

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

app.get('/', (req,res) => {
    res.send('Welcome!')
})

app.get('/login', userController.showLoginForm)

app.listen(port, async () => {
    try {
        await mongoose.connect(connStr, {dbName: 'gig_out'})
    } catch(err) {
        console.log('Failed to connect to DB')
        process.exit(1)
    }
    console.log('app is running on port: ', port)
})