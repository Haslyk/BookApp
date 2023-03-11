const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
require('dotenv').config
const booksPage = require('./src/routers/bookRoutes')
const login = require('./src/routers/userRouter')
const db = require('./src/config/db')


const app = express()
const port = process.env.PORT | 5001

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser())

// Pug template
app.set('view engine', 'pug')
app.set('views', './src/views')

// Routers
app.use('/', login)
app.use('/books', booksPage)

// Public files
app.use(express.static(__dirname + '/src/public'));
app.use(express.static(__dirname + '/src/views'));
app.use(express.static("."));

// Server is running
app.listen(port, () => {
    console.log(`${port} is running.`)
})


// DB query to keep all books as an array on client side
app.get('/allBooks', (req,res) => {
    const query = 'SELECT * FROM books';
    db.query(query, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('An error occurred while retrieving books.');
        } else {
            res.status(200).json(result);
        }
    });
});