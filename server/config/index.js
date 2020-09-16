const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    dbURI: process.env.MONGODB_URI || 'mongodb://localhost:27017/usertable',
    port: process.env.PORT,
};
