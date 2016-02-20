import Ember from 'ember';

export default Ember.Route.extend({
  actions: {

    willTransition() {
      let model = this.controller.get('model');

      if (model.get('isNew')) {
        model.destroyRecord();
      }
    }
  }
});
