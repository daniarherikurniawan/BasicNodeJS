var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var fs = require('fs');

/*Db Helper*/
var user_cont = require('../controller/user_cont');

/* GET home page. */
router.get('/', function(req, res, next) {
  	res.render('index', { title: "Register User"});
});
/* Insert new user */
router.post('/db/user/insert', function(req, res, next) {
  user_cont.insert(req.body, function(response){
    res.sendStatus(response);
  });
});
/* Get list user */
router.post('/db/user/get_all', function(req, res, next) {
  user_cont.get_all(function(response){
    res.send(response);
  });
});
/* Delete user by id */
router.post('/db/user/delete', function(req, res, next) {
  user_cont.delete(req.body, function(response){
    res.sendStatus(response);
  });
});
module.exports = router;
