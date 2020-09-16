const expressLoader = require('./express');
const mongooseLoader = require('./mongoose');

module.exports = class Loaders {
    static async init ( { expressApp }) {
        await mongooseLoader.ConnectDB();
        console.log('MongoDB Intialized');

        await expressLoader.init({app: expressApp});
        console.log('Express Intialized');
    }
};
