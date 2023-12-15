const express = require('mongoose');
const AdminSchema = new mongoose.Schema({
    
    email:{
        type: 'string',
        required: true,
        unique: true
    },
    password:{
        type: 'string',
        required: true,
        minlength: 6
    },
    addedMovies:{
        type: mongoose.Type.ObjectId,
        ref: 'Movies'
    }
});

const admin = mongoose.model('admin',AdminSchema)
module.exports = admin;