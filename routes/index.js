const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');
console.log('router exported!');

router.get('/', homeController.home);
router.post('/create', homeController.create);
router.post('/delete', homeController.delete);
module.exports = router;