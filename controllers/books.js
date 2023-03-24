const express = require('express');
const router = express.Router();
const books = require('../models/Books');
//const { books } = require('../models'); // * REDISTRACTURE

router.get("", (req, res) => {
    res.render('books/index.ejs', {books})
})

router.get('/new', (req, res) => {
    res.render('books/new.ejs')
})

router.get('/:id', (req, res) => {  
    const idx = parseInt(req.params.id)
    const book = books[idx];
    res.render('books/show.ejs', {book})
})

router.post('', (req, res) => {
    console.log(req.body)
    books.push(req.body)
    // res.redirect('/books')
    res.redirect(`books/${books.length - 1}`)
})

module.exports = router;