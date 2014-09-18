var Router = Ember.Router.extend({
  location: GraphAppENV.locationType
});

Router.map(function() {

  this.resource('sales', function() {
    this.route('create');
    this.route('edit', { path: ':sale_id/edit'});
  });
  this.resource('sale', { path: ':sale_id' });

  this.route('admin');
});

export default Router;