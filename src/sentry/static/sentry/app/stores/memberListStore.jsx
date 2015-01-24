/** @jsx React.DOM */

var Reflux = require("reflux");

// var MemberListActions = require('../actions/aggregateListActions');
var utils = require("../utils");

var MemberListStore = Reflux.createStore({
  // listenables: MemberListActions,

  init: function() {
    this.items = [];
  },

  // TODO(dcramer): this should actually come from an action of some sorts
  loadInitialData: function(items) {
    this.items = items;
    this.trigger(this.items, 'initial');
  },

  getByEmail: function(email) {
    email = email.toLowerCase();
    for (var i=0; i<this.items.length; i++) {
      if (this.items[i].email.toLowerCase() === email) {
        return this.items[i];
      }
    }
    return null;
  }
});

module.exports = MemberListStore;