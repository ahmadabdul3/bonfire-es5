var AppDispatcher = require('../../dispatcher/appDispatcher.js');
//var Constants = require('./actionConstants/actionConstants.js');
var constants = {
	ADD_ITEM: 'ADD_ITEM'
};
var todoActions = {
	addItem: function(item){
	    AppDispatcher.handleViewAction({
	      actionType: constants.ADD_ITEM,
	      data: item
	    });
  }
};

module.exports = todoActions;