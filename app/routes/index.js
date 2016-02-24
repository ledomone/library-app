import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('invitation');
  },

  actions: {
    saveInvitation(invitation) {
      invitation.save().then((response) => {
        this.controller.set('responseMessage', `Thank you! We've just saved your email address with the following id: ${response.get('id')}`);
        this.controller.set('model', this.store.createRecord('invitation'));
      });
    }
  }

});
