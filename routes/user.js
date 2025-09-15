const router = require('express').Router();

const uploads = require('../middleware/multer');
const { register, getAuser } = require('../controller/user')



router.post('/user', uploads.single('profilePicture'), register)
router.get('/user/:id', getAuser)

module.exports = router