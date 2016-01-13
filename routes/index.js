require('node-jsx').install();
var React = require('react');
var ReactDom = require('react-dom/server');


var Component = require('../reactComponents/cgStoryBox/mainComponent/cgStoryBox.js');
var ComponentFactory = React.createFactory(Component);

var TheForm = require('../reactComponents/cgStoryBoxAddNew/mainComponent/cgStoryAddNew.js');
var FormFactory = React.createFactory(TheForm);


var express = require('express');
var router = express.Router();


var mongoose = require('mongoose');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
  	title: 'bla',
  	theform: ReactDom.renderToString(FormFactory()),
  	react: ReactDom.renderToString(ComponentFactory()),
  	
  });
  //res.end();
});

module.exports = router;

//var TheForm = require('../react-components/cg-story-add-item-form/cg-story-add-item-form.js');
//var FormFactory = React.createFactory(TheForm);

//theform: ReactDom.renderToString(FormFactory()),

/*router.get('/react', function (req, res, next) {
  var markup = ReactDOMServer.renderToString(ComponentFactory());
  res.send(markup);
});*/