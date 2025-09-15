const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true
  },

  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    lowercase: true
  },

  password: {
    type: String,
    required: true,
  },

  age: {
    type: Number,
    required: true,
  },
    
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },

  profilePicture: {
    imageUrl: {type: String},
    publicId: {type: String},
  }

}, {timeStamp: true});


const userModel = mongoose.model('users', userSchema);

module.exports = userModel