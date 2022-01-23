"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose');
exports.default = mongoose.connect(process.env.ATLAS_URL || 'mongodb://localhost/peoples_purse', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});
module.exports = mongoose.connection;
