const express = require('express')
const router = express.Router()
const booksController = require('../controllers/bookController')
const authMW = require('../middlewares/auth')

router.get('/', authMW.authenticateToken, booksController.bookGetAll)
router.get('/:id', booksController.bookGet)

router.post('/', booksController.createBook)
router.post('/:id/delete', booksController.deleteBook)
router.post('/:id/edit', booksController.editBook)

// POSTMAN
router.delete('/:id', booksController.deleteBook)
router.put('/:id', booksController.editBook)

module.exports = router
