'use strict'

let express = require('express');
let router = express.Router();

const employeesController = require('../app/controllers/employees_controller')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('layout', { title: 'Express' });
});

// about page
router.get('/about', function(req, res) {
  res.render('about');
});

/* GET employees page */
router.get('/employees', employeesController.index)
router.get('/employees/:id', employeesController.show)

module.exports = router;
