// * Array destructuring
// This connects the config file that links MongoDB and Mongoose to the rules for each of the dbs we create
require('../config/connection');

module.exports = {
    books: require('./Books'),
    householdProducts: require('./HouseholdProducts'),
    music: require('./Music'),
    sportsEquipment: require('./SportsEquipment'),
    specials: require('./Specials')
}