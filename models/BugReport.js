'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const Mixed = Schema.Types.Mixed;

var bugReportSchema = Schema( {
    userId: {type:Schema.Types.ObjectId, ref:'User'},
    shortDescr: String,
    detailDescr: String,
} );

module.exports = mongoose.model( 'BugReport', bugReportSchema );
