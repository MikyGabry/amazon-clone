const express = require('express');
const app = express();
const PORT = 4000;
const booksController = require('./controllers/books')
const householdProductsController = require('./controllers/householdProducts')
const musicController = require('./controllers/music')
const sportEquipmentController = require('./controllers/sportEquipment')

//Funziona creando variabili (books, music ecc..) impostandoli con i valori delle key nell'oggetto esportato dal fine a cui fai riferimento.
// const { books, householdProducts, music, sportEquipment } = require('./models') // * REDISTRACTURE
// console.log(householdProducts) //da immediatamente il risultato senza aggiornare la pagina web
const { specials } = require('./models')

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:false}))

app.get('/', (req, res) => {
    res.render('home.ejs', {specials})
})

app.use('/books', booksController);
app.use('', householdProductsController);
app.use('', musicController);
app.use('', sportsEquipmentController);

app.listen(PORT, () => {
        console.log(`💸 Server is listening to PORT ${PORT} 🤑`)
}) 