var express = require('express');
var router = express.Router();
//skills controller
const skillsCtrl = require('../controllers/skills')


/* GET users listing. */
router.get('/', skillsCtrl.index)
router.get('/:id', skillsCtrl.show)

module.exports = router;
