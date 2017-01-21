Template.feelings.onCreated(function () {
  // Get reference to template instance
  const templateInstance = this;

  // Set static variable for countdown throttle length, in seconds
  templateInstance.countdownLength = 10;

  // Set reactive variable to countdown from throttle length variable
  // Default to zero (which is falsy)
  templateInstance.countdown = new ReactiveVar(0);
});

Template.feelings.events({
  'click .feeling' (event, templateInstance) {
    // Set countdown reactive variable to countdown throttle length
    templateInstance.countdown.set(templateInstance.countdownLength);
  }
});

Template.feelings.helpers({
  countdown () {
    // Get reference to template instance
    const templateInstance = Template.instance();

    // Return countdown reactive variable
    return templateInstance.countdown.get();
  }
});
