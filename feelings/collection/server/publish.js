import { Feelings } from '../';

Meteor.publish('allFeelings', function () {
  return Feelings.find();
})
