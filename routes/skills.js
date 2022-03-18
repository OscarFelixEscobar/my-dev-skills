var express = require('express');
var router = express.Router();
//skills controller
const skillsCtrl = require('../controllers/skills')


/* GET users listing. */
router.get('/', skillsCtrl.index)

module.exports = router;
