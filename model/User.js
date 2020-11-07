/** The basic things and attributes that we want about a user will be specified here and this will automatically create and validate our data according to that model */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//  Create the User Schema
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
});

/** "users" is for the users table and this is the name of the collection which we are going to remove or document which we will be using with references to the UserSchema */
module.exports = User = mongoose.model('users', UserSchema);
