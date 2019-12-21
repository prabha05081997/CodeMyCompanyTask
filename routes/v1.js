const express = require('express');
const router = express.Router();

const tableController = require('./../api/controllers/tableController');

router.get('/getcolumncreation', tableController.getColumnCreation);
router.post('/postcolumncreation', tableController.postColumnCreation);
router.get('/gettableentry', tableController.getTableEntry);
router.post('/posttableentry', tableController.postTableEntry);
router.get('/gettableview', tableController.getTableView);
router.post('/posttableview', tableController.postTableView);

module.exports = router;