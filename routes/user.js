const router = require('express').Router();

const uploads = require('../middleware/multer');
const { register } = require('../controller/user')



router.post('/user', uploads.single('profilePicture'), register)

module.exports = router