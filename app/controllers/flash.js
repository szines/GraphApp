export default Ember.ObjectController.extend({

  queuedMessage: null,
  currentMessage: null,

  message: Ember.computed.alias('currentMessage'),

  now: function() {
    this.setProperties({
      queuedMessage: null,
      currentMessage: this.get('queuedMessage')
    });
  },

  actions: {
    dismissFlashMessage: function() {
      this.set('currentMessage', null);
    }
  }

});
