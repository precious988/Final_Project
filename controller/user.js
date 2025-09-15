const userModel = require('../models/user');
const bcrypt = require('bcrypt')


exports.register = async (req, res) => {
  try {
    const {fullName, email, password, age, phoneNumber} = req.body;

    const existingEmail = await userModel.findOne({email: email.toLowerCase()});
    const existingPhoneNumber = await userModel.findOne({email: email.toLowerCase()});

    if (existingEmail || existingPhoneNumber) {
      return res.status(400).json(`User already exists`)
    }

    const saltRound = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, saltRound);

    const user = new userModel({
      fullName,
      email,
      password: hashPassword,
      age,
      phoneNumber
    });

    res.status(201).json({
      message: `Successfully registered user ${email}`,
      data: user
    })

  } catch (error) {
    res.status(500).json({
      message: `Internal Server Error`,
      error: error.message
    })
  }
}