var express = require('express');
var router = express.Router();

// http get
router.get('/', function(req, res, next) {

    var welcome = {
        message : 'Welcome to calculator API',
        version : '1.0.0'
    }

  res.json(welcome);
});

// http post: add, subtract, multiply, divide
router.post('/add', function(req, res, next) {
    var numbers = req.body;
    // { valA: 10, valB: 15}

    var result = numbers.valA + numbers.valB;
    var ret = {
        operation : 'add',
        result : result
    }
    res.json(ret);
});
router.post('/subtract', function(req, res, next) {
    var numbers = req.body;

    var result = numbers.valA - numbers.valB;
    var ret = {
        operation: 'subtract',
        result : result
    }
    res.json(ret);
});
router.post('/multiply', function(req, res, next) {
    var numbers = req.body;

    var result = numbers.valA * numbers.valB;
    var ret = {
        operation : 'multiply',
        result : result
    }
    res.json(ret);
});
router.post('/divide', function(req, res, next) {
    var numbers = req.body;

    var result = numbers.valA / numbers.valB;
    var ret = {
        operation : 'divide',
        result : result
    }
    res.json(ret);
});

module.exports = router;