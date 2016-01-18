var rfr = require('rfr');
var AppDispatcher = require('../../dispatcher/appDispatcher.js');
var objectAssign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;
var ajax = require('../../../../myModules/ajax/ajax.js');

var appConstants = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  REQUEST_ITEMS: 'REQUEST_ITEMS',
  DELETE_STORY: 'DELETE_STORY'
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
  getStories: function() {
    return _store.getStories();
  }
});

AppDispatcher.register(function(payload){
  var action = payload.action;
  switch(action.actionType){
    case appConstants.REQUEST_ITEMS:
      _store.getStories();
      break;
    case appConstants.ADD_ITEM:
      _store.addItemToList(action.data);
      break;
    case appConstants.DELETE_STORY:
      _store.deleteStory(action.data);
      //store.emit(CHANGE_EVENT);
      break;
    default:
      return true;
  }
});

function funcStore() {
  var self = this;
  var list = [];
  var listDeleteIndex = 0;
  self.addItemToList = funcAddItemToList;
  self.removeItemFromList = funcRemoveItemFromList;
  self.deleteStory = funcDeleteStory;
  self.getList = funcGetList;
  self.getStories = funcGetStories;

  function funcDeleteStory(item) {
    //item = {id, index}
    listDeleteIndex = item.index;
    ajax.request('/cgStories/' + item.id + '/delete', ajax.methods.post, null, removeFromList, null);
  }
  function funcAddItemToList(item) {
    ajax.request('/cgStories', ajax.methods.post, item, updateList, null);
  }
  function funcRemoveItemFromList(index) {
    console.log(index);
    list.splice(index, 1);
  }
  function funcGetList() {
    return list;
  }
  function removeFromList(data) {
    console.log(listDeleteIndex);
    list.splice(listDeleteIndex, 1);
    store.emit(CHANGE_EVENT);
  }
  function funcGetStories() {
    ajax.request('/cgStories', ajax.methods.get, null, updateList, null);
  }
  function updateList(data) {
    if(data && typeof data.length === 'undefined') {
      list.push(data);
    } else if (data && data.length > 1) {
      var length = data.length;
      for(var i = 0; i < length; i++) {
        list.push(data[i]);
      }
    }
    store.emit(CHANGE_EVENT);
  }
}

module.exports = store;