const mongoose = require('mongoose');
const { dbURI } = require('../config');

module.exports = class DB {
    static async ConnectDB () {
        const connection = await mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true});
        // connection.on('connected', () => console.log('connected'));
        return connection.connection.mongoose;
    }
};
