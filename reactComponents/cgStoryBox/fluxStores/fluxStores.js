var AppDispatcher = require('../../dispatcher/appDispatcher.js');
//var Constants = require('../fluxActions/actionConstants/actionConstants.js');
var objectAssign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;

var appConstants = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM'
}
var CHANGE_EVENT = 'change';

var _store = new funcStore();

var store = objectAssign({}, EventEmitter.prototype, {
  addChangeListener: function(cb){
    this.on(CHANGE_EVENT, cb);
  },
  removeChangeListener: function(cb){
    this.removeListener(CHANGE_EVENT, cb);
  },
  getList: function(){
    return _store.getList();
  },
});

AppDispatcher.register(function(payload){
  var action = payload.action;
  switch(action.actionType){
    case appConstants.ADD_ITEM:
      _store.addItemToList(action.data);
      store.emit(CHANGE_EVENT);
      break;
    case appConstants.REMOVE_ITEM:
      _store.removeItemFromList(action.data);
      store.emit(CHANGE_EVENT);
      break;
    default:
      return true;
  }
});

function funcStore() {
  var self = this;
  var list = [
    {
      header: 'one',
      body: 'one'
    },
    {
      header: 'two',
      body: 'two'
    },
    {
      header: 'three',
      body: 'three'
    }
  ];
  self.addItemToList = funcAddItemToList;
  self.removeItemFromList = funcRemoveItemFromList;
  self.getList = funcGetList;

  function funcAddItemToList(item) {
    list.push(item);
  }
  function funcRemoveItemFromList(index) {
    list.splice(index, 1);
  }
  function funcGetList() {
    return list;
  }
}

module.exports = store;