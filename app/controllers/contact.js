import Ember from 'ember';

export default Ember.Controller.extend({
  isEmailValid: Ember.computed.match('model.email', /^.+@.+\..+$/),
  isMessageValid: Ember.computed.gte('model.message.length', 1),
  allValid: Ember.computed.and('isEmailValid', 'isMessageValid'),
  isDisabled: Ember.computed.not('allValid'),

  model: Ember.computed(function() {
    return this.store.createRecord('contact');
  }),
  actions: {
    sendMessage() {
      this.get('model').save().then((response) => {
        alert(`email: ${this.get('model.email')} \nmessage: ${this.get('model.message')}`);
        this.set('responseMessage', `We got your message (id: ${response.id})and get in touch soon.`);
        this.set('model', this.store.createRecord('contact'));
      });
    }
  },
});
