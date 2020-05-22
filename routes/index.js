var express = require('express');
var walletController = require('../controller/walletController');
var router = express.Router();

router.post('/wallet',walletController.addWallet);
router.get('/wallet',walletController.getWallet);
router.delete('/wallet',walletController.deleteWallet);
router.put('/wallet',walletController.updateWallet);
module.exports = router;
