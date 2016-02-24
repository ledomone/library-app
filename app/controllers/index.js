import Ember from 'ember';

export default Ember.Controller.extend({
  isValid: Ember.computed.match('model.email', /^.+@.+\..+$/),
  isDisabled: Ember.computed.not('isValid'),
  actualEmailAddress: Ember.computed('model.email', function() {
    console.log('actualEmailAddress function is called: ', this.get('model.email'));
  }),
  emailAddressChanged: Ember.observer('model.email', function() {
    console.log('observer is called', this.get('model.email'));
  }),
});
