var express = require('express'),
    fs = require('fs');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('home/index', { title: 'Which Korea?' });
});

router.get('/photos/:id', function(req, res, next) {
    console.log(req.params.id);
    fs.readFile('../photos.json', function(err, data) {
        console.log("IN HERE");
        console.log(data);
    })
    res.render('photos/show', { id: req.params.id });
});

module.exports = router;
