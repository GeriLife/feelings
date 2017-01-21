import { Feelings } from '/feelings/collection';

Template.feelingSelect.events({
  'click .feeling' (event, templateInstance) {
    const feeling = event.currentTarget.id;

    Feelings.insert({ feeling });
  }
});
