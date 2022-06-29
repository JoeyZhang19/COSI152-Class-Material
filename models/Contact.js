'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const Mixed = Schema.Types.Mixed;

var contactSchema = Schema( {
    userId: {type:Schema.Types.ObjectId, ref:'User'},
    name: String,
    email: String,
    phone: String,
    comments: String,
} );

module.exports = mongoose.model( 'Contact', contactSchema );
