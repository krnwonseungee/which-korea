var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('home/index', { title: 'Which Korea?' });
});

router.get('/photos/:id', function(req, res, next) {
    console.log(req.params.id);
    res.render('photos/show', { id: req.params.id });
});

module.exports = router;
