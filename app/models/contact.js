import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  email: DS.attr('string'),
  message: DS.attr('string'),

  isEmailValid: Ember.computed.match('email', /^.+@.+\..+$/),
  isMessageValid: Ember.computed.gte('message.length', 1),
  allValid: Ember.computed.and('isEmailValid', 'isMessageValid'),
  isNotValid: Ember.computed.not('allValid')
});
