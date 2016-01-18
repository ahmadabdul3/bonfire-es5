
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var CgStoryModel = mongoose.model('CgStory');

require('node-jsx').install();
var React = require('react');
var ReactDom = require('react-dom/server');

var Component = require('../reactComponents/_containers/cgStoryBox/cgStoryBox.js');
var ComponentFactory = React.createFactory(Component);
var TheForm = require('../reactComponents/_containers/cgStoryBoxAddNew/cgStoryAddNew.js');
var FormFactory = React.createFactory(TheForm);

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', {
		theform: ReactDom.renderToString(FormFactory()),
		react: ReactDom.renderToString(ComponentFactory()),
	});
});

router.get('/cgStories', function (req, res, next) {
	CgStoryModel.find({isDeleted: false}, function(err, cgStories){
		if(err){ return next(err); }
		res.json(cgStories);
	});
});

router.post('/cgStories', function (req, res, next) {
  var cgStory = new CgStoryModel(req.body);
  cgStory.save(function(err, cgStory){
  	console.log(cgStory);
    if(err){ return next(err); }
    res.json(cgStory);
  });
});

router.param('story', function (req, res, next, id) {
  var query = CgStoryModel.findById(id);

  query.exec(function (err, story){
    if (err) { return next(err); }
    if (!story) { return next(new Error('can\'t find story')); }

    req.story = story;
    return next();
  });
});

router.post('/cgStories/:story/delete', function (req, res, next) {
	req.story.softDelete(function (err, story) {
		if(err) {return next(err);}
		res.json(story);
	});
});


module.exports = router;
