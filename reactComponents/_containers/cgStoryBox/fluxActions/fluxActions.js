var AppDispatcher = require('../../dispatcher/appDispatcher.js');
//var Constants = require('./actionConstants/actionConstants.js');
var constants = {
	REQUEST_ITEMS: 'REQUEST_ITEMS',
	DELETE_STORY: 'DELETE_STORY'
};
var todoActions = {
	requestItems: function(item){
	    AppDispatcher.handleViewAction({
	      actionType: constants.REQUEST_ITEMS,
	      data: item
	    });
  	},
  	deleteStory: function(item) {
  		AppDispatcher.handleViewAction({
  			actionType: constants.DELETE_STORY,
  			data: item
  		});
  	}
};

module.exports = todoActions;