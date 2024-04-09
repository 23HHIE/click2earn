var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('home', { title: 'Click2Earn', name: null });
});

router.get('/demo', function (req, res, next) {
  res.render('demo', { title: 'Click2Earn', name: null });
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

router.get('/page1', function (req, res, next) {
  res.render('page1', { title: 'Click2Earn', name: null });
});

router.get('/page2', function (req, res, next) {
  res.render('page2', { title: 'Click2Earn', name: null });
});

router.get('/page3', function (req, res, next) {
  res.render('page3', { title: 'Click2Earn', name: null });
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
