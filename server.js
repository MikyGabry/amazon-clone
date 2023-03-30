const express = require('express');
const app = express();
const PORT = 4000;
const methodOverride = require('method-override')
const booksController = require('./controllers/books')
const householdProductsController = require('./controllers/householdProducts')
const musicController = require('./controllers/music')
const sportsEquipmentController = require('./controllers/sportsEquipment')

//Funziona creando variabili (books, music ecc..) impostandoli con i valori delle key nell'oggetto esportato dal fine a cui fai riferimento.
// const { books, householdProducts, music, sportEquipment } = require('./models') // * ARRAY DESTRUCTURING
// console.log(householdProducts) //da immediatamente il risultato senza aggiornare la pagina web
const { specials } = require('./models')
// I want to specify that all my views for res.render are going to be in a directory I call views. 
app.set('view engine', 'ejs');
// I now also want to make sure I connect this to the CSS files and any DOM manipulation. It expects this to be in a directory named "public"
app.use(express.static('public'));

// This is to help ensure things come in as the req.body when you submit a form. This works for post and put routes
app.use(express.urlencoded({ extended:false }));

// This is allowing forms to both put and delete if they want
app.use(methodOverride('_method'))

app.get('/', (req, res) => {
    res.render('home.ejs', {specials})
})

app.use('/books', booksController);
app.use('', householdProductsController);
app.use('', musicController);
app.use('', sportsEquipmentController);

app.listen(PORT, () => {
    console.log(`$ 💲 ＄ Server is listening to PORT ${PORT} 🤑 💵 💰`)
})