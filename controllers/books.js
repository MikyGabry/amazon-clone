const express = require('express');
const router = express.Router();
let { books } = require('../models');
//const { books } = require('../models'); // * Array destructuring
// Array destructuring. That means if I go to models/index.js, which is the file I'm requiring, I expect that it's exporting an object. I only want the value of books from that object. It creates a variable books that's set to the value of the books key in the export for this file.
let { books } = require('../models');

router.get('', async (req, res, next) => {
    try {
        // Run this Javascript code
        const myBooks = await books.find({});
        console.log(myBooks);
        res.render('books/index', {books: myBooks})
    } catch(err) {
        // If there's an error, it'll go to the catch block
        console.log(err);
        next();
    }
})

router.get('/new', (req, res) => {
    res.render('books/new.ejs')
})

router.get('/:id', async (req, res, next) => {
    try {
        // Grab the book that has the corresponding ID in MongoDB
        const myBook = await books.findById(req.params.id);
        console.log(myBook);
        res.render('books/show', {book: myBook})
    } catch(err) {
        console.log(err);
        next();
    }
})

router.post('', async (req, res, next) => {
    try {
        const newBook = await books.create(req.body);
        console.log(newBook);
        res.redirect('/books')
    } catch(err) {
        console.log(err);
        next();
    }
})

module.exports = router;