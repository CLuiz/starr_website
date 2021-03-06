const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const app            = express();

var router = express.Router();
var path = __dirname + '/views/';

router.use(function (req, res, next) {
    console.log('/' + req.method);
    next();
});

router.get('/', function (req, res) {
    res.sendFile(path + 'eastside.html');
});

router.get('/about', function (req, res) {
    res.sendFile(path + 'about.html');
});
router.get('/westside', function (req, res) {
    res.sendFile(path + 'westside.html');
});

router.get('/contact', function (req, res) {
    res.sendFile(path + 'contact.html');
});

app.use('/', router);

app.use(express.static('public'));

app.use('*', function (req, res) {
    res.sendFile(path + '404.html');
});

app.listen(3000, function () {
    console.log('Live at Port 3000');
});
