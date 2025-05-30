var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('home', { title: 'Click2Earn', name: null });
});


router.get('/read', function (req, res, next) {
  res.render('read', { title: 'Click2Earn', name: null });
});

router.get('/news', function (req, res, next) {
  res.render('news', { title: 'Click2Earn', name: null });
});

router.post('/', function (req, res, next) {

  res.render('index', { title: 'Click2Earn', name: req.body.name });
});

router.get('/price', function (req, res, next) {
  res.render('price', { title: 'Click2Earn', name: null });
});

router.get('/page2', function (req, res, next) {
  res.render('page2', { title: 'Click2Earn', name: null });
});

router.get('/contactus', function (req, res, next) {
  res.render('contactus', { title: 'Click2Earn', name: null });
});

router.get('/page4', function (req, res, next) {
  res.render('page4', { title: 'Click2Earn', name: null });
});


router.get('/page5', function (req, res, next) {
  res.render('page5', { title: 'Welcome to Click2Earn App', name: null });
});

router.get('/page6', function (req, res, next) {
  res.render('page6', { title: 'Welcome to Click2Earn App', name: null });
});

router.get('/home1', function (req, res, next) {
  res.render('home1', { title: 'Welcome to Click2Earn App', name: null });
});

module.exports = router;
