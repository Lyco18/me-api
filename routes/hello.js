var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    const data = {
        data: {
            msg: "Hello World"
        }
    };

    res.json(data);
});

router.get("/hello/:msg", (req, res, next) => {
    const data = {
        data: {
            msg: req.params.msg
        }
    };

    res.json(data);
});

module.exports = router;
