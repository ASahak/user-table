const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;
const roleTypes = require('../utils/constants').SELECT_OPTIONS;

let UserSchema = new Schema({
    _id: {
        type: ObjectId,
        auto: true
    },
    fname: {
        type: String,
        minLength: 2,
        maxLength:256,
        required: true,
    },
    lname: {
        type: String,
        minLength: 2,
        maxLength:256,
        required: true,
    },
    email: {
        type: String,
        minLength: 2,
        maxLength: 256,
        required: true,
    },
    role: {
        type: String,
        enum: [...Object.keys(roleTypes)],
        defaultValue: Object.keys(roleTypes)[0],
        required: true,
    },
}, {versionKey: false, timestamps: true});

module.exports = mongoose.model('User', UserSchema);
