const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  user: {
    email: String,
    password: String,
		fname: String,
		lname: String,
		permission: String
  }
});

module.exports = mongoose.model('User', UserSchema);
