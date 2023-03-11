const db = require('../config/db')

const bookGetAll = async (req,res) => {
    try {
        const getAllQuery = "SELECT * from books"

        db.query(getAllQuery, (error, result) => {
            if(result){
                res.render('books', {books : result})
            }
            else {
                console.log("Error : " + error)
            }
        })

    } catch (error) {
        console.log(error)
    }
}

const bookGet = async (req, res) => {
    try {
        const id = req.params.id
        const getQuery = `SELECT * FROM books where id= ${id}`
        db.query(getQuery, (error, result) => {
            if(result){
                res.render('books', {books: result})
            }
        })
    } catch (error) {
        throw error
    }
}

const createBook = async (req,res) => {
    try {
        const book = req.body
        const insertQuery = `INSERT INTO books(title,description,author,year,cover) values('${book.title}','${book.description}','${book.author}',${book.year},'${book.cover}')`

        db.query(insertQuery, (error,result) => {
            if(result){
                console.log(result)
                res.redirect('/books')
            }
            else {
                console.log(error)
            }
        })

    } catch (error) {
        throw error
    }
}

const deleteBook = async (req,res) => {
    try {
        const book = req.params
        const deleteQuery = `DELETE from books where id='${book.id}'`

        db.query(deleteQuery, (error,result) => {
            if(result){
                console.log(result)
                res.redirect('/books')
            }
            else {
                console.log(error)
            }
        })
    } catch (error) {
        throw error
    }
}

const editBook = async (req,res) => {
    try {
        const bookId = req.params.id
        const book = req.body

        const editQuery = `UPDATE books SET title='${book.title}', description='${book.description}',author='${book.author}',year='${book.year}',cover='${book.cover}' where id='${bookId}'`
        db.query(editQuery, (error,result) => {
            if(result){
                res.redirect('/books')
            }
            else {
                console.log(error)
            }
        })
    } catch (error) {
        throw error
    }
}

// Functions are exported
module.exports = {
    bookGetAll,
    bookGet,
    createBook,
    deleteBook,
    editBook
}