const mongoose = require('mongoose');

const verifySchema = new mongoose.Schema({
    guildID: String,
    memberID: String,
    verified: Boolean,
    date: Array
})
module.exports = mongoose.model('VerifySchema', verifySchema)