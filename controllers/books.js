const express = require('express');
const router = express.Router();
const { books } = require('../models'); // * Array destructuring
// Array destructuring. That means if I go to models/index.js, which is the file I'm requiring, I expect that it's exporting an object. I only want the value of books from that object. It creates a variable books that's set to the value of the books key in the export for this file.

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

router.get('/:id/edit', async (req, res, next) => {
    try {
        const bookToBeEdited = await books.findById(req.params.id);
        console.log(bookToBeEdited);
        res.render('books/edit.ejs', {book: bookToBeEdited})
    } catch(err) {
        console.log(err);
        next()
    }
})

router.put('/:id', async (req, res, next) => {
    try {
        // const formData = req.body;
        // console.log(typeof formData.price);
        // formData.price = 'abcd';
        const updatedBook = await books.findByIdAndUpdate(req.params.id, req.body);
        // console.log(updatedBook);
        res.redirect(`/books/${req.params.id}`)
    } catch(err) {
        console.log(err);
        next();
    }
})

router.get('/:id/delete', async (req, res, next) => {
    try {
        const bookToBeDeleted = await books.findById(req.params.id);
        // console.log(bookToBeDeleted);
        res.render('books/delete.ejs', {book: bookToBeDeleted})
    } catch(err) {
        console.log(err);
        next();
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const deletedItem = await books.findByIdAndDelete(req.params.id);
        // console.log(deletedItem);
        res.redirect('/books');
    } catch(err) {
        console.log(err);
        next();
    }
})

module.exports = router;