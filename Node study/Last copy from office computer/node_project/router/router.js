/****Router***/
var express = require('express');
var router     = express();
var controller = require("../controller/main.js");
/*******Router Start*************/
router.get('/', function(req, res) {
  controller.employe(req, res);
});
router.get('/about/:remid', function(req, res) {
  controller.table(req, res);
});
/******Router End****************/
module.exports = router;
