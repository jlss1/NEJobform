var express = require('express');
var router = express.Router();

var Job = require('../db/model.js');

var getClientFilter = function(query) {
    var result = {
        client: new RegExp(query.client, "i"),
        jobSite: new RegExp(query.jobSite, "i")
    };

    if(query.atSite) {
        result.atSite = query.atSite === 'true' ? true : false;
    }

    if(query.jobType && query.jobType !== '0') {
        result.jobType = parseInt(query.jobType, 10);
    }


    return result;
};

var prepareItem = function(source) {
    var result = source;
    result.atSite = source.atSite === 'true' ? true : false;
    result.jobType = parseInt(source.JobType, 10);
    return result;
};

router.get('/', function(req, res, next) {
    Job.find(getClientFilter(req.query), function(err, items) {
        res.json(items);
    });
});

router.post('/', function(req, res, next) {
    Job.create(prepareItem(req.body), function(err, item) {
        res.json(item);
    });
});

router.put('/', function(req, res, next) {
    var item = prepareItem(req.body);

    Job.findByIdAndUpdate({ _id: item._id }, item, {}, function(err) {
        res.json(item);
    });
});

router.delete('/', function(req, res, next) {
    var item = prepareItem(req.body);

    Job.findByIdAndRemove({ _id: item._id }, {}, function(err) {
        res.json(item);
    });
});


module.exports = router;
