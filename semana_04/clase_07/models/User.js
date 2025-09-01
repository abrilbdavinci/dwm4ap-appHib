'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//crear esquema

const miEsquema = new Schema({
    nombre: String,
    email: String,
    password: String,
    foto: String
});


const User = mongoose.model('User', miEsquema);

module.exports = User;