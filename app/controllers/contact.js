import Ember from 'ember';

export default Ember.Controller.extend({
  emailAddress: '',
  message: '',
  isEmailValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  // isMessageValid: Ember.computed('message', function() {
  //   return this.get('message').length >= 1;
  // }),
  isMessageValid: Ember.computed.gte('message.length', 1),
  allValid: Ember.computed.and('isEmailValid', 'isMessageValid'),
  isDisabled:  Ember.computed.not('allValid'),
  actions: {
    sendMessage() {
      alert(`email: ${this.get('emailAddress')} \nmessage: ${this.get('message')}`);
      this.set('responseMessage', 'We got your message and get in touch soon.');
      this.set('emailAddress', '');
      this.set('message', '');
    }
  },
});
