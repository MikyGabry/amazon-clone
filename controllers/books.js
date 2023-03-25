const express = require('express');
const router = express.Router();
let { books } = require('../models');
//const { books } = require('../models'); // * REDISTRACTURE

router.get('', (req, res) => {
    console.log(books);
    res.render('books/index.ejs', {books})
})

router.get('/new', (req, res) => {
    res.render('books/new.ejs')
})

router.get('/:id', (req, res) => {
    const idx = parseInt(req.params.id);
    const book = books[idx];
    // Book.find({}) for index and Book.findById(req.params.id) for show
    console.log(book);
    res.render('books/show.ejs', {book})
})

router.post('', (req, res) => {
    console.log(req.body);
    books.push(req.body);
    res.redirect('/books');
    // res.redirect(`books/${books.length - 1}`)
})

module.exports = router;